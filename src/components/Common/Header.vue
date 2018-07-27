<template>
  <div id="header">
    <img src="@/assets/logo.png" class="logo" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  max-height: 100px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: $break-mobile) {
    width: 30px;
    height: auto;
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>
