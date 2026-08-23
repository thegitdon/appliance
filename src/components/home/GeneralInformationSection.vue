<script setup lang="ts">
import { consume } from '@/services/consumer.service';
import { UrlConstantsUtil } from '@/utils/url-constants.util';
import { onMounted, ref } from 'vue';
import CardDomino from '../common/cards/CardDomino.vue';
import type { GeneralinformationSectionType } from '@/types/general-information-section.type.ts';

const title = "Expertos en instalación, mantenimiento y reparación de electrodomésticos";
const sections = ref<GeneralinformationSectionType[]>([]);

onMounted(async () => {
    try {
        sections.value = await consume<GeneralinformationSectionType[]>(UrlConstantsUtil.GENERAL_INFORMATION_URL);
    } catch (e) {
        console.log(e);
    }
});
</script>

<template>
    <section class="py-4" aria-label="Información general">
        <div class="container">
            <h2 class="titulo-seccion">{{ title }}</h2>

            <CardDomino v-for="(section, index) in sections" :key="section.id" :invertido="index % 2 === 1">
                <template #image>
                    <i :class="section.icono.class" :style="section.icono.styles"></i>
                </template>

                <template #information>
                    <h3 class="servicio__titulo">{{ section.titulo }}</h3>
                    <p v-for="(parrafo, i) in section.parrafos" :key="i" class="servicio__parrafo">
                        {{ parrafo }}
                    </p>
                </template>
            </CardDomino>
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
</style>