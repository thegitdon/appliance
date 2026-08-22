export type ImageSize = 'small' | 'medium' | 'large';

export type ImageRegistry = ReadonlyArray<Record<string, ResponsiveImageType>>;

export interface ResponsiveImageType {
    multiples: boolean
    image?: string,
    images?: Record<ImageSize, string>;
    alt: string;
    title: string;
}
