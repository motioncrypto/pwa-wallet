<template>
  <div id="scan-form">
    <div class="current-balance">
      <div class="left">
        <p>Current Balance</p>
      </div>
      <div class="right">
        <p>{{confirmedBalance}} <span class="bolder">XMN</span></p>
      </div>
    </div>

    <form @submit.prevent="confirmSend">
      <div class="field">
        <label class="label">Please enter the destination XMN Wallet Address</label>
        <div class="control">
          <input class="input"
            type="text"
            placeholder="Motion Wallet"
            v-model="sendData.address">
        </div>
      </div>

      <div class="field">
        <label class="label">Amount to send</label>
        <div class="control">
          <input class="input"
            type="number"
            step="0.0000000001"
            placeholder="Motion Wallet"
            v-model="sendData.amount">
        </div>
      </div>
      <button type="submit" class="button is-primary" :disabled="!isFormValid">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['address'],
  data() {
    return {
      sendData: {
        address: '',
        amount: null,
      },
    };
  },
  computed: {
    isFormValid() {
      let isValid = false;
      if (this.sendData.address && this.sendData.amount) {
        isValid = true;
      }
      return isValid;
    },
    confirmedBalance() {
      // return 0;
      return this.$store.state.Wallet.balance;
    },
  },
  methods: {
    updateBalance() {
      this.$store.dispatch('updateBalance');
    },
    confirmSend() {
      this.$dialog.confirm({
        title: 'Confirm Transaction',
        message: `You are about to send <b>${this.sendData.amount}</b> to <b>${this.sendData.address}</b>. 0.00001 XMN will be added as tx fees \
         thats a total of <b>${Number(this.sendData.amount) + 0.00001} XMN</b>. Do you want to continue?`,
        confirmText: 'Continue',
        type: 'is-success',
        hasIcon: true,
        onConfirm: () => this.sendCoins(),
      });
    },
    sendCoins() {
      if (this.confirmedBalance >= (Number(this.sendData.amount) + 0.00001)) {
        this.$store.dispatch('sendCoins', {
          sendData: this.sendData,
        });
      } else {
        this.$toast.open({
          message: 'You haven\'t enought balance',
          queue: false,
        });
      }
    },
  },
  mounted() {
    this.updateBalance();

    if (this.address) {
      this.sendData.address = this.address;
    }
  },
};
</script>

<style lang="scss" scoped>
#scan-form {
  background: rgba(255,255,255,0.70);
  box-shadow: 0 2px 8px 0 #5C5C5C;
  border-radius: 10px;
  color: #000;
  min-height: 50px;
  padding: 20px 30px;
  margin: 30px auto;
  width: 50%;

  @media screen and (max-width: $break-mobile) {
    width: 90%;
  }
}

.current-balance {
  clear: both;

  .left {
    float: left;
  }

  .right {
    float: right;

    .bolder {
      font-weight: bolder;
    }
  }
}

form {
  clear: both;
  margin-top: 50px;

  label.label {
    text-align: left;
    font-weight: lighter;
  }

  button {
    width: 50%;
    margin-top: 15px;
  }
}
</style>
