<script setup lang="ts">
import type { ReviewType } from '@/types/review.type';
import StarRating from '../start-rating/StarRating.vue';

const props = defineProps<{
    review: ReviewType;
}>();
</script>

<template>
    <div class="card h-100 border-0 shadow-sm review-card">
        <div class="card-body d-flex flex-column h-100">
            <div class="mb-3">
                <StarRating :rating="review.rating" />
            </div>

            <p class="card-text text-muted mb-4">
                {{ review.comment }}
            </p>

            <div class="d-flex align-items-center mt-auto">
                <div class="author-icon me-2">
                    <i class="fa-solid fa-circle-user"></i>
                </div>
                <strong class="author-name">{{ review.authorName }}</strong>
            </div>
        </div>
    </div>
</template>

<style scoped>
.review-card {
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    min-height: 280px;
}

.review-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.author-icon {
    color: #495057;
    display: flex;
    align-items: center;
    font-size: 24px;
}

.author-name {
    color: #212529;
    font-size: 0.95rem;
}

.card-text {
    line-height: 1.6;
    font-size: 0.9rem;
}
</style>