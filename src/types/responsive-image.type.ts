import type { Ref } from "vue";

export type ImageSize = 'small' | 'medium' | 'large';

export type ImageRegistry = ReadonlyArray<Record<string, ResponsiveImageType>>;

export type ImageState = {
    image: Ref<ResponsiveImageType | null>
    loading: Ref<boolean>
    error: Ref<string | null>
}

export interface ResponsiveImageType {
    multiples: boolean
    image?: string,
    images?: Record<ImageSize, string>;
    alt: string;
    title: string;
}
