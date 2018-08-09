<template>
  <div id="send">
    <Title title="Send" />
    <div class="container">
      <send-form :address="$route.params.address" />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Common/Title.vue';
import SendForm from '@/components/Send/SendForm.vue';

export default {
  components: {
    Title,
    SendForm,
  },
};
</script>
