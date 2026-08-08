<script setup>
import { BDropdown, BDropdownItem } from 'bootstrap-vue-next';

defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <nav class="navbar-menu" aria-label="Menú de servicios">
    <ul class="navbar-menu__list">
      <BDropdown v-for="item in items" text="Dropdown Button" class="me-2">
        <BDropdownItem :href="item.to">{{ item.label }}</BDropdownItem>
      </BDropdown>
    </ul>
  </nav>
</template>

<style scoped>
.navbar-menu__list {
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0.25rem 1.25rem;
  list-style: none;
}
</style>