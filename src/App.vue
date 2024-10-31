<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <RouterView />
</template>


<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>


<style scoped>
</style>
