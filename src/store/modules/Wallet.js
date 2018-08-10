import bitcoin from 'bitcoinjs-lib';
import axios from 'axios';
import { Toast } from 'buefy';
import http from '@/helpers/http';

const state = {
  wallets: [],
  balance: 0,
  unconfirmed: 0,
};

const getters = {
  getWifByWalletAddress(state) {
    return address => state.wallets.find(wallet => wallet.address === address).wif;
  },
};

const mutations = {
  ADD_WALLET(state, payload) {
    if (!state.wallets.find(wallet => payload.wallet.address === wallet.address)) {
      state.wallets.push(payload.wallet);
    }
  },
  UPDATE_BALANCE(state, payload) {
    state.balance = payload.balance;
    state.unconfirmed = payload.unconfirmed;
  },
  UPDATE_WALLET_BALANCE(state, payload) {
    const foundIndex = state.wallets.findIndex(wallet => wallet.address === payload.wallet);
    if (foundIndex !== -1) {
      state.wallets[foundIndex].balance = payload.balance;
      state.wallets[foundIndex].unconfirmed = payload.unconfirmed;
    }
  },
  REMOVE_WALLET(state, payload) {
    const foundIndex = state.wallets.findIndex(wallet => wallet.address === payload.wallet);
    if (foundIndex !== -1) {
      state.wallets.splice(foundIndex, 1);
    }
  },
};

const actions = {
  generateWallet({ rootState, commit, dispatch }, name) {
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
        unconfirmed: 0,
      },
    });
    dispatch('updateBalance');
  },
  updateBalance({ state, commit }) {
    const promises = [];

    // Obtain balance from all wallets and update all
    state.wallets.forEach(wallet => promises.push(http.post('/', {
      id: 0,
      method: 'blockchain.address.get_balance',
      params: [wallet.address],
    })));

    return axios.all(promises).then((results) => {
      commit('UPDATE_BALANCE', {
        balance: 0,
        unconfirmed: 0,
      });
      results.forEach((response) => {
        if (response.data.success) {
          commit('UPDATE_BALANCE', {
            balance: state.balance + (response.data.result.confirmed / 100000000),
            unconfirmed: state.unconfirmed + (response.data.result.unconfirmed / 100000000),
          });
          commit('UPDATE_WALLET_BALANCE', {
            wallet: JSON.parse(response.config.data).params[0],
            balance: response.data.result.confirmed / 100000000,
            unconfirmed: response.data.result.unconfirmed / 100000000,
          });
        } else {
          throw new Error('Something is wrong');
        }
      });
    }).catch((err) => {
      Toast.open({
        duration: 5000,
        message: err,
        position: 'is-bottom',
        type: 'is-danger',
      });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
