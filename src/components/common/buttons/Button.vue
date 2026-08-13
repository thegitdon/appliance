<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    href?: string;
}>();

const tag = computed(() => (props.href ? 'a' : 'button'));
const tagAttrs = computed(() =>
    props.href ? { href: props.href } : { type: 'button' }
);
</script>

<template>
    <component :is="tag" v-bind="tagAttrs"
        class="align-items-center custom-button custom-button--primary btn d-flex px-3 py-2 rounded-5"">
        <span v-if="$slots.icon" class="custom-button__icon">
        <slot name="icon" />
        </span>

        <span class="custom-button__label">
            <slot />
        </span>
    </component>
</template>

<style scoped>
.custom-button {
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    transition: background-color 0.2s ease, border-color 0.2s ease;
}

.custom-button--primary {
    background-color: var(--color-primary);
    color: #fff;
}

.custom-button--primary:hover {
    background-color: var(--color-primary-hover);
}

.custom-button__icon {
    display: inline-flex;
    font-size: 16px;
}
</style>