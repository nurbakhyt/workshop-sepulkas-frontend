import Vue from 'vue';
// import axios from '../../services/http';

export default {
  namespaced: true,
  state: {
    token: '',
  },
  getters: {
    token: (state) => state.token,
  },
  actions: {
    async login({ commit }, form) {
      const response = await Vue.$axios.post('/api/v1/token/', form);

      const { access } = response.data;

      commit('SET_TOKEN', access);
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
};
