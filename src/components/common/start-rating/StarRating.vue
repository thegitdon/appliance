<script setup lang="ts">
const props = withDefaults(defineProps<{
    rating: number;
    maxStars?: number;
    color?: string;
    size?: string;
}>(), {
    maxStars: 5,
    color: '#20c997',
    size: '1.2rem'
});
</script>

<template>
    <div class="star-rating" :style="{ fontSize: size }">
        <span v-for="star in maxStars" :key="star" class="star" :class="{ 'star-filled': star <= rating }">
            ★
        </span>
    </div>
</template>

<style scoped>
.star-rating {
    display: inline-flex;
    line-height: 1;
}

.star {
    color: #e0e0e0;
    margin-right: 2px;
    transition: color 0.2s ease;
}

.star:last-child {
    margin-right: 0;
}

.star-filled {
    color: v-bind(color);
}
</style>