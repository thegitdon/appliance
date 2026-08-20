<script setup lang="ts">
import Banner from '@/components/home/banner/Banner.vue';
import CustomerServiceChannels from '@/components/home/customer-service-channels/CustomerServiceChannels.vue';
import GeneralInformationSection from '@/components/home/general-information/GeneralInformationSection.vue';
import ProductCarousel from '@/components/home/products-carousel/ProductCarousel.vue';
import SpecialistSection from '@/components/home/specialist/SpecialistSection.vue';
</script>

<template>
  <main>
    <Banner />

    <ProductCarousel />

    <GeneralInformationSection />

    <SpecialistSection />

    <Banner />

    <CustomerServiceChannels />
  </main>
</template>
