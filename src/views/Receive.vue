<template>
  <div id="receive">
    <Title title="Receive" />
    <div class="container">
      <Wallet v-for="(wallet, index) in wallets" v-bind:key="index"
        :title="wallet.name"
        :wallet="wallet.address"
        :amount="wallet.balance" />
      <NewWallet />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Common/Title.vue';
import Wallet from '@/components/Receive/Wallet.vue';
import NewWallet from '@/components/Receive/NewWallet.vue';

export default {
  components: {
    Title,
    Wallet,
    NewWallet,
  },
  computed: {
    wallets() {
      return this.$store.state.Wallet.wallets;
    },
  },
};
</script>
