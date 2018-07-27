<template>
  <div id="home">
    <Balance />
    <div class="container">
      <div class="last-moves-container">
        <p class="last-moves">Last moves</p>
        <span class="separator"></span>
      </div>

      <Move :date="new Date()" :wallet="'MNdmVuzATvExYbo5eikSiQAHBXV2dS8ktg'" :amount="10" />
      <Move :date="new Date()" :wallet="'MNdmVuzATvExYbo5eikSiQAHBXV2dS8ktg'" :amount="10" />
      <Move :date="new Date()" :wallet="'MNdmVuzATvExYbo5eikSiQAHBXV2dS8ktg'" :amount="10" />
      <Move :date="new Date()" :wallet="'MNdmVuzATvExYbo5eikSiQAHBXV2dS8ktg'" :amount="10" />
      <Move :date="new Date()" :wallet="'MNdmVuzATvExYbo5eikSiQAHBXV2dS8ktg'" :amount="10" />
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

