<script setup lang="ts">
import BannerSection from '@/components/home/BannerSection.vue';
import CustomerServiceChannelsSection from '@/components/home/CustomerServiceChannelsSection.vue';
import GeneralInformationSection from '@/components/home/GeneralInformationSection.vue';
import ProductCarouselSection from '@/components/home/ProductCarouselSection.vue';
import ReviewsCarouselSection from '@/components/home/ReviewsCarouselSection.vue';
import SpecialistSection from '@/components/home/SpecialistSection.vue';
</script>

<template>
  <main>
    <BannerSection image-key="banner_servicios" />

    <GeneralInformationSection />

    <ProductCarouselSection />

    <SpecialistSection />

    <BannerSection image-key="banner_servicios" />

    <ReviewsCarouselSection />

    <CustomerServiceChannelsSection />
  </main>
</template>
