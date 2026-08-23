<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { consume } from '@/services/consumer.service.ts';
import { UrlConstantsUtil } from '@/utils/url-constants.util.ts';
import NavbarTop from './NavbarTop.vue';
import NavbarMenu from './NavbarMenu.vue';
import type { SocialButtonType } from '@/types/social-button.type.ts';
import type { NavbarMenuItemType } from '@/types/navbar-menu-item.type.ts';

const socialLinks = ref<SocialButtonType[]>([]);
const navbarMenuItems = ref<NavbarMenuItemType[]>([]);

onMounted(async () => {
    try {
        socialLinks.value = await consume<SocialButtonType[]>(UrlConstantsUtil.SOCIAL_LINKS_URL);
    } catch (e) {
        console.log(e);
    }
});

onMounted(async () => {
    try {
        navbarMenuItems.value = await consume<NavbarMenuItemType[]>(UrlConstantsUtil.NAVBAR_MENU_OPTIONS_URL);
    } catch (e) {
        console.log(e);
    }
});
</script>

<template>
    <header class="app-navbar rounded-3 mt-3">
        <NavbarTop :social-links="socialLinks" />
        <NavbarMenu :items="navbarMenuItems" />
    </header>
</template>

<style scoped>
.app-navbar {
    background-color: var(--color-surface);
    color: var(--color-text);
    margin: 0 1rem;
}
</style>