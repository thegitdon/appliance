<script setup>
import { BApp } from 'bootstrap-vue-next';
import Banner from './components/banner/Banner.vue';
import AppNavbar from './components/navbar/AppNavbar.vue';
import ProductCarousel from './components/products-carousel/ProductCarousel.vue';
import productsCarouselItems from './data/products.js';
import InformacionGeneral from './components/info-general/InformacionGeneral.vue';
</script>

<template>
    <BApp>
        <AppNavbar />
        <main>
            <Banner />
            <h1>Hola mundo</h1>

            <ProductCarousel :products="productsCarouselItems" />

            <InformacionGeneral />
            <!-- tu contenido -->
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