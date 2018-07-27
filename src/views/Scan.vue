<template>
  <div id="scan">
    <Title title="Scan" />
    <div class="container">
      <Camera />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Common/Title.vue';
import Camera from '@/components/Scan/Camera.vue';

export default {
  components: {
    Title,
    Camera,
  },
};
</script>
