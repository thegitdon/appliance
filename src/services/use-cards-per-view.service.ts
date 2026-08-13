import { ConstantsUtil } from '@/utils/constants.util'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { Ref } from 'vue'


export function useCardsPerView(): { perView: Ref<number> } {
    const perView = ref<number>(1);

    const compute = (): void => {
        const width = window.innerWidth

        if (width >= ConstantsUtil.BREAKPOINTS.xl) perView.value = 4
        else if (width >= ConstantsUtil.BREAKPOINTS.lg) perView.value = 4
        else if (width >= ConstantsUtil.BREAKPOINTS.md) perView.value = 3
        else if (width >= ConstantsUtil.BREAKPOINTS.sm) perView.value = 2
        else perView.value = 1
    }

    onMounted(() => {
        compute();
        window.addEventListener('resize', compute, { passive: true });
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', compute);
    });

    return { perView };
}
