<script setup>
import { computed, ref, watch } from 'vue'
import { BCarousel, BCarouselSlide, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import ProductCard from './ProductCard.vue'
import { useCardsPerView } from '../../composables/useCardsPerView.js'

const props = defineProps({
    products: { type: Array, required: true },
});

const { perView } = useCardsPerView();
const index = ref(0);

const slides = computed(() => {
    const size = perView.value;
    const chunks = [];
    for (let i = 0; i < props.products.length; i += size) {
        chunks.push(props.products.slice(i, i + size))
    }
    return chunks;
});

watch(() => slides.value.length, (length) => {
    if (index.value > length - 1) index.value = 0
});
</script>

<template>
    <div class="product-carousel">
        <BCarousel v-model="index" controls>
            <BCarouselSlide v-for="(group, i) in slides" :key="`${perView}-${i}`" class="product-slide">
                <BRow>
                    <BCol v-for="product in group" :key="product.id">
                        <ProductCard :product="product" />
                    </BCol>
                </BRow>
            </BCarouselSlide>
        </BCarousel>
    </div>
</template>

<style scoped>
.product-carousel {
    position: relative;
    padding-inline: 3.5rem;
    /* espacio para las flechas exteriores */
}

.product-carousel :deep(.carousel-item.product-slide > img) {
    display: none !important;
}

.product-carousel :deep(.carousel-caption) {
    position: initial;
}


/* Cada slide muestra sus tarjetas en fila */
.product-carousel :deep(.carousel-item.product-slide.active) {
    display: flex;
    gap: 1rem;
}

.product-carousel :deep(.product-slide .product-card) {
    flex: 1 1 0;
    min-width: 0;
}

/* Flechas circulares como en el diseño */
.product-carousel :deep(.carousel-control-prev),
.product-carousel :deep(.carousel-control-next) {
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #f7f7f7;
    background-image: none;
    /* quita el gradiente default de Bootstrap */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
    opacity: 1;
}

.product-carousel :deep(.carousel-control-prev) {
    left: -3.5rem;
    margin-left: 0.5rem;
}

.product-carousel :deep(.carousel-control-next) {
    right: -3.5rem;
    margin-right: 0.5rem;
}

.product-carousel :deep(.carousel-control-prev-icon),
.product-carousel :deep(.carousel-control-next-icon) {
    filter: brightness(0);
    /* chevrons blancos → oscuros */
    width: 18px;
    height: 18px;
}

.product-carousel .carousel-item.product-slide.active {
    height: 650px;
}

@media (max-width: 575.98px) {
    .product-carousel {
        padding-inline: 0;
    }

    .product-carousel :deep(.carousel-control-prev) {
        left: 0.5rem;
        margin-left: 0;
    }

    .product-carousel :deep(.carousel-control-next) {
        right: 0.5rem;
        margin-right: 0;
    }
}
</style>