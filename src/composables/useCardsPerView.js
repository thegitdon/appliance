import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useCardsPerView() {
    const perView = ref(1);

    const compute = () => {
        const width = window.innerWidth
        if (width >= 1200) perView.value = 5
        else if (width >= 992) perView.value = 4
        else if (width >= 768) perView.value = 3
        else if (width >= 576) perView.value = 2
        else perView.value = 1
    };

    onMounted(() => {
        compute();
        window.addEventListener('resize', compute, { passive: true });
    });

    onBeforeUnmount(() => window.removeEventListener('resize', compute));

    return { perView };
}