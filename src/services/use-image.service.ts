import { ref, toValue, watch } from 'vue'
import type { MaybeRefOrGetter, Ref } from 'vue'

import type { ImageSize, ImageState, ResponsiveImageType } from '@/types/responsive-image.type'
import { consume } from './consumer.service';
import { UrlConstantsUtil } from '@/utils/url-constants.util';

const IMAGE_SIZES = ['small', 'medium', 'large'] as const

/**
 * Valida la regla de negocio y actúa como type guard:
 * - multiples: true  → requiere `images` con small, medium y large
 * - multiples: false → requiere `image`
 */
function isValidImageConfig(config: unknown): config is ResponsiveImageType {
    if (typeof config !== 'object' || config === null) return false

    const candidate = config as ResponsiveImageType;

    if (candidate.multiples) {
        if (typeof candidate.images !== 'object' || candidate.images === null) return false

        const sizes = candidate.images as Record<ImageSize, string>;
        return IMAGE_SIZES.every((size) => typeof sizes[size] === 'string');
    }

    return typeof candidate.image === 'string';
}

async function findImageConfig(key: string): Promise<ResponsiveImageType | undefined> {
    try {
        const images = await consume<{ [key: string]: ResponsiveImageType }[]>(UrlConstantsUtil.IMAGES_URL);
        const entry = images.find((item) => Object.hasOwn(item, key));
        return entry ? entry[key] : undefined;
    } catch (e) {
        return undefined;
    }
}

export function useImage(key: MaybeRefOrGetter<string>): ImageState {
    const image = ref<ResponsiveImageType | null>(null);
    const loading = ref(true);
    const error = ref<string | null>(null);

    watch(
        () => toValue(key),
        async (resolvedKey) => {
            loading.value = true;
            error.value = null;
            image.value = null;

            try {
                const config = await findImageConfig(resolvedKey);

                if (!config) {
                    console.warn(`[useImage] No existe una imagen registrada como "${resolvedKey}".`)
                    return;
                }

                if (!isValidImageConfig(config)) {
                    console.warn(
                        `[useImage] Configuración inválida para "${resolvedKey}". ` +
                        'Si "multiples" es true se requiere "images" (small, medium, large); ' +
                        'si es false, se requiere "image".',
                    );
                    return;
                }

                image.value = config;
            } catch (e) {
                error.value = e instanceof Error ? e.message : 'Error inesperado';
                console.error(`[useImage] Error al cargar "${resolvedKey}":`, e);
            } finally {
                loading.value = false;
            }
        },
        { immediate: true },
    );

    return { image, loading, error };
}