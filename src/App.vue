<script setup lang="ts">
import AppNavbar from '@/components/common/navbar/AppNavbar.vue';
import Footer from './components/common/footer/Footer.vue';
import MunicipiosMap from './components/service-type/MunicipiosMap.vue';
</script>

<template>
  <div class="container">
    <AppNavbar />

    <MunicipiosMap />
    <!-- <RouterView /> -->
  </div>
  
  <Footer />
</template>
