import { defineStore } from "pinia";
import { IProductList } from '@/interfaces';

export const useProduct = defineStore('product', {
    state: () => ({
        productList: [] as IProductList[],
    }),
    actions: {
        handleProductList(item: IProductList) {
            let index = this.productList.findIndex((e: IProductList) => e.id == item.id);
            if (index < 0) {
                this.productList.push(item);
            } else {
                this.productList[index].count += item.count;
            }
            
        }
    }
})