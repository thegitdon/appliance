<script setup lang="ts">
import type { SocialButtonType } from '@/types/social-button.type.ts';
import BrandLogo from './BrandLogo.vue';
import SocialLinks from './SocialLinks.vue';
import BaseButton from '../buttons/BaseButton.vue';

defineProps<{
    socialLinks: SocialButtonType[],
}>();

const redirectTo = 'https://www.facebook.com/';
</script>

<template>
    <div class="navbar-top">
        <BrandLogo :to="redirectTo" />

        <div class="navbar-top__actions">
            <SocialLinks :links="socialLinks" />

            <BaseButton variant="outline" href="#contacto">
                <template #icon>
                    <i class="fa-regular fa-envelope"></i>
                </template>
                Contacto
            </BaseButton>

            <BaseButton variant="primary" href="#agendar">
                <template #icon>
                    <i class="fa-regular fa-calendar"></i>
                </template>
                Agendar cita
            </BaseButton>
        </div>
    </div>
</template>

<style scoped>
.navbar-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid var(--color-border);
}

.navbar-top__actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
</style>