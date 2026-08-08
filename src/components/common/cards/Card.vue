<script setup lang="ts">
import type { CardContentType } from '@/types/card-content.type';
defineProps<{
    content: CardContentType,
}>();
</script>

<template>
    <article class="card h-100 border-0 shadow-sm bg-body-tertiary custom-card">
        <div class="card-body d-flex flex-column align-items-center text-center gap-3 py-4 px-3">
            <i class="bi fs-1" :class="content.icono" aria-hidden="true"></i>
            <h3 class="card-title fs-6 fw-normal mb-0">{{ content.titulo }}</h3>

            <p v-if="content.descripcion">
                {{ content.descripcion }}
            </p>

            <a :href="content.href"
                class="small link-primary text-decoration-none d-inline-flex align-items-center gap-1"
                :aria-label="`Ir al link de ${content.titulo}`">
                Ir al link <i class="bi bi-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
    </article>
</template>

<style scoped>
.custom-card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.custom-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>