import { defineComponent, ref, onMounted } from 'vue';
import { ElImage } from 'element-plus';
import product from '@/data/product.json';
import emitter from "@/bus.js";

export default defineComponent({
    components: {
        ElImage
    },
    props: {

    },
    setup(props) {
        const currentColor = ref(0);
        function closeCartList() {
            emitter.emit('close-cart-list', false);
        }
        onMounted (() => {
            emitter.on('changeColor', (res: number) => {
                currentColor.value = res - 1;
			});
        })

        return {
            product,
            currentColor,

            closeCartList,
        }
    }
})