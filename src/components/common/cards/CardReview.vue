<script setup lang="ts">
import type { ReviewType } from '@/types/review.type';
import StarRating from '../start-rating/StarRating.vue';

const props = defineProps<{
    review: ReviewType;
}>();
</script>

<template>
    <div class="card h-100 border-0 shadow-sm review-card">
        <div class="card-body">
            <!-- Estrellas -->
            <div class="mb-3">
                <StarRating :rating="review.rating" />
            </div>

            <!-- Comentario -->
            <p class="card-text text-muted mb-4">
                {{ review.comment }}
            </p>

            <!-- Autor -->
            <div class="d-flex align-items-center">
                <div class="author-icon me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
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