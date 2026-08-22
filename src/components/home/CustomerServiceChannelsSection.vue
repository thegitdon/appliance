<script setup lang="ts">
import ResponsivePicture from '@/components/common/pictures/ResponsivePicture.vue';
import { useImage } from '@/services/use-image.service';
import type { CustomerServiceChannelType } from '@/types/customer-service-channel.type';
import type { ImageState } from '@/types/responsive-image.type';

const props = withDefaults(defineProps<{
    brandName?: string;
}>(), {
    brandName: 'Haceb'
});

const hacebLogo: ImageState = useImage(() => 'haceb_logo');

const serviceData: CustomerServiceChannelType = {
    brandName: props.brandName,
    emergencyNumber: '#466',
    technicalPhones: [
        { city: 'Medellín', number: '6042552100', formattedNumber: '(604)2552100' },
        { city: 'Bogotá', number: '6014897979', formattedNumber: '(601)4897979' },
        { city: 'Barranquilla', number: '6053110000', formattedNumber: '(605)3110000' }
    ],
    whatsappNumber: '+57 3164539797',
    whatsappCountryCode: '57'
};
</script>

<template>
    <section class="customer-service-section py-5 bg-light">
        <div class="container">
            <!-- Header -->
            <div class="text-center mb-5">
                <h2 class="section-title fw-bold text-dark">
                    Siempre dispuestos a ayudarte
                </h2>
                <hr class="divider mx-auto" />
            </div>

            <!-- Contact Cards Grid -->
            <div class="row g-4">
                <!-- Technical Service -->
                <div class="col-lg-4 col-md-6">
                    <div class="text-center h-100 p-4">
                        <div class="icon-wrapper mb-3">
                            <i class="bi bi-telephone-fill text-primary"></i>
                        </div>
                        <h3 class="service-title mb-3">
                            Servicio técnico {{ brandName }}
                        </h3>
                        <div class="phone-number mb-3">
                            <span class="phone-number__label px-2 py-1">¡Llama ahora!</span>
                            <span class="phone-number__emegency-number px-2 py-1">{{ serviceData.emergencyNumber
                                }}</span>
                        </div>
                        <ul class="phone-list list-unstyled">
                            <li v-for="phone in serviceData.technicalPhones" :key="phone.city" class="mb-2">
                                <strong>{{ phone.city }}:</strong>
                                <a :href="`tel:${phone.number}`" class="text-decoration-none text-dark">
                                    {{ phone.formattedNumber }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- WhatsApp Line -->
                <div class="col-lg-4 col-md-6">
                    <div class="text-center h-100 p-4 border-start border-end">
                        <div class="icon-wrapper mb-3">
                            <i class="bi bi-whatsapp text-success"></i>
                        </div>
                        <h3 class="service-title mb-3">Línea WhatsApp</h3>
                        <p class="fw-bold mb-2">Encuéntranos solo a un click</p>
                        <div class="fw-bold mb-3">
                            {{ serviceData.whatsappNumber }}
                        </div>

                        <div class="schedule-section mt-4">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item bg-transparent border-0">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button bg-transparent collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="false" aria-controls="collapseOne">
                                            Conoce nuestros horarios de contacto
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="schedule-info mt-3 p-3 bg-white rounded">
                                                <p class="mb-2">
                                                    <strong>Lunes - viernes:</strong> 8 am a 6 pm<br>
                                                    <strong>Sábados:</strong> 8 am a 4 pm<br>
                                                    <strong>Jornada continua</strong>
                                                </p>
                                                <small class="text-muted d-block">
                                                    Domingos y festivos no se tendrá atención. Si nos escribes por fuera
                                                    de este
                                                    horario, te contestaremos tan pronto estemos de regreso.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Factory Warranty -->
                <div class="col-lg-4 col-md-6">
                    <div class="text-center h-100 p-4">
                        <div class="icon-wrapper mb-3">
                            <i class="bi bi-shield-check text-primary"></i>
                        </div>
                        <h3 class="service-title mb-3">Garantía directa de fábrica</h3>
                        <div class="brand-logo mb-3" v-if="hacebLogo.image">
                            <ResponsivePicture :image="hacebLogo.image.value" loading="eager" />
                        </div>
                        <p class="text-muted">
                            Todas tus compras cuentan con el respaldo directo de Servicio {{ brandName }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.customer-service-section {
    background-color: #f8f9fa;
}

.section-title {
    font-size: 1.75rem;
    letter-spacing: 0.5px;
}

.divider {
    width: 60px;
    height: 3px;
    background-color: #0d6efd;
    margin-top: 1rem;
}

.icon-wrapper {
    width: 70px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(13, 110, 253, 0.1);
}

.icon-wrapper i {
    font-size: 2rem;
}

.service-title {
    font-size: 1.25rem;
    color: #0d6efd;
    font-weight: 600;
}

.phone-number {
    display: flex;
    justify-content: center;
}

.phone-number__label {
    background-color: #CACACA;
}

.phone-number__emegency-number {
    background-color: #BED02E;
}

.phone-list li {
    font-size: 0.95rem;
}

.phone-list a:hover {
    color: #0d6efd !important;
    text-decoration: underline;
}

.schedule-info {
    background-color: #f8f9fa;
    border-left: 4px solid #0d6efd;
    font-size: 0.9rem;
    line-height: 1.6;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .section-title {
        font-size: 1.5rem;
    }
}
</style>