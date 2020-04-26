import Vue from 'vue';
// import axios from '../../services/http';

export default {
  namespaced: true,
  state: {
    sepulkas: [],
  },
  getters: {
    sepulkas: (state) => state.sepulkas,
  },
  actions: {
    fetchSepulkas: async ({ commit }) => {
      const response = await Vue.$axios.get('/api/v1/sepulkas/');

      commit('SET_LIST', response.data);
    },
  },
  mutations: {
    SET_LIST(state, list) {
      state.sepulkas = list;
    },
  },
};
