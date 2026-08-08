<script setup>
defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <nav class="navbar-menu" aria-label="Menú de servicios">
    <ul class="navbar-menu__list">
      <span v-for="item in items">
        {{ item }}
      </span>
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