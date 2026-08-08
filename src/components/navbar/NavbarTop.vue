<script setup>
    import BrandLogo from './BrandLogo.vue';
    import SocialLinks from './SocialLinks.vue';
    import BaseButton from '../common/BaseButton.vue';
    import IconCalendar from './icons/IconCalendar.vue';
    import IconMail from './icons/IconMail.vue';

    defineProps({
        socialLinks: { type: Array, required: true },
    });
</script>

<template>
    <div class="navbar-top">
        <BrandLogo />

        <div class="navbar-top__actions">
            <SocialLinks :links="socialLinks" />

            <BaseButton variant="outline" href="#contacto">
                <template #icon>
                    <IconMail />
                </template>
                Contacto
            </BaseButton>

            <BaseButton variant="primary" href="#agendar">
                <template #icon>
                    <IconCalendar />
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