import { defineComponent, ref } from 'vue';
import { useModal } from '@/stores/useModal.ts';
export default defineComponent({
    components: {
    },
    props: {

    },
    setup(props) {
        const modal = useModal();
        function closeModal(event: any, status: boolean) {
            if (event.target.classList.contains('modal')) {
                modal.handleIsOpen(status);
            }
        }
        return {
            modal,
            closeModal
        }
    }
})