<script setup lang="ts">
import BaseButton from '@/components/common/buttons/BaseButton.vue';
import type { ProductCardContentType } from '@/types/product-card-content.type';

defineProps<{
    product: ProductCardContentType,
}>();
</script>

<template>
    <div class="product-card card" style="width: 18rem;">
        <div class="product-card__media">
            <img :src="product.image" :alt="product.alt ?? product.title" class="card-img-top" loading="lazy">
        </div>

        <div class="card-body">
            <h3 class="product-card__title">{{ product.title }}</h3>
        </div>

        <div class="card-footer text-center">
            <BaseButton :href="product.to" variant="primary">
                Conoce más
                <span class="product-card__chevron" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </span>
            </BaseButton>
        </div>
    </div>
</template>

<style scoped>
.product-card {
    height: 100%;
    border: 1px solid #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
    background: #fff;
    overflow: hidden;
}

.product-card__media {
    height: 150px;
    display: grid;
    place-items: center;
    padding: 1rem;
}

.product-card__media img {
    max-height: 200px;
    width: auto;
    object-fit: contain;
}

.product-card__title {
    font-size: 0.8rem;
    font-weight: 700;
    min-height: 2.4em;
    /* alinea tarjetas con títulos de 1 y 2 líneas */
    display: flex;
    align-items: center;
    justify-content: center;
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