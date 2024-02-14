import { defineStore } from "pinia";

export const useModal = defineStore('modal', {
    state: () => ({
        isOpen: false as boolean,
        isComponent: '' as string,
    }),
    actions: {
        handleIsOpen(status: boolean, component: string = '') {
            this.isOpen = status;
            this.isComponent = component;
        }
    }
})