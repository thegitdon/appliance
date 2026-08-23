<script setup lang="ts">
import ResponsivePicture from '@/components/common/pictures/ResponsivePicture.vue';
import { useImage } from '@/services/use-image.service';
import type { ImageState } from '@/types/responsive-image.type';

const props = defineProps<{
    imageKey: string,
    className?: string,
}>();

const image: ImageState = useImage(() => props.imageKey);
</script>

<template>
    <section v-if="image.image" class="banner my-5" :aria-label="image.image.value?.title">
        <ResponsivePicture :image="image.image.value" :class-name="className" loading="eager" />
    </section>
</template>

<style scoped>
.banner {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
</style>