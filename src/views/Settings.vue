<template>
  <div id="settings">
    <Title title="Settings" />
    <div class="container">
      <button>Change Pin</button>
      <button>Get my Private Key</button>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Common/Title.vue';

export default {
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 30px;
}

button {
  background: rgba(255,255,255,0.70);
  box-shadow: 0 2px 8px 0 #5C5C5C;
  border-radius: 10px;
  font-size: 14px;
  color: #000000;
  text-align: center;
  width: 48%;
  height: 50px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  font-weight: bolder;
  margin-right: 1%;

  @media screen and (max-width: $break-mobile) {
    width: 90%;
  }
}
</style>

