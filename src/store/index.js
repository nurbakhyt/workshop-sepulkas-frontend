import Vue from 'vue';
import Vuex from 'vuex';
import sepulkas from './modules/sepulkas';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sepulkas,
  },
});
