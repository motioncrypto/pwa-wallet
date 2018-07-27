<template>
  <div id="camera-scan">
    <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
  </div>
</template>

<script>
import { QrcodeReader } from 'vue-qrcode-reader';

export default {
  data() {
    return {
      paused: false,
    };
  },
  components: {
    QrcodeReader,
  },
  methods: {
    onDecode(decodedString) {
      this.paused = true;
      console.log(decodedString);
    },
  },
};
</script>

<style lang="scss" scoped>
#camera-scan {
  height: 40vh;
  width: 50%;
  margin: 50px auto;
  background: rgba(255,255,255,0.70);
  box-shadow: 0 2px 8px 0 #5C5C5C;
  border-radius: 10px;

  @media screen and (max-width: $break-mobile) {
    width: 90%;
    max-height: 40vh;
  }
}
</style>

<style lang="scss">
video {
  height: 40vh;
  width: 100%;
}
</style>

