<template>
  <div id="receive">
    <Title title="Receive" />
    <div class="container">
      <Wallet :title="'Main'" :wallet="'MNdmVuzATvExYbo5eikSiQAHBXV2dS8ktg'" :amount="10" />
      <Wallet :title="'Main'" :wallet="'MNdmVuzATvExYbo5eikSiQAHBXV2dS8ktg'" :amount="10" />
      <Wallet :title="'Main'" :wallet="'MNdmVuzATvExYbo5eikSiQAHBXV2dS8ktg'" :amount="10" />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Common/Title.vue';
import Wallet from '@/components/Receive/Wallet.vue';

export default {
  components: {
    Title,
    Wallet,
  },
};
</script>
