import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    token: '',
    error: '',
  },
  getters: {
    token: (state) => state.token,
    error: (state) => state.error,
  },
  actions: {
    async login({ commit }, form) {
      try {
        const response = await Vue.$axios.post('/api/v1/token/', form);

        const { access } = response.data;

        commit('SET_TOKEN', access);
      } catch (e) {
        if (e.response.status === 401) {
          const { response: { data: { detail: message } } } = e;

          commit('LOGIN_FAILED', message);
        }
      }
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      state.error = '';
    },
    LOGIN_FAILED(state, message) {
      state.error = message;
    },
    LOGOUT(state) {
      state.token = '';
      state.error = '';
    },
  },
};
