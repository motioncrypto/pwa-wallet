const state = {
  network: {
    messagePrefix: '\x19Motion Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x32,
    scriptHash: 0x12,
    wif: 0x80,
  },
};

export default {
  state,
};
