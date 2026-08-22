<script setup lang="ts">
const props = withDefaults(defineProps<{
    id?: string;
    invertido: boolean;
}>(), {
    invertido: false
});
</script>

<template>
    <article :id="props.id" class="servicio" :class="{ 'servicio--invertido': invertido }">
        <div class="servicio__icono">
            <slot name="image"></slot>
        </div>

        <div class="servicio__contenido">
            <slot name="information"></slot>
        </div>
    </article>
</template>

<style scoped>
.servicio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 3rem 0;
    border-bottom: 1px solid #e4e7ec;
}

.servicio__icono {
    display: flex;
    justify-content: center;
}

.servicio--invertido .servicio__icono {
    order: 2;
}

.servicio--invertido .servicio__contenido {
    order: 1;
    text-align: right;
}

@media (max-width: 800px) {
    .servicio {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 2rem 0;
        text-align: center;
    }

    .servicio--invertido .servicio__icono {
        order: 0;
    }

    .servicio--invertido .servicio__contenido {
        text-align: center;
    }
}
</style>