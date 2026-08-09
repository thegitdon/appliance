<script setup lang="ts">
import type { SocialButtonType } from '@/types/social-button.type';
import { ConstantsUtil } from '@/utils/constants.util';

defineProps<{
    links: SocialButtonType[],
}>();

const icons = ConstantsUtil.SOCIAL_ICONS;
</script>

<template>
    <ul class="social">
        <li v-for="link in links" :key="link.id">
            <a class="social__link" :href="link.href" :aria-label="link.label" target="_blank"
                rel="noopener noreferrer">

                <i :class="icons[link.id]"></i>
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
    color: var(--color-text);
    text-decoration: none;
}

.social__link:hover {
    background-color: rgba(0, 0, 0, 0.08);
}
</style>