// import bitcoin from 'bitcoinjs-lib';

const state = {
  txs: [],
};

const mutations = {
  ADD_TX(state, payload) {
    state.txs.push(payload.tx);
  },
};

const actions = {
  // sendCoins({ rootState, commit }, qty) {
  //   const txb = new bitcoin.TransactionBuilder(rootState.Settings.network);

  //   // Look for unspent funds to create a TX

  //   commit('ADD_TX', {
  //     qty: 0,
  //   });
  // },
};

export default {
  state,
  mutations,
  actions,
};
