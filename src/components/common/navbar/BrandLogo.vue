<script setup lang="ts">
import { useImage } from '@/services/use-image.service';
import ResponsivePicture from '../pictures/ResponsivePicture.vue';

defineProps<{
    to: string,
}>();

const { image } = useImage(() => 'haceb_logo');
</script>

<template>
    <a class="brand" :href="to" aria-label="Haceb Servicios — Ir al inicio">
        <span class="brand__badge" v-if="image">
            <ResponsivePicture :image="image" loading="eager" />
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

.brand__title {
    font-weight: 700;
    font-size: 1rem;
}
</style>