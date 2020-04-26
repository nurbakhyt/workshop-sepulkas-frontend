import Vue from 'vue';
import Vuex from 'vuex';
import sepulkas from './modules/sepulkas';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    sepulkas,
  },
});
