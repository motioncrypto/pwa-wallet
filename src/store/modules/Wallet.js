import bitcoin from 'bitcoinjs-lib';
// import axios from 'axios';

const state = {
  wallets: [],
  balance: 0,
};

const mutations = {
  ADD_WALLET(state, payload) {
    state.wallets.push(payload.wallet);
  },
  UPDATE_BALANCE(state, payload) {
    state.balance = payload.balance;
  },
};

const actions = {
  generateWallet({ rootState, commit }, name) {
    const keyPair = bitcoin.ECPair.makeRandom({ network: rootState.Settings.network });
    const wif = keyPair.toWIF();
    const { address } = bitcoin.payments.p2pkh({
      pubkey: keyPair.publicKey,
      network: rootState.Settings.network,
    });

    commit('ADD_WALLET', {
      wallet: {
        address,
        wif,
        name,
        balance: 0,
      },
    });
  },
  // updateBalance({ state, commit }) {
  //   // Obtain balance from all wallets and update all
  // },
};

export default {
  state,
  mutations,
  actions,
};
