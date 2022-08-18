<script setup>
  import { useHandleSignInCallback } from '@logto/vue';
  const { isLoading } = useHandleSignInCallback(() => {
    this.$router.push({path: '/'});
  });
</script>



<script>
export default {
  name: 'CallbackPage',
  created() {
    setTimeout(() => {
        this.$router.push({path: '/'});
    }, 500);
  }
}
</script>


<template>
  <p v-if="isLoading">Redirecting...</p>
</template>