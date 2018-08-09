<template>
  <div id="balance">
    <p>Current Balance</p>
    <h2>{{confirmedBalance}} <span class="bold">XMN</span></h2>
  </div>
</template>

<script>
export default {
  computed: {
    confirmedBalance() {
      // return 0;
      return this.$store.state.Wallet.balance;
    },
  },
  methods: {
    updateBalance() {
      this.$store.dispatch('updateBalance');
    },
  },
  mounted() {
    this.$store._vm.$root.$on('storageReady', () => {
      this.updateBalance();
    });
  },
};
</script>


<style lang="scss" scoped>
#balance {
  background-image: url('assets/head-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 30px;
  padding-bottom: 20px;
  /* Rectangle: */
  background-image: linear-gradient(-129deg, #004276 0%, #001F41 100%);
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.50);

  p {
    font-weight: lighter;
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2.5em;
  }

  .bold {
    font-weight: bolder;
  }
}
</style>
