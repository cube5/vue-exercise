import api from '../../api';

export const getters = {
  posts(state, getters, rootState) {
    const { user } = rootState;
    return state.posts.filter(post => post.userId !== user.profile.id);
  },
  userPosts(state, getters, rootState) {
    const { user } = rootState;
    return state.posts.filter(post => post.userId === user.profile.id);
  },
};

export const actions = {
  fetchPosts({ commit }) {
    commit('setLoading', true);
    api
      .fetchPosts()
      .then(resp => resp.data)
      .then(posts => {
        commit('setLoading', false);
        commit('setPosts', posts);
      })
      .catch(err => commit('setError', err));
  },
};

export const mutations = {
  setPosts(state, posts = []) {
    state.posts = posts;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setError(state, error) {
    state.loading = false;
    state.error = error;
  },
};

const blog = {
  namespaced: true,
  state: {
    posts: [],
    loading: false,
    error: null,
  },
  getters,
  actions,
  mutations,
};

export default blog;
