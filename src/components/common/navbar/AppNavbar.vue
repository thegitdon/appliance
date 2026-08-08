<script setup>
    import NavbarTop from './NavbarTop.vue';
    import NavbarMenu from './NavbarMenu.vue';
    import { navigationItems, socialLinks } from '../../../data/navigation.js';
</script>

<template>
    <header class="app-navbar">
        <NavbarTop :social-links="socialLinks" />
        <NavbarMenu :items="navigationItems" />
    </header>
</template>

<style scoped>
    .app-navbar {
        background-color: var(--color-surface);
        color: var(--color-text);
    }
</style>