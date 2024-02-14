import { defineComponent, ref, onMounted, computed } from 'vue';
import { useProduct } from '@/stores/useProduct.ts';
import { useRouter } from 'vue-router';
import emitter from '@/bus';
import logo from '@/assets/logo.svg';
import search from '@/assets/icons/search.svg';
import user from '@/assets/icons/user.svg';
import bag from '@/assets/icons/bag.svg';
import menu from '@/assets/icons/menu.svg';
export default defineComponent({
    components: {
    },
    props: {

    },
    setup(props) {
        const { productList } = useProduct();
        const router = useRouter();
        const list = ref([
            {id: 1, title: '所有商品', enTitle: 'SHOP ALL', isActive: false},
            {id: 2, title: '最新商品', enTitle: 'NEW ARRIVAL', isActive: false},
            {id: 3, title: '熱賣商品', enTitle: 'RESTOCK', isActive: false},
            {id: 4, title: '發熱系列', enTitle: 'HEAT', isActive: false},
            {id: 5, title: '美圖瘦瘦褲', enTitle: '#BKPANTS', isActive: false},
        ]);
        const secnav = ref([
            {id: 1, name: 'search', img: search},    
            {id: 2, name: 'user', img: user},    
            {id: 3, name: 'bag', img: bag},
            {id: 4, name: 'menu', img: menu},
        ])
        const isOpen = ref<boolean>(false);
        const cartOpen = ref<boolean>(false);
        const searchOpen = ref<boolean>(false);
        const closeShow = ref<boolean>(false);
        const handleCartCount = computed(() => {
            let count = 0;
            productList.forEach((e: any) => {
                count = e.count + count;
            });
            return count;
        })
        function changeListStats(status: boolean, item: any) {
            item.isActive = status;
            
            if (item.id == 1) {
                isOpen.value = status;
            }
        }
        function openList(id: number, status: boolean) {
            if (id == 1) {
                searchOpen.value = !searchOpen.value;
                cartOpen.value = false;
            }
            if (id == 2) {
                router.push({name: 'Login'});
                cartOpen.value = false;
            }
            if (id == 3) {
                cartOpen.value = status;
            }
            if (id == 4) {
                isOpen.value = status;
                searchOpen.value = false;
            }
        }
        function checkWindowSize() {
            closeShow.value = window.innerWidth <= 1024;
        }
        function routerPush() {
            router.push({name: 'Product'});
            cartOpen.value = false;
        }
        onMounted(() => {
            checkWindowSize();
            window.addEventListener('resize', checkWindowSize);
            emitter.on('close-cart-list', (res: boolean) => {
                cartOpen.value = res;
			});
            
        })
        return {
            router,
            isOpen,
            cartOpen,
            searchOpen,
            logo,
            list,
            secnav,
            productList,
            closeShow,
            handleCartCount,

            changeListStats,
            openList,
            routerPush,
        }
    }
})