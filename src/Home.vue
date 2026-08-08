<script setup lang="ts">
import { BApp } from 'bootstrap-vue-next';
import AppNavbar from '@/components/common/navbar/AppNavbar.vue';
import Banner from './components/home/banner/Banner.vue';
import ProductCarousel from './components/home/products-carousel/ProductCarousel.vue';
import InformacionGeneral from '@/components/home/general-information/GeneralInformationSection.vue';
import productsCarouselItems from './data/products.js';
import SpecialistSection from '@/components/home/specialist/SpecialistSection.vue';
</script>

<template>
    <BApp>
        <AppNavbar />
        <main>
            <Banner />

            <!-- <ProductCarousel :products="productsCarouselItems" />-->
            <hr>
            
            <InformacionGeneral />

            <SpecialistSection />
        </main>
    </BApp>
</template>

<style scoped>
.products-section {
    background: #efefef;
    padding: 2.5rem 0 3.5rem;
}

.products-section__header {
    padding-inline: 1.5rem;
    margin-bottom: 3rem;
}

.products-section__title {
    font-weight: 800;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
}

.products-section__subtitle {
    color: #9a9a9a;
    max-width: 950px;
}
</style>