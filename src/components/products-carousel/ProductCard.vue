<!-- src/components/products/ProductCard.vue -->
<script setup>
import { BCard, BCardBody, BCardFooter, BButton, BImg } from 'bootstrap-vue-next'

defineProps({
    product: { type: Object, required: true },
})
</script>

<template>
    <BCard no-body class="product-card">
        <div class="product-card__media">
            <BImg :src="product.image" :alt="product.alt ?? product.title" loading="lazy" />
        </div>

        <BCardBody class="text-center">
            <h3 class="product-card__title">{{ product.title }}</h3>
        </BCardBody>

        <BCardFooter class="product-card__footer text-center">
            <BButton :to="product.to" variant="link" class="product-card__cta">
                Conoce más
                <span class="product-card__chevron" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </span>
            </BButton>
        </BCardFooter>
    </BCard>
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