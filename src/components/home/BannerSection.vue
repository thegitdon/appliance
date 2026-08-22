<script setup lang="ts">
import ResponsivePicture from '@/components/common/pictures/ResponsivePicture.vue';
import { useImage } from '@/services/use-image.service';
import type { ImageState } from '@/types/responsive-image.type';

const props = defineProps<{
    imageKey: string
}>();

const image: ImageState = useImage(() => props.imageKey);
</script>

<template>
    <section v-if="image.image" class="banner" :aria-label="image.image.value?.title">
        <ResponsivePicture :image="image.image.value" loading="eager" class-name="banner-icon" />
    </section>
</template>

<style scoped>
.banner {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.banner-icon {
    width: 500px;
}
</style>