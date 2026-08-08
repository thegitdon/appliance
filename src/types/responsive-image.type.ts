export type ImageSize = 'small' | 'medium' | 'large'

export interface ResponsiveImageType {
    multiples: boolean
    image?: unknown
    images?: unknown
    alt: string;
    title: string;
}

export interface SingleImageConfig {
    multiples: false;
    image: string;
    alt?: string;
    title?: string;
}

export interface MultipleImageConfig {
    multiples: true;
    images: Record<ImageSize, string>;
    alt?: string;
    title?: string;
}

export type ImageConfig = SingleImageConfig | MultipleImageConfig

export type ImageRegistry = ReadonlyArray<Record<string, ResponsiveImageType>>