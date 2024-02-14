import { defineAsyncComponent } from "vue";

export default {
    Header: defineAsyncComponent(() => import('@/components/Common/Header/Header.vue')),
    Footer: defineAsyncComponent(() => import('@/components/Common/Footer/Footer.vue')),
    Recommend: defineAsyncComponent(() => import('@/components/Recommend/Recommend.vue')),
    Product: defineAsyncComponent(() => import('@/components/Product/Product.vue')),
    ProductContent: defineAsyncComponent(() => import('@/components/Product/ProductContent/ProductContent.vue')),
    CartButton: defineAsyncComponent(() => import('@/components/Product/CartButton/CartButton.vue')),
    SizeGuide: defineAsyncComponent(() => import('@/components/Product/SizeGuide/SizeGuide.vue')),
    AddToCart: defineAsyncComponent(() => import('@/components/Product/AddToCart/AddToCart.vue')),
    SizeRemind: defineAsyncComponent(() => import('@/components/Common/Remind/SizeRemind/SizeRemind.vue')),
    CartRemind: defineAsyncComponent(() => import('@/components/Common/Remind/CartRemind/CartRemind.vue')),
    Remind: defineAsyncComponent(() => import('@/components/Common/Remind/Remind.vue')),
    SearchBar: defineAsyncComponent(() => import('@/components/Common/SearchBar/SearchBar.vue')),
    Login: defineAsyncComponent(() => import('@/components/Member/Login/Login.vue')),
    ShopAll: defineAsyncComponent(() => import('@/components/List/ShopAll/ShopAll.vue')),
    ShopAllCollapse: defineAsyncComponent(() => import('@/components/List/ShopAllCollapse/ShopAllCollapse.vue')),
    BkPants: defineAsyncComponent(() => import('@/components/List/BkPants/BkPants.vue')),
    CartList: defineAsyncComponent(() => import('@/components/List/CartList/CartList.vue')),
    Modal: defineAsyncComponent(() => import('@/components/Modal/Modal.vue')),
}