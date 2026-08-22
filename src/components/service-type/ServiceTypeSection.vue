<script setup lang="ts">
import { consume } from '@/services/consumer.service';

import { UrlConstantsUtil } from '@/utils/url-constants.util';
import { computed, onMounted, ref } from 'vue';
import CardDomino from '../common/cards/CardDomino.vue';
import type { ServiceTypeSectionType } from '@/types/service-type-section.type.ts';
import ResponsivePicture from '../common/pictures/ResponsivePicture.vue';
import { useImage } from '@/services/use-image.service.ts';
import type { ImageState } from '@/types/responsive-image.type.ts';

const sections = ref<ServiceTypeSectionType[]>([]);

onMounted(async () => {
    try {
        sections.value = await consume<ServiceTypeSectionType[]>(UrlConstantsUtil.SERVICES_TYPE_URL);
    } catch (e) {
        console.log(e);
    }
});

const imagenesCargadas = computed(() => {
    const mapa = new Map<string, ImageState>();

    sections.value.forEach(section => {
        if (section.imagen) {
            mapa.set(section.id, useImage(() => section.imagen!));
        }
    });

    return mapa;
});

function obtenerImagen(sectionId: string): ImageState | undefined {
    return imagenesCargadas.value.get(sectionId);
}
</script>

<template>
    <section class="py-4">
        <div class="container">
            <CardDomino :id="section.id" v-for="(section, index) in sections" :key="section.id"
                :invertido="index % 2 === 1">
                <template #image>
                    <div v-if="obtenerImagen(section.id)?.image.value">
                        <ResponsivePicture :image="obtenerImagen(section.id)!.image.value" loading="eager"
                            class-name="banner-icon" />
                    </div>
                </template>

                <template #information>
                    <h3 class="servicio__titulo">{{ section.titulo }}</h3>

                    <div>
                        {{ section.descripcion }}
                    </div>

                    <div>
                        <span>Incluye:</span>
                        <p v-for="(parrafo, i) in section.incluye" :key="i" class="servicio__parrafo">
                            {{ parrafo }}
                        </p>
                    </div>

                    <div>
                        <span>No incluye:</span>
                        <p v-for="(parrafo, i) in section.noIncluye" :key="i" class="servicio__parrafo">
                            {{ parrafo }}
                        </p>
                    </div>
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