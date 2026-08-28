<script setup lang="ts">
import { consume } from '@/services/consumer.service';
import type { RequestServiceStepType } from '@/types/request-service-step.type';
import { UrlConstantsUtil } from '@/utils/url-constants.util';
import { onMounted, ref } from 'vue';
import Step from '../common/steps/Step.vue';

const steps = ref<RequestServiceStepType[]>([]);

onMounted(async () => {
    try {
        steps.value = await consume<RequestServiceStepType[]>(UrlConstantsUtil.REQUEST_SERVICE_STEPS_URL);
    } catch (e) {
        console.log(e);
    }
});

</script>

<template>
    <div class="align-items-center d-flex flex-column pb-5">
        <h2 class="mb-5">Conoce los pasos para pedir tu servicio técnico</h2>
        <Step v-for="step in steps">
            <template #icon>
                <i :class="step.icon"></i>
            </template>
            <template #heading>{{ step.title }}</template>

            <div>
                <p v-for="(parrafo, i) in step.description" :key="i">
                    {{ parrafo }}
                </p>
            </div>
        </Step>
    </div>
</template>

<style scoped>
.servicio__parrafo {
    margin: 0 0 0.75rem;
    font-size: 0.95rem;
    line-height: 1.8;
    color: #556070;
}
</style>