import bitcoin from 'bitcoinjs-lib';
import axios from 'axios';
import { Toast } from 'buefy';
import http from '@/helpers/http';

const state = {
  txs: [],
};

const mutations = {
  ADD_TX(state, payload) {
    if (!state.txs.find(tx => tx.txId === payload.tx.txId)) {
      state.txs.push(payload.tx);
    } else {
      const foundIndex = state.txs.findIndex(tx => tx.txId === payload.tx.txId);
      if (foundIndex !== -1) {
        state.txs[foundIndex] = payload.tx;
      }
    }
  },
  RESET_TXS(state) {
    state.txs = [];
  },
};

const getters = {
  getTxById(state) {
    return id => state.txs.find(tx => tx.txId === id);
  },
};

const actions = {
  sendCoins({
    rootState, dispatch, commit, rootGetters,
  }, payload) {
    const txb = new bitcoin.TransactionBuilder(rootState.Settings.network);
    const amountToSend = Number(payload.sendData.amount) * 100000000;
    const fee = 0.00001 * 100000000;
    const promises = [];
    let walletsUsed = [];
    rootState.Wallet.wallets.forEach(wallet => promises.push(http.post('/', {
      id: 0,
      method: 'blockchain.address.listunspent',
      params: [wallet.address],
    })));

    return axios.all(promises).then((results) => {
      let spendable = 0;
      const spendableTxs = [];
      results.forEach((response) => {
        if (response.data.success) {
          response.data.result.forEach((spendableTx) => {
            // eslint-disable-next-line
            spendableTx.wallet = JSON.parse(response.config.data).params[0];
            spendableTxs.push(spendableTx);
            spendable += spendableTx.value;
          });
        }
      });
      txb.setVersion(1);

      // Look for unspent funds to create a TX
      if (amountToSend + fee > spendable) {
        throw new Error('You don\'t have enought funds to send');
      } else {
        let inputsAmount = 0;
        let iteration = 0;

        while (inputsAmount <= amountToSend) {
          txb.addInput(spendableTxs[iteration].tx_hash, spendableTxs[iteration].tx_pos);
          inputsAmount += spendableTxs[iteration].value;
          walletsUsed.push(spendableTxs[iteration].wallet);
          iteration += 1;
        }

        const remainder = inputsAmount - amountToSend - fee;
        txb.addOutput(payload.sendData.address, amountToSend);
        if (remainder > 0) {
          txb.addOutput(spendableTxs[iteration - 1].wallet, remainder);
        }

        for (let i = 0; i < iteration; i += 1) {
          const ecpair = bitcoin
            .ECPair
            .fromWIF(
              rootGetters.getWifByWalletAddress(spendableTxs[i].wallet),
              rootState.Settings.network,
            );
          txb.sign(i, ecpair);
        }

        const rawTx = txb.build().toHex();
        // const txSize = rawTx.length * 0.5;
        return http.post('/', {
          id: 0,
          method: 'blockchain.transaction.broadcast',
          params: [rawTx],
        });
      }
    }).then((txResponse) => {
      if (txResponse.data.success) {
        walletsUsed = walletsUsed.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
        walletsUsed.forEach((wallet) => {
          commit('ADD_TX', {
            tx: {
              wallet,
              txId: txResponse.data.result,
              value: Number(payload.sendData.amount) + (fee / 100000000),
              date: Math.floor(Date.now() / 1000) || 0,
              type: 'send',
            },
          });
        });

        Toast.open({
          duration: 5000,
          message: `Coins sent successful. Tx Id: ${txResponse.data.result}`,
          position: 'is-bottom',
          type: 'is-success',
        });

        dispatch('updateBalance');
        dispatch('updateTxs');
      } else {
        throw new Error(txResponse.data.message.message);
      }
    }).catch((error) => {
      Toast.open({
        duration: 5000,
        message: error,
        position: 'is-bottom',
        type: 'is-danger',
      });
    });
  },
  updateTxs({
    rootState, state, commit, getters,
  }) {
    const promises = [];

    rootState.Wallet.wallets.forEach(wallet => promises.push(http.post('/', {
      id: 0,
      method: 'blockchain.address.get_history',
      params: [wallet.address],
    })));

    return axios.all(promises).then((results) => {
      results.forEach((response) => {
        const wallet = JSON.parse(response.config.data).params[0];
        if (response.data.success) {
          response.data.result.forEach((tx) => {
            if (!state.txs.find(currentTx => currentTx.txId === tx.tx_hash) ||
              !getters.getTxById(tx.tx_hash).date) {
              http.post('/', {
                id: 0,
                method: 'blockchain.transaction.get',
                params: [tx.tx_hash, true],
              }).then((txResponse) => {
                if (txResponse.data.success) {
                  txResponse.data.result.vout.forEach((vout) => {
                    if (vout.scriptPubKey.addresses[0] === wallet) {
                      commit('ADD_TX', {
                        tx: {
                          wallet,
                          txId: tx.tx_hash,
                          txPos: vout.n,
                          height: txResponse.data.result.height,
                          blockHash: txResponse.data.result.blockhash,
                          value: vout.value,
                          date: txResponse.data.result.time,
                          type: 'receive',
                        },
                      });
                    }
                  });
                }
              }).catch((err) => {
                Toast.open({
                  duration: 5000,
                  message: err,
                  position: 'is-bottom',
                  type: 'is-danger',
                });
              });
            }
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
