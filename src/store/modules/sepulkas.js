import axios from '@/services/http';

export default {
  namespaced: true,
  state: {
    sepulkas: [],
  },
  getters: {
    sepulkas: (state) => state.sepulkas,
  },
  actions: {
    GET_SEPULKAS: async ({ commit }) => {
      const response = await axios.get('/api/v1/sepulkas');

      commit('SET_LIST', response.data);
    },
  },
  mutations: {
    SET_LIST(state, list) {
      state.sepulkas = list;
    },
  },
};
