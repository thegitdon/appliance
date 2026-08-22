<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { consume } from '@/services/consumer.service.ts';
import { UrlConstantsUtil } from '@/utils/url-constants.util.ts';

import type { ReviewType } from '@/types/review.type.ts';
import CardReview from '@/components/common/cards/CardReview.vue';
import GenericCarousel from '@/components/common/carousels/GenericCarousel.vue';

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
    <GenericCarousel id="reviews-carousel" :items="reviews">
        <template #card="{ item }">
            <CardReview :review="item" />
        </template>
    </GenericCarousel>
</template>