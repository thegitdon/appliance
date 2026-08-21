<script setup lang="ts">
import BannerSection from '@/components/home/banner-section/BannerSection.vue';
import CustomerServiceChannelsSection from '@/components/home/customer-service-channels-section/CustomerServiceChannelsSection.vue';
import GeneralInformationSection from '@/components/home/general-information-section/GeneralInformationSection.vue';
import ProductCarouselSection from '@/components/home/products-carousel-section/ProductCarouselSection.vue';
import SpecialistSection from '@/components/home/specialist-section/SpecialistSection.vue';
</script>

<template>
  <main>
    <BannerSection />

    <ProductCarouselSection />

    <GeneralInformationSection />

    <SpecialistSection />

    <BannerSection />

    <CustomerServiceChannelsSection />
  </main>
</template>
