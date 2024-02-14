import { defineComponent, ref, onMounted } from 'vue';
import { colorType } from '@/composables/colorType.ts';
import { useModal } from '@/stores/useModal.ts';

export default defineComponent({
    components: {
    },
    props: {
        product: {
            type: Object,
        }
    },
    setup({product}) {
        const modal = useModal();

        function closeModal() {
            modal.handleIsOpen(false);
        }

        return {
            closeModal
        }
    }
})