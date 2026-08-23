<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { consume } from '@/services/consumer.service.ts';
import { UrlConstantsUtil } from '@/utils/url-constants.util.ts';

import type { ReviewType } from '@/types/review.type.ts';
import CardReview from '@/components/common/cards/CardReview.vue';
import GenericCarousel from '@/components/common/carousels/GenericCarousel.vue';

const title = "Respaldan nuestro servicio";
const reviews = ref<ReviewType[]>([]);

onMounted(async () => {
    try {
        reviews.value = await consume<ReviewType[]>(UrlConstantsUtil.REVIEWS_CAROUSEL_URL);
    } catch (e) {
        console.error(e);
    }
});
</script>

<template>
<h2 class="titulo-seccion">{{ title }}</h2>
    <GenericCarousel id="reviews-carousel" :items="reviews">
        <template #card="{ item }">
            <CardReview :review="item" />
        </template>
    </GenericCarousel>
</template>

<style scoped>
.titulo-seccion {
    margin: 0 0 2.5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
}
</style>