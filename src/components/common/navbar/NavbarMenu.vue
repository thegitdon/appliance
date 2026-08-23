<script setup lang="ts">
import type { NavbarMenuItemType } from '@/types/navbar-menu-item.type';

defineProps<{
  items: NavbarMenuItemType[],
}>();
</script>

<template>
  <nav class="navbar-menu" aria-label="Menú de servicios">
    <div class="navbar-menu__list px-3 py-2">
      <template v-for="item in items" :key="item.id">
        <div v-if="item.children?.length" class="dropdown">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ item.label }}
          </button>
          <ul class="dropdown-menu">
            <li v-for="child in item.children" :key="child.to">
              <a class="dropdown-item" :href="child.to">{{ child.label }}</a>
            </li>
          </ul>
        </div>

        <a v-else class="btn" :href="item.to" role="button">
          {{ item.label }}
        </a>
      </template>
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