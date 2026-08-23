<script setup lang="ts">
import AppNavbar from '@/components/common/navbar/AppNavbar.vue';
import Footer from './components/common/footer/Footer.vue';
</script>

<template>
  <div class="custom-container">
    <AppNavbar />

    <RouterView />
  </div>

  <Footer />
</template>
