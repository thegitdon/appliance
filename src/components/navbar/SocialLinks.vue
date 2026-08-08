<script setup>
    import IconFacebook from './icons/IconFacebook.vue'
    import IconInstagram from './icons/IconInstagram.vue'

    defineProps({
        links: { type: Array, required: true },
    });

    const icons = { facebook: IconFacebook, instagram: IconInstagram };
</script>

<template>
    <ul class="social">
        <li v-for="link in links" :key="link.id">
            <a class="social__link" :href="link.href" :aria-label="link.label" target="_blank"
                rel="noopener noreferrer">
                <component :is="icons[link.id]" />
            </a>
        </li>
    </ul>
</template>

<style scoped>
    .social {
        display: flex;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .social__link {
        display: grid;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        font-size: 20px;
        /* controla el tamaño del icono (1em) */
        color: var(--color-text);
    }

    .social__link:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
</style>