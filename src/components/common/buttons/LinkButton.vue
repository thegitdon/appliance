<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    href?: string,
}>();

const tag = computed(() => (props.href ? 'a' : 'button'));
const tagAttrs = computed(() => (props.href ? { href: props.href } : { type: 'button' }));
</script>

<template>
    <component :is="tag" v-bind="tagAttrs" class="btn btn-link">
        <slot />
    </component>
</template>