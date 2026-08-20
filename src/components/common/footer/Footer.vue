<script setup lang="ts">
import FooterColumn from './FooterColumn.vue';
import type { FooterLinkType } from '@/types/footer-link.type.ts';
import type { SocialButtonType } from '@/types/social-button.type.ts';
import { ConstantsUtil } from '@/utils/constants.util.ts';

const icons = ConstantsUtil.SOCIAL_ICONS;
// ==================== DATA ====================

const socialLinks: SocialButtonType[] = [
    {
        id: 'whatsapp',
        href: 'https://instagram.com/haceb',
        label: 'WhatsApp',
    },
];

const corporateLinks: FooterLinkType[] = [
    { label: 'Empresa', href: '#' },
    { label: 'Proveedores y clientes', href: '#' },
    { label: 'Puntos de venta', href: '#' },
    { label: 'Servicio Haceb', href: '#' },
    { label: 'Blog Haceb', href: '#' },
    { label: 'Registro para eventos', href: '#' },
    { label: 'Trabaja con nosotros', href: '#' },
];

const legalLinks: FooterLinkType[] = [
    { label: 'Términos y condiciones de compra', href: '#' },
    { label: 'Condiciones de uso del sitio', href: '#' },
    { label: 'Política de protección de datos personales', href: '#' },
    { label: 'Cambios y devoluciones', href: '#' },
    { label: 'Cobertura para entregas', href: '#' },
    { label: 'Guía para comprar aquí', href: '#' },
    { label: 'Capacidad Operativa y Tecnológica', href: '#' },
    { label: 'Términos y condiciones Hogar Haceb', href: '#' },
    { label: 'Términos y condiciones de servicios', href: '#' },
    { label: 'Términos y condiciones de Crédito Haceb', href: '#' },
    { label: 'Términos y condiciones Aliados Haceb', href: '#' },
    { label: 'Autorización tratamiento de datos financieros Crédito Haceb', href: '#' },
];

const serviceLinks: FooterLinkType[] = [
    { label: 'Agendar servicio técnico', href: '#' },
    { label: 'Preguntas frecuentes', href: '#' },
    { label: 'Pago de facturas de Servicio', href: '#' },
    { label: 'Solicitud de reversión de pago', href: '#' },
    { label: 'Crédito Haceb', href: '#' },
];
</script>

<template>
    <footer class="site-footer">
        <!-- Social Bar -->
        <div class="social-bar">
            <div class="container">
                <div class="social-icons d-flex justify-content-center gap-3 py-3">
                    <a v-for="social in socialLinks" :key="social.id" :href="social.href"
                        :aria-label="`Síguenos en ${social.label}`" target="_blank" rel="noopener noreferrer"
                        class="social-link text-dark">
                        <i :class="icons[social.id]"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Main Footer -->
        <div class="footer-main">
            <div class="container">
                <div class="row g-4">
                    <!-- Columna: Corporativo -->
                    <div class="col-lg-4 col-md-12">
                        <FooterColumn title="Corporativo" :links="corporateLinks" />
                    </div>

                    <!-- Columna: Legales -->
                    <div class="col-lg-4 col-md-12">
                        <FooterColumn title="Legales" :links="legalLinks" />
                    </div>

                    <!-- Columna: Servicios -->
                    <div class="col-lg-4 col-md-12">
                        <FooterColumn title="Servicios" :links="serviceLinks" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* ==================== SOCIAL BAR ==================== */
.social-bar {
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
}

.social-link {
    font-size: 1.25rem;
    transition: color 0.2s ease, transform 0.2s ease;
}

.social-link:hover {
    color: #0d6efd !important;
    transform: scale(1.15);
}

/* ==================== MAIN FOOTER ==================== */
.footer-main {
    background-color: #2c2c2c;
    color: #d4d4d4;
    padding: 3rem 0 2.5rem;
}

.footer-main a {
    color: #d4d4d4;
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer-main a:hover {
    color: #ffffff;
    text-decoration: underline;
}

/* ==================== FOOTER EXTRA SECTIONS ==================== */
.footer-extra-title {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.footer-extra-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #ffffff;
}

.footer-extra-text {
    font-size: 0.85rem;
    color: #b0b0b0;
    margin-bottom: 0.75rem;
    line-height: 1.4;
}

/* Botón Empresarios - verde característico */
.btn-empresario {
    background-color: #b8c92e;
    border: 1px solid #b8c92e;
    color: #ffffff;
    font-weight: 600;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease, border-color 0.2s ease;
}

.btn-empresario:hover {
    background-color: #a3b328;
    border-color: #a3b328;
    color: #ffffff;
    text-decoration: none;
}

/* Responsive */
@media (max-width: 767.98px) {
    .footer-main {
        padding: 2rem 0 1.5rem;
    }
}
</style>