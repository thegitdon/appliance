<script setup lang="ts">
import { onMounted, ref, useId } from 'vue';
import Card from '@/components/common/cards/Card.vue';
import type { CardContentType } from '@/types/card-content.type';
import { consume } from '@/services/consumer.service';
import { UrlConstantsUtil } from '@/utils/url-constants.util';

const title = "Experiencia ágil y efectiva";
const cards = ref<CardContentType[]>([]);
const headingId = useId();

onMounted(async () => {
    try {
        cards.value = await consume<CardContentType[]>(UrlConstantsUtil.BUSINESS_UNITIES_URL);
    } catch (e) {
        console.log(e);
    }
});
</script>

<template>
    <section :aria-labelledby="headingId" class="py-5">
        <h2 :id="headingId" class="text-center mb-5">{{ title }}</h2>

        <div class="g-4 justify-content-center py-3 row">
            <div v-for="card in cards" :key="card.id" class="col-12 col-md-6 col-lg-4">
                <Card :content="card" />
            </div>
        </div>
    </section>
</template>