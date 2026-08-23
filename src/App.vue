<script setup lang="ts">
import Footer from './components/common/footer/Footer.vue';
import NavbarWithBanner from './components/common/navbar/NavbarWithBanner.vue';
</script>

<template>
  <div class="custom-container">
    <NavbarWithBanner image-key="banner_navbar" class-name="custom-navbar-banner"/>

    <RouterView />
  </div>

  <Footer />
</template>
