<script setup>
    import { computed } from 'vue';
    import { isValidImageConfig } from '../../composables/useImage.js';

    const props = defineProps({
        image: {
            type: Object,
            required: true,
            validator: isValidImageConfig,
        },
        loading: {
            type: String,
            default: 'lazy',
            validator: (value) => ['lazy', 'eager'].includes(value),
        },
        // Puntos de corte configurables
        breakpoints: {
            type: Object,
            default: () => ({ medium: '768px', large: '1200px' }),
        },
    });

    // Orden importa: el navegador toma el primer <source> que cumpla el media query
    const sources = computed(() => {
        if (!props.image.multiples) return [];
        const { large, medium } = props.image.images;

        return [
            { media: `(min-width: ${props.breakpoints.large})`, srcset: large },
            { media: `(min-width: ${props.breakpoints.medium})`, srcset: medium },
        ];
    });

    const fallbackSrc = computed(() =>
        props.image.multiples ? props.image.images.small : props.image.image,
    );
</script>

<template>
    <picture class="responsive-picture">
        <source v-for="source in sources" :key="source.media" :media="source.media" :srcset="source.srcset" />
        <img :src="fallbackSrc" :alt="image.alt ?? ''" :title="image.title ?? undefined" :loading="loading"
            decoding="async" />
    </picture>
</template>

<style scoped>
    .responsive-picture {
        display: block;
        width: 100%;
    }

    .responsive-picture img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
</style>