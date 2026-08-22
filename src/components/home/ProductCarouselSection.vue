<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { consume } from '@/services/consumer.service.ts';
import { UrlConstantsUtil } from '@/utils/url-constants.util.ts';

import type { CardContentWithImageType } from '@/types/card-content-with-image.type.ts';
import CardWithImage from '@/components/common/cards/CardWithImage.vue';
import GenericCarousel from '@/components/common/carousels/GenericCarousel.vue';

const products = ref<CardContentWithImageType[]>([]);

onMounted(async () => {
    try {
        products.value = await consume<CardContentWithImageType[]>(UrlConstantsUtil.PRODUCTS_CAROUSEL_URL);
    } catch (e) {
        console.error(e);
    }
});
</script>

<template>
    <GenericCarousel id="products-carousel" :items="products">
        <template #card="{ item }">
            <CardWithImage :card="item" />
        </template>
    </GenericCarousel>
</template>