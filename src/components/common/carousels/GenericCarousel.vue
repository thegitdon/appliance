<script setup lang="ts" generic="T extends { id: string | number }">
import { computed, ref, watch } from 'vue';
import { useCardsPerView } from '@/services/use-cards-per-view.service.ts';

const props = defineProps<{
    id: string,
    items: T[];
}>();

const { perView } = useCardsPerView();
const index = ref(0);

const slides = computed(() => {
    const size = perView.value;
    const chunks: T[][] = [];
    for (let i = 0; i < props.items.length; i += size) {
        chunks.push(props.items.slice(i, i + size));
    }
    return chunks;
});

const cols = computed(() => {
    const items = slides.value[0]?.length ?? 4;
    return 12 / items;
});

watch(() => slides.value.length, (length) => {
    if (index.value > length - 1) index.value = 0;
});
</script>

<template>
    <div :id="props.id" class="custom-carousel carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div class="carousel-inner">
            <div v-for="(group, i) in slides" :key="`${perView}-${i}`" class="carousel-item"
                :class="{ active: i === 0 }">
                <div class="row g-3">
                    <div v-for="item in group" :key="item.id" :class="`col-${cols}`">
                        <slot name="card" :item="item" />
                    </div>
                </div>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" :data-bs-target="`#${props.id}`" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>

        <button class="carousel-control-next" type="button" :data-bs-target="`#${props.id}`" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
</template>

<style scoped>
.custom-carousel.carousel {
    position: relative;
    display: flex;
    justify-content: center;
}

.custom-carousel .carousel-inner {
    width: 80%;
}

.custom-carousel .carousel-item .row {
    min-height: 300px;
}

.custom-carousel .carousel-control-prev,
.custom-carousel .carousel-control-next {
    border-radius: 50%;
    background: rgba(0, 0, 0, .5);
    height: 50px;
    width: 50px;
    top: 50%;
}
</style>