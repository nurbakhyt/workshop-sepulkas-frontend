import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import sepulkas from './modules/sepulkas';
import auth from './modules/auth';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth'],
});

export default new Vuex.Store({
  modules: {
    auth,
    sepulkas,
  },
  plugins: [vuexLocal.plugin],
});
