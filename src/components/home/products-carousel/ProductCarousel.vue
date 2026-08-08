<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { consume } from '@/services/consumer.service.ts';
import { UrlConstantsUtil } from '@/utils/url-constants.util.ts';
import { useCardsPerView } from '@/services/use-cards-per-view.service.ts';
import ProductCard from './ProductCard.vue';

import type { ProductCardContentType } from '@/types/product-card-content.type.ts';


const { perView } = useCardsPerView();
const index = ref(0);
const products = ref<ProductCardContentType[]>([]);

onMounted(async () => {
    try {
        products.value = await consume<ProductCardContentType[]>(UrlConstantsUtil.PRODUCTS_CAROUSEL_URL);
    } catch (e) {
        console.error(e);
    }
});

const slides = computed(() => {
    const size = perView.value;
    const chunks: ProductCardContentType[][] = [];
    for (let i = 0; i < products.value.length; i += size) {
        chunks.push(products.value.slice(i, i + size));
    }
    return chunks;
});

watch(() => slides.value.length, (length) => {
    if (index.value > length - 1) index.value = 0;
});
</script>

<template>
    <div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <div class="carousel-inner">
                <div v-for="(group, i) in slides" :key="`${perView}-${i}`" class="carousel-item"
                    :class="{ active: i === 0 }">
                    <div class="row g-3">
                        <div v-for="product in group" :key="product.id" class="col">
                            <ProductCard :product="product" />
                        </div>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.carousel-item .row {
    min-height: 300px;
}
</style>