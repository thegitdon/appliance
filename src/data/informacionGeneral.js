import { h } from 'vue'

/**
 * Helper: crea un icono SVG (estilo trazo) como componente Vue.
 * Puedes reemplazarlo por cualquier componente de iconos
 * (lucide-vue-next, heroicons, un .vue propio, etc.)
 */

const crearIcono = (nombre, children) => ({
    name: nombre,
    render() {
        return h(
            'svg',
            {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'aria-hidden': 'true',
            },
            children,
        )
    },
});

export const informacionGeneral = [
    {
        id: 'consulta-externa',
        titulo: 'Consulta Externa',
        parrafos: [
            'En Consulta Externa ofrecemos atención ambulatoria especializada en psiquiatría, psiquiatría infantil, psicología, neuropsicología, terapia ocupacional y trabajo social. Nuestros servicios son integrales y están articulados entre sí, creando un espacio multidisciplinario donde cada profesional trabaja en conjunto para ofrecerte las mejores soluciones y un enfoque integral para tu bienestar.',
        ],
        icono: crearIcono('IconoConsultaExterna', [
            h('rect', { width: '8', height: '4', x: '8', y: '2', rx: '1', ry: '1' }),
            h('path', { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }),
            h('path', { d: 'M8 14h1.5L11 9.5l2.5 8.5L15 14h1' }),
        ]),
    },
    {
        id: 'cuidado-basico',
        titulo: 'Cuidado Básico Consumo Sustancias Psicoactivas',
        parrafos: [
            'El Cuidado Básico para el Consumo de Sustancias Psicoactivas se centra en la prevención y el manejo del consumo de sustancias psicoactivas, enfocándose en la identificación y el manejo de factores de riesgo y la promoción de estilos de vida saludables.',
            'Este cuidado incluye la identificación y diagnóstico de factores de riesgo, la promoción de estilos de vida saludables y la participación en actividades comunitarias.',
        ],
        icono: crearIcono('IconoSustancias', [
            h('g', { transform: 'translate(1 1) scale(0.7)', 'stroke-width': '2.86' }, [
                h('path', { d: 'm10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z' }),
                h('path', { d: 'm8.5 8.5 7 7' }),
            ]),
            h('circle', { cx: '17', cy: '17.5', r: '4' }),
            h('path', { d: 'M17 13.5v8' }),
        ]),
    },
];