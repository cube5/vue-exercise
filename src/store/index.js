import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import api from '../api';

Vue.use(Vuex);

const user = {
  namespaced: true,
  state: {
    profile: {},
    loading: false,
    error: null,
  },
  actions: {
    fetchUserProfile({ commit }, id) {
      commit('setLoading', true);
      api
        .fetchUser(id)
        .then(resp => resp.data)
        .then(profile => {
          commit('setLoading', false);
          commit('setUserProfile', profile);
        })
        .catch(err => commit('setError', err));
    },
  },
  mutations: {
    setUserProfile(state, profile) {
      state.profile = profile;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.loading = false;
      state.error = error;
    },
  },
};

const blog = {
  namespaced: true,
  state: {
    posts: [],
    loading: false,
    error: null,
  },
  getters: {
    posts(state, getters, rootState) {
      const { user } = rootState;
      return state.posts.filter(post => post.userId !== user.profile.id);
    },
    userPosts(state, getters, rootState) {
      const { user } = rootState;
      return state.posts.filter(post => post.userId === user.profile.id);
    },
  },
  actions: {
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
  },
  mutations: {
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
  },
};

const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    user,
    blog,
  },
});

export default store;
