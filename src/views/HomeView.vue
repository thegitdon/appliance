<script setup lang="ts">
import BannerSection from '@/components/home/BannerSection.vue';
import GeneralInformationSection from '@/components/home/GeneralInformationSection.vue';
import ProductCarouselSection from '@/components/home/ProductCarouselSection.vue';
import ReviewsCarouselSection from '@/components/home/ReviewsCarouselSection.vue';
import SpecialistSection from '@/components/home/SpecialistSection.vue';
</script>

<template>
  <main>
    <div class="custom-container">
      <GeneralInformationSection />

      <ProductCarouselSection />

      <SpecialistSection />

      <BannerSection image-key="banner_servicios" class-name="banner-icon-dim" />

      <ReviewsCarouselSection />
    </div>
  </main>
</template>