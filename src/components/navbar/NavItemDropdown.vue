<!-- src/components/navbar/NavItemDropdown.vue -->
<script setup>
    import { ref, useTemplateRef } from 'vue' // useTemplateRef: novedad de Vue 3.5
    import IconChevronDown from '../icons/IconChevronDown.vue'
    import { useClickOutside } from '../../composables/useClickOutside.js'

    defineProps({
        item: { type: Object, required: true },
    })

    const isOpen = ref(false)
    const rootRef = useTemplateRef('dropdown-root')

    useClickOutside(rootRef, () => close())

    function toggle() { isOpen.value = !isOpen.value }
    function close() { isOpen.value = false }

    function onKeydown(event) {
        if (event.key === 'Escape') close()
    }
</script>

<template>
    <li ref="dropdown-root" class="dropdown" @keydown="onKeydown">
        <button type="button" class="dropdown__trigger" :aria-expanded="isOpen" :aria-controls="`menu-${item.id}`"
            @click="toggle">
            {{ item.label }}
            <IconChevronDown class="dropdown__chevron" :class="{ 'is-open': isOpen }" />
        </button>

        <Transition name="dropdown">
            <ul v-show="isOpen" :id="`menu-${item.id}`" class="dropdown__menu">
                <li v-for="child in item.children" :key="child.to">
                    <a class="dropdown__link" :href="child.to" @click="close">
                        {{ child.label }}
                    </a>
                </li>
            </ul>
        </Transition>
    </li>
</template>

<style scoped>
.dropdown {
    position: relative;
}

.dropdown__trigger {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.7rem 0.25rem;
    border: none;
    background: none;
    font: inherit;
    font-size: 0.9rem;
    color: var(--color-text);
    cursor: pointer;
}

.dropdown__chevron {
    font-size: 1rem;
    transition: transform 0.2s ease;
}

.dropdown__chevron.is-open {
    transform: rotate(180deg);
}

.dropdown__menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 50;
    min-width: 220px;
    margin: 0;
    padding: 0.4rem;
    list-style: none;
    background: #fff;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.dropdown__link {
    display: block;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.88rem;
    color: var(--color-text);
    text-decoration: none;
}

.dropdown__link:hover {
    background-color: rgba(0, 0, 0, 0.06);
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity 0.18s ease, transform 0.18s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}
</style>