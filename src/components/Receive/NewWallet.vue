<template>
  <div class="new-wallet">
    <p @click="isModalActive=true">Generate new wallet</p>
    <b-modal :active.sync="isModalActive">
      <div class="card">
        <div class="card-content">
          <form @submit.prevent="generateNewWallet">
            <b-field label="Wallet name">
              <b-input placeholder="Wallet name"
                icon="wallet"
                v-model="newWalletName">
              </b-input>
            </b-field>
            <button type="submit" class="button is-primary">Create wallet</button>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalActive: false,
      newWalletName: 'Wallet',
    };
  },
  methods: {
    generateNewWallet() {
      this.isModalActive = false;
      this.$store.dispatch('generateWallet', this.newWalletName);
    },
  },
};
</script>


<style lang="scss" scoped>
.new-wallet {
  margin-top: 20px;
  margin-bottom: 80px;
}

p {
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
}
</style>
