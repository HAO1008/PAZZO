import { defineComponent, ref, onMounted } from 'vue';
import { colorType } from '@/composables/colorType.ts';
import { useModal } from '@/stores/useModal.ts';
import { useProduct } from '@/stores/useProduct.ts';
import { IProductList } from '@/interfaces';
import emitter from "@/bus.js";

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
        const { handleProductList, productList } = useProduct();
        const currentColor = ref<number>(1);
        const currentSize = ref<string>('');
        const currentInfo = ref<number>(0);
        const isCanClick = ref(true);
        const productCount = ref(1);
        const header = [
            '商品資訊',
            '洗滌方式',
            '尺寸指南',
        ]

        function changeColor(color: number) {
            currentColor.value = color;
            emitter.emit('changeColor', currentColor.value);
        }
        function changeSize(size: string) {
            currentSize.value = size;
        }
        function changeInfo(type: number) {
            if (type == 2 && isCanClick.value) {
                modal.handleIsOpen(true, 'SizeGuide');
                return;
            }
            currentInfo.value = type;
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
        function checkWindowSize() {
            isCanClick.value = window.innerWidth >= 1024;
        }
        function openRemind(com: string, type: number) {
            let productList: IProductList = {
                id: currentColor.value + currentSize.value + product.name,
                name: product.name,
                price: product.price,
                color: currentColor.value,
                size: currentSize.value,
                image: product.list[currentColor.value - 1][0],
                count: type
            };
            modal.handleIsOpen(true, com);
            if (type) {
                handleProductList(productList);
            }
        }
        onMounted(() => {
            checkWindowSize();
            window.addEventListener('resize', checkWindowSize);
        })

        return {
            product,
            currentColor,
            currentSize,
            currentInfo,
            header,
            productCount,
            productList,

            colorType,
            changeColor,
            changeSize,
            changeInfo,
            handelCount,
            openRemind
        }
    }
})