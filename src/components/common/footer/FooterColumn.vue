<script setup lang="ts">
import type { FooterLinkType } from '@/types/footer-link.type';

defineProps<{
    title: string;
    links: FooterLinkType[];
}>();
</script>

<template>
    <div class="footer-column">
        <h4 class="footer-column-title">{{ title }}</h4>
        <ul class="footer-links list-unstyled mb-0">
            <li v-for="link in links" :key="link.label" class="mb-2">
                <a :href="link.href" class="footer-link">
                    {{ link.label }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.footer-column-title {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.footer-column-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #ffffff;
}

.footer-link {
    color: #d4d4d4;
    text-decoration: none;
    font-size: 0.85rem;
    line-height: 1.5;
    transition: color 0.2s ease;
}

.footer-link:hover {
    color: #ffffff;
    text-decoration: underline;
}
</style>