import { computed, toValue } from 'vue'
import images from '../data/images.js'

/**
 * Valida la regla de negocio:
 * - multiples: true  → requiere `images` con small, medium y large
 * - multiples: false → requiere `image`
 */
export function isValidImageConfig(config) {
    if (!config || typeof config !== 'object') return false

    if (config.multiples) {
        return ['small', 'medium', 'large'].every(
            (size) => typeof config.images?.[size] === 'string',
        )
    }
    return typeof config.image === 'string'
}

function findImageConfig(key) {
    const entry = images.find((item) => Object.hasOwn(item, key))
    return entry ? entry[key] : null
}

/**
 * @param {string | import('vue').Ref<string> | () => string} key
 * @returns {{ image: import('vue').ComputedRef<Object|null> }}
 */
export function useImage(key) {
    const image = computed(() => {
        const resolvedKey = toValue(key)
        const config = findImageConfig(resolvedKey)

        if (!config) {
            console.warn(`[useImage] No existe una imagen registrada como "${resolvedKey}".`)
            return null
        }

        if (!isValidImageConfig(config)) {
            console.warn(
                `[useImage] Configuración inválida para "${resolvedKey}". ` +
                'Si "multiples" es true se requiere "images" (small, medium, large); si es false, se requiere "image".',
            )
            return null
        }

        return config
    })

    return { image }
}