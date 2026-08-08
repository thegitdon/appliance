<script setup>
import ResponsivePicture from '@/components/common/pictures/ResponsivePicture.vue';
import { useImage } from '../../../composables/useImage.js';

const props = defineProps({
    imageKey: { type: String, default: 'banner_servicios' },
});

const { image } = useImage(() => props.imageKey);
</script>

<template>
    <section v-if="image" class="banner" :aria-label="image.title">
        <ResponsivePicture :image="image" loading="eager" />
    </section>
</template>

<style scoped>
.banner {
    width: 100%;
    overflow: hidden;
}
</style>