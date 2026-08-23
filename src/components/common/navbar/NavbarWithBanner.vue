<script setup lang="ts">
import { computed } from 'vue';
import { useImage } from '@/services/use-image.service';
import Navbar from './Navbar.vue';
import type { ImageState } from '@/types/responsive-image.type.ts';

const props = defineProps<{
    imageKey: string,
    className?: string,
}>();

const bannerImage: ImageState = useImage(() => props.imageKey);

const backgroundImageUrl = computed(() => {
    const url = bannerImage.image.value?.image;
    return url ? `url(${url})` : 'none';
});
</script>

<template>
    <div :class="`banner pt-3 ${className}`">
        <Navbar />
    </div>
</template>

<style scoped>
.banner {
    background-size: cover;
    background-position: center;
    background-image: v-bind(backgroundImageUrl);
}
</style>