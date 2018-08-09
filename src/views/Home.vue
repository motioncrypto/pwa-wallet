<template>
  <div id="home">
    <Balance />
    <div class="container">
      <div class="last-moves-container">
        <p class="last-moves">Last moves</p>
        <span class="separator"></span>
      </div>

      <Move v-for="(tx, index) in txsByDate" v-bind:key="index"
        :date="new Date(tx.date * 1000)"
        :wallet="tx.wallet"
        :amount="tx.value"
        :type="tx.type" />
    </div>
  </div>
</template>

<script>
import Balance from '@/components/Home/Balance.vue';
import Move from '@/components/Home/Movement.vue';

export default {
  components: {
    Balance,
    Move,
  },
  computed: {
    txs() {
      return this.$store.state.Transactions.txs;
    },
    txsByDate() {
      const transactions = this.$store.state.Transactions.txs;
      transactions.sort((a, b) => new Date(b.date * 1000) - new Date(a.date * 1000));
      return transactions;
    },
  },
  methods: {
    refresh() {
      return this.$store.dispatch('updateBalance');
    },
    updateTxs() {
      this.$store.dispatch('updateTxs');
    },
  },
  mounted() {
    this.$store._vm.$root.$on('storageReady', () => {
      this.updateTxs();
    });
  },
};
</script>

<style lang="scss" scoped>
.last-moves-container {
  width: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
  float: left;

  p.last-moves {
    font-weight: bolder;
  }

  span.separator {
    width: 30%;
    height: 3px;
    background-color: #1E8DE0;
    display: block;
  }

  @media screen and (max-width: $break-mobile) {
    padding-left: 20px;
  }
}
</style>

