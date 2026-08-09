<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { consume } from '@/services/consumer.service.ts';
import { UrlConstantsUtil } from '@/utils/url-constants.util.ts';
import { useCardsPerView } from '@/services/use-cards-per-view.service.ts';

import type { CardContentWithImageType } from '@/types/card-content-with-image.type.ts';
import CardWithImage from '@/components/common/cards/CardWithImage.vue';


const { perView } = useCardsPerView();
const index = ref(0);
const products = ref<CardContentWithImageType[]>([]);

onMounted(async () => {
    try {
        products.value = await consume<CardContentWithImageType[]>(UrlConstantsUtil.PRODUCTS_CAROUSEL_URL);
    } catch (e) {
        console.error(e);
    }
});

const slides = computed(() => {
    const size = perView.value;
    const chunks: CardContentWithImageType[][] = [];
    for (let i = 0; i < products.value.length; i += size) {
        chunks.push(products.value.slice(i, i + size));
    }
    return chunks;
});

const cols = computed(() => {
    const items = slides.value[0]?.length ?? 4;
    return 12 / items;
});

watch(() => slides.value.length, (length) => {
    if (index.value > length - 1) index.value = 0;
});
</script>

<template>
    <div>
        <div id="productsCarousel" class="custom-carousel carousel slide" data-bs-ride="carousel"
            data-bs-interval="4000">
            <div class="carousel-inner">
                <div v-for="(group, i) in slides" :key="`${perView}-${i}`" class="carousel-item"
                    :class="{ active: i === 0 }">
                    <div class="row g-3">
                        <div v-for="product in group" :key="product.id" :class="`col-${cols}`">
                            <CardWithImage :card="product" />
                        </div>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#productsCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#productsCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.custom-carousel.carousel {
    position: relative;
    display: flex;
    justify-content: center;
}

.custom-carousel .carousel-inner {
    width: 80%;
}

.custom-carousel .carousel-item .row {
    min-height: 300px;
}

.custom-carousel .carousel-control-prev,
.custom-carousel .carousel-control-next {
    border-radius: 50%;
    background: rgba(0, 0, 0, .5);
    height: 50px;
    width: 50px;
    top: 50%;
}
</style>