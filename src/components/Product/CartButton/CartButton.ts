import { defineComponent, ref, onMounted } from 'vue';
import { useModal } from '@/stores/useModal.ts';
export default defineComponent({
    components: {
    },
    props: {
    },
    setup(props) {
        const modal = useModal();

        function openModal() {
            modal.handleIsOpen(true, 'AddToCart');
        }

        return {
            modal,
            openModal
        }
    }
})