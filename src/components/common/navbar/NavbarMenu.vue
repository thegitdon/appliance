<script setup>
defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <nav class="navbar-menu" aria-label="Menú de servicios">
    <div class="navbar-menu__list">
      <div class="dropdown" v-for="item in items">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ item.label }}
        </button>
        <ul class="dropdown-menu" v-for="child in item.children">
          <li><a class="dropdown-item" :href="child.to">{{ child.label }}</a></li>
        </ul>
      </div>
    </div>
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