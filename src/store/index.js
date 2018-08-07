import Vue from 'vue';
import Vuex from 'vuex';
import localforage from 'localforage';
import VuexPersistence from 'vuex-persist';

import modules from './modules';

const vuexLocal = new VuexPersistence({
  storage: localforage,
  asyncStorage: true,
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== 'production',
});
