<script setup lang="ts">
import type { NavbarMenuItemType } from '@/types/navbar-menu-item.type';

defineProps<{
  items: NavbarMenuItemType[],
}>();
</script>

<template>
  <nav class="navbar-menu" aria-label="Menú de servicios">
    <div class="navbar-menu__list px-3 py-2">
      <div class="dropdown" v-for="item in items">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ item.label }}
        </button>
        <ul class="dropdown-menu">
          <li v-for="child in item.children">
            <a class="dropdown-item" :href="child.to">{{ child.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-menu__list {
  display: flex;
  gap: 1rem;
  margin: 0;
  list-style: none;
}
</style>