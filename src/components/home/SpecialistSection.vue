<script setup lang="ts">
import { onMounted, ref, useId } from 'vue';
import Card from '@/components/common/cards/Card.vue';
import type { CardContentType } from '@/types/card-content.type';
import { consume } from '@/services/consumer.service';
import { UrlConstantsUtil } from '@/utils/url-constants.util';

const title = "Experiencia ágil y efectiva";
const cards = ref<CardContentType[]>([]);
const cargando = ref(true);
const error = ref<string | null>(null);
const headingId = useId();

onMounted(async () => {
    try {
        cards.value = await consume<CardContentType[]>(UrlConstantsUtil.UNIDADES_NEGOCIO_URL);
    } catch (e) {
        error.value = e instanceof Error ? e.message : 'Error inesperado';
    } finally {
        cargando.value = false;
    }
});
</script>

<template>
    <section :aria-labelledby="headingId" class="container py-5">
        <h2 :id="headingId" class="text-center mb-4 fs-4">{{ title }}</h2>

        <div v-if="cargando" class="text-center py-5" role="status">
            <div class="spinner-border text-primary" aria-hidden="true"></div>
        </div>

        <div v-else-if="error" class="alert alert-danger mb-0" role="alert">
            {{ error }}
        </div>

        <div class="row g-4 justify-content-center">
            <div v-for="card in cards" :key="card.id" class="col-12 col-md-6 col-lg-4">
                <Card :content="card" />
            </div>
        </div>
    </section>
</template>