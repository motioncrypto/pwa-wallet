<template>
  <div id="app">
    <Header />
    <router-view/>
    <Navbar />
  </div>
</template>

<script>
import Header from '@/components/Common/Header.vue';
import Navbar from '@/components/Common/Navbar.vue';

export default {
  components: {
    Header,
    Navbar,
  },
  mounted() {
    // Perform an initial load
    this.$store._vm.$root.$on('storageReady', () => {
      if (!this.$store.state.Wallet.wallets.length) {
        this.$store.dispatch('generateWallet', 'Main Wallet');
      }
    });
  },
};
</script>


<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ececec;
  background-color: $primary;
  min-height: 100vh;
  padding-bottom: 60px;
  @media screen and (max-width: $break-mobile) {
    padding-top: 60px;
  }
  overflow-x: hidden;
}
</style>
