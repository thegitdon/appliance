<script setup lang="ts">
import { consume } from '@/services/consumer.service';
import type { SectionContentType } from '@/types/section-content.type';
import { UrlConstantsUtil } from '@/utils/url-constants.util';
import { onMounted, ref } from 'vue';

const title = "Nuestros servicios";
const sections = ref<SectionContentType[]>([]);
const cargando = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
    try {
        sections.value = await consume<SectionContentType[]>(UrlConstantsUtil.INFORMACION_GENERAL_URL);
    } catch (e) {
        error.value = e instanceof Error ? e.message : 'Error inesperado';
    } finally {
        cargando.value = false;
    }
});
</script>

<template>
    <section class="py-4" aria-label="Información general">
        <div class="container">
            <h2 class="titulo-seccion">{{ title }}</h2>

            <div v-if="cargando" class="text-center py-5" role="status">
                <div class="spinner-border text-primary" aria-hidden="true"></div>
            </div>

            <div v-else-if="error" class="alert alert-danger mb-0" role="alert">
                {{ error }}
            </div>

            <article v-for="(section, index) in sections" :key="section.id" class="servicio"
                :class="{ 'servicio--invertido': index % 2 === 1 }">
                <div class="servicio__icono">
                    <i :class="section.icono.class" :style="section.icono.styles"></i>
                </div>

                <div class="servicio__contenido">
                    <h3 class="servicio__titulo">{{ section.titulo }}</h3>
                    <p v-for="(parrafo, i) in section.parrafos" :key="i" class="servicio__parrafo">
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