<template>
  <div id="header">
    <img src="@/assets/logo.png" class="logo" />
  </div>
</template>

<style lang="scss" scoped>
#header {
  @media screen and (max-width: $break-mobile) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: $primary;
  }
}
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
