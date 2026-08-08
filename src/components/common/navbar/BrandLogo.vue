<script setup lang="ts">
defineProps<{
    to: string,
}>();
</script>

<template>
    <a class="brand" :href="to" aria-label="Haceb Servicios — Ir al inicio">
        <span class="brand__badge">
            <svg viewBox="0 0 120 48" aria-hidden="true">
                <polygon points="4,24 32,6 88,6 116,24 88,42 32,42" fill="none" stroke="currentColor"
                    stroke-width="5" />
            </svg>
            <span class="brand__name">Haceb</span>
        </span>
        <span class="brand__title">Servicios</span>
    </a>
</template>

<style scoped>
.brand {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    color: inherit;
    text-decoration: none;
}

.brand__badge {
    position: relative;
    width: 68px;
    height: 28px;
}

.brand__badge svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.brand__name {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-style: italic;
    font-weight: 800;
    font-size: 0.8rem;
}

.brand__title {
    font-weight: 700;
    font-size: 1rem;
}
</style>