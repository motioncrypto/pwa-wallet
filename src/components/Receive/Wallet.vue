<template>
  <div class="move">
    <div class="left-side">
      <b-tooltip label="Copy wallet address" :animated="true">
        <img src="./assets/icon-copy.png" class="icon" @click="copyAddress(wallet)" />
      </b-tooltip>
    </div>
    <b-dropdown>
      <div class="right-side" slot="trigger">
        <div class="top">
          <div class="date">
            <p>{{title}}</p>
          </div>
          <div class="amount">
            <p>{{amount}} <span class="bolder">XMN</span></p>
          </div>
        </div>
        <div class="bottom">
          <p>{{wallet}}</p>
        </div>
      </div>

      <b-dropdown-item @click="copyAddress(wallet)">Copy Address</b-dropdown-item>
      <b-dropdown-item @click="refreshBalances()">Refresh Balance</b-dropdown-item>
      <b-dropdown-item @click="copyPrivateKey(wif)">Copy Private Key</b-dropdown-item>
      <b-dropdown-item @click="confirmDeleteWallet(wallet, amount)">Delete Wallet</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: ['title', 'amount', 'wallet', 'wif'],
  methods: {
    copyAddress(wallet) {
      this.$copyText(wallet).then(() => {
        this.$toast.open({
          message: 'Wallet address is now in your clipboard',
          queue: false,
        });
      }, () => {
        this.$toast.open({
          message: 'Cannot copy',
          queue: false,
        });
      });
    },
    refreshBalances() {
      this.updateBalance();
    },
    copyPrivateKey(wif) {
      this.$copyText(wif).then(() => {
        this.$toast.open({
          message: 'Wallet Private Key is now in your clipboard',
          queue: false,
        });
      }, () => {
        this.$toast.open({
          message: 'Cannot copy',
          queue: false,
        });
      });
    },
    confirmDeleteWallet(wallet, amount) {
      this.$dialog.confirm({
        title: 'Deleting wallet',
        message: `Are you sure you want to \
          <b>delete</b> your wallet? This action cannot be \
          undone${amount ? ', and you could lose your remaining funds if you haven\'t saved your private key.' : '.'}`,
        confirmText: 'Delete Wallet',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.$store.commit('REMOVE_WALLET', {
          wallet,
        }),
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.move {
  width: 50%;
  background: rgba(255,255,255,0.70);
  box-shadow: 0 2px 8px 0 #5C5C5C;
  border-radius: 10px;
  padding: 16px 14px;
  max-width: 90%;
  margin: 20px auto;
  font-size: 0.9em;

  .icon {
    height: 35px;
    width: auto;
    cursor: pointer;
  }

  display: grid;
  grid-template-columns: 50px auto;
  justify-items: center;
  align-content: center;

  @media screen and (max-width: $break-mobile) {
    width: 90%;
  }

  .right-side {
    padding-left: 20px;
    padding-right: 20px;
    color: #001B38;
    cursor: pointer;

    .top {
      width: 100%;
    }

    .top .date {
      float: left;
      color: #4D4D4D;
    }

    .top .amount {
      float: right;
      margin-left: 20px;
    }

    .bolder {
      font-weight: bolder;
    }

    .bottom {
      width: 100%;

      p {
        font-size: 0.8em;
      }
    }
  }
}
</style>
