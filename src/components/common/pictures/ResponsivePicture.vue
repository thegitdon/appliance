<script setup lang="ts">
import { computed } from 'vue';
import { ConstantsUtil } from '@/utils/constants.util.js';
import type { ResponsiveImageType } from '@/types/responsive-image.type';

const props = defineProps<{
    image: ResponsiveImageType | null,
    loading: 'lazy' | 'eager',
    className?: string,
}>();

const breakpoints = ConstantsUtil.BREAKPOINTS_CAROUSEL;

const sources = computed(() => {
    if (!props.image || !props.image.multiples || !props.image.images) return [];

    const { large, medium } = props.image.images;

    return [
        { media: `(min-width: ${breakpoints.large})`, srcset: large },
        { media: `(min-width: ${breakpoints.medium})`, srcset: medium },
    ];
});

const fallbackSrc = computed(() =>
    props.image && props.image.multiples ? props.image.images?.small : props.image?.image,
);
</script>

<template>
    <picture :class="`responsive-picture ${className ?? ''}`">
        <source v-for="source in sources" :key="source.media" :media="source.media" :srcset="source.srcset" />
        <img :src="fallbackSrc" :alt="image?.alt ?? ''" :title="image?.title ?? undefined" :loading="loading"
            decoding="async" class="img-fluid" />
    </picture>
</template>

<style scoped>
.responsive-picture {
    display: block;
}

.responsive-picture img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>