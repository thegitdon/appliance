<script setup lang="ts">
import LinkButton from '../buttons/LinkButton.vue';
import type { CardContentWithImageType } from '@/types/card-content-with-image.type';

defineProps<{
    card: CardContentWithImageType,
}>();
</script>

<template>
    <div class="custom-card card shadow rounded-3">
        <div class="custom-card__media pt-3">
            <img :src="card.image" :alt="card.alt ?? card.title" class="card-img-top" loading="lazy">
        </div>

        <div class="card-body">
            <h3 class="align-items-center custom-card__title d-flex fw-bold justify-content-center">
                {{ card.title }}
            </h3>
        </div>

        <div class="bg-white border-top-0 card-footer text-center">
            <LinkButton :href="card.to">
                Conoce más
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </LinkButton>
        </div>
    </div>
</template>

<style scoped>
.custom-card {
    border: 1px solid #1a1a1a;
    overflow: hidden;
    height: 100%;
}

.custom-card__media {
    display: grid;
    place-items: center;
}

.custom-card__media img {
    max-height: 140px;
    width: auto;
    object-fit: contain;
}

.custom-card__title {
    font-size: 0.8rem;
    min-height: 2.4em;
}

.product-card__footer {
    background: #fff;
    border-top: 1px solid #e2e2e2;
}

.product-card__cta {
    color: #111;
    font-size: 0.8rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.product-card__cta:hover {
    text-decoration: underline;
}

.product-card__chevron {
    width: 26px;
    height: 26px;
    border: 1px solid #111;
    border-radius: 50%;
    display: grid;
    place-items: center;
}
</style>