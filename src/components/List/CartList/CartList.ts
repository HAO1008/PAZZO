import { defineComponent, ref } from 'vue';
import { ElScrollbar } from 'element-plus';
import { useProduct } from '@/stores/useProduct.ts';
import { colorType } from '@/composables/colorType.ts';
import { useRouter } from 'vue-router';
import emitter from '@/bus.ts';
export default defineComponent({
    components: {
        ElScrollbar
    },
    props: {

    },
    setup(props) {
        const { productList } = useProduct();
        const router = useRouter();
        function toPay() {
            router.push({name: 'Login'});
            emitter.emit('close-cart-list', false);
        }
        return {
            productList,

            colorType,
            toPay
        }
    }
})