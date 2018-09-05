import api from '../../api';

export const actions = {
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
};

export const mutations = {
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
};

const user = {
  namespaced: true,
  state: {
    profile: {},
    loading: false,
    error: null,
  },
  actions,
  mutations,
};

export default user;
