import { defineComponent, ref, onMounted } from 'vue';
import { colorType } from '@/composables/colorType.ts';
import { useModal } from '@/stores/useModal.ts';
import { useProduct } from '@/stores/useProduct.ts';
import { IProductList } from '@/interfaces';
import product from '@/data/product.json';

export default defineComponent({
    components: {
    },
    props: {
    },
    setup() {
        const modal = useModal();
        const { handleProductList, productList } = useProduct();
        const currentColor = ref<number>(1);
        const currentSize = ref<string>('');
        const productCount = ref<number>(1);

        function changeColor(color: number) {
            currentColor.value = color;
        }
        function changeSize(size: string) {
            currentSize.value = size;
        }
        function handelCount(type: number) {
            if (type == 1) {
                productCount.value++;
            } else {
                if (productCount.value <= 1) {
                    return;
                }
                productCount.value--;
            }
        }
        function addToCart() {
            let productList: IProductList = {
                id: currentColor.value + currentSize.value + product.name,
                name: product.name,
                price: product.price,
                color: currentColor.value,
                size: currentSize.value,
                image: product.list[currentColor.value - 1][0],
                count: productCount.value
            };
            modal.handleIsOpen(true, 'CartRemind');
            handleProductList(productList);
        }
        function close() {
            modal.handleIsOpen(false);
        }

        return {
            product,
            currentColor,
            currentSize,
            productCount,

            colorType,
            changeColor,
            changeSize,
            handelCount,
            addToCart,
            close
        }
    }
})