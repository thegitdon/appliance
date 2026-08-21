<script setup lang="ts">
import ResponsivePicture from '@/components/common/pictures/ResponsivePicture.vue';
import { useImage } from '@/services/use-image.service';

const props = defineProps({
    imageKey: { type: String, default: 'banner_servicios' },
});

const { image } = useImage(() => props.imageKey);
</script>

<template>
    <section v-if="image" class="banner" :aria-label="image.title">
        <ResponsivePicture :image="image" loading="eager" class-name="banner-icon" />
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