<template>
  <div class="new-wallet">
    <p @click="isModalActive=true">Generate new wallet</p>
    <b-modal :active.sync="isModalActive">
      <div class="card">
        <b-tabs v-model="activeTab">
          <b-tab-item label="New wallet" icon="plus">
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
          </b-tab-item>
          <b-tab-item label="Private key" icon="file-import">
            <div class="card-content">
              <form @submit.prevent="importPrivateKey">
                <b-field label="Wallet name">
                  <b-input placeholder="Wallet name"
                    icon="wallet"
                    v-model="newWalletName">
                  </b-input>
                </b-field>
                <b-field label="Private key">
                  <b-input placeholder="Private key"
                    icon="key"
                    v-model="privateKey">
                  </b-input>
                </b-field>
                <button type="submit" class="button is-primary">Import key</button>
              </form>
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      isModalActive: false,
      newWalletName: 'Wallet',
      privateKey: '',
    };
  },
  methods: {
    generateNewWallet() {
      this.isModalActive = false;
      this.$store.dispatch('generateWallet', this.newWalletName);
    },
    importPrivateKey() {
      this.isModalActive = false;
      this.$store.dispatch('importPrivateKey', {
        name: this.newWalletName,
        privateKey: this.privateKey,
      });
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
