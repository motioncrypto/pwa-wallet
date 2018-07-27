<template>
  <div id="title">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>


<style lang="scss" scoped>
#title {
  background-image: url('assets/head-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 20px;
  padding-bottom: 10px;
  /* Rectangle: */
  background-image: linear-gradient(-129deg, #004276 0%, #001F41 100%);
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.50);

  p {
    font-weight: lighter;
    font-size: 1.4em;
    margin-bottom: 10px;
  }
}
</style>
