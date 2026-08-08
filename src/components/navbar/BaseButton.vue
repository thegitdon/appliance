<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => ['primary', 'outline'].includes(value),
        },
        href: { type: String, default: null },
    });

    const tag = computed(() => (props.href ? 'a' : 'button'));
    const tagAttrs = computed(() => (props.href ? { href: props.href } : { type: 'button' }));
</script>

<template>
  <component :is="tag" v-bind="tagAttrs" class="base-button" :class="`base-button--${variant}`">
    <span v-if="$slots.icon" class="base-button__icon">
      <slot name="icon" />
    </span>
    <span class="base-button__label"><slot /></span>
  </component>
</template>

<style scoped>
    .base-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        border: 1px solid transparent;
        border-radius: 999px;
        padding: 0.55rem 1.15rem;
        font: inherit;
        font-size: 0.85rem;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    .base-button--primary {
        background-color: var(--color-primary);
        color: #fff;
    }

    .base-button--primary:hover { 
        background-color: var(--color-primary-hover);
    }

    .base-button--outline {
        background-color: var(--color-surface-dark);
        border-color: var(--color-border-strong);
        color: var(--color-text);
    }

    .base-button--outline:hover {
        background-color: #e0e0e0;
    }

    .base-button__icon {
        display: inline-flex; font-size: 16px;
    }
</style>