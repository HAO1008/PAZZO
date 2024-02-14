import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
    },
    props: {

    },
    setup(props) {
        const list = ref([
            {id: 1, name: '紅'},
            {id: 2, name: '背心'},
            {id: 3, name: '外套'},
            {id: 4, name: '針織'},
            {id: 5, name: '大學'},
        ]);
        return {
            list,
        }
    }
})