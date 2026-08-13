export class ConstantsUtil {
    public static readonly SOCIAL_ICONS = { facebook: 'fa-brands fa-facebook', instagram: 'fa-brands fa-instagram' };

    public static readonly BREAKPOINTS_CAROUSEL = { medium: '768px', large: '1200px' };

    public static readonly BREAKPOINTS = {
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
    } as const;
}
