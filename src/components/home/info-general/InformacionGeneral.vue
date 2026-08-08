<script setup>
import { informacionGeneral } from '../../../data/informacionGeneral.js';
</script>

<template>
    <section class="py-4" aria-label="Información general">
        <div class="container">
            <h2 class="titulo-seccion">Nuestros servicios</h2>

            <article v-for="(servicio, index) in informacionGeneral" :key="servicio.id" class="servicio"
                :class="{ 'servicio--invertido': index % 2 === 1 }">
                <div class="servicio__icono">
                    <component :is="servicio.icono" class="icono" />
                </div>

                <div class="servicio__contenido">
                    <h3 class="servicio__titulo">{{ servicio.titulo }}</h3>
                    <p v-for="(parrafo, i) in servicio.parrafos" :key="i" class="servicio__parrafo">
                        {{ parrafo }}
                    </p>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.titulo-seccion {
    margin: 0 0 2.5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
}

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

.icono {
    width: 9rem;
    height: 9rem;
}

.servicio__titulo {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    font-weight: 700;
}

.servicio__parrafo {
    margin: 0 0 0.75rem;
    font-size: 0.95rem;
    line-height: 1.8;
    color: #556070;
}

/* Filas alternadas: icono a la derecha y texto alineado a la derecha */
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