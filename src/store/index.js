import Vue from 'vue';
import Vuex from 'vuex';
import localforage from 'localforage';
import VuexPersistence from 'vuex-persist';

import modules from './modules';

const vuexPersistEmitter = () => (store) => {
  store.subscribe((mutation) => {
    if (mutation.type === 'RESTORE_MUTATION') {
      store._vm.$root.$emit('storageReady');
    }
  });
};

const vuexLocal = new VuexPersistence({
  storage: localforage,
  asyncStorage: true,
  strictMode: true,
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  mutations: {
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
  },
  plugins: [
    vuexLocal.plugin,
    vuexPersistEmitter(),
  ],
  strict: process.env.NODE_ENV !== 'production',
});
