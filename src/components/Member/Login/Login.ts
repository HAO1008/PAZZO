import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
    },
    props: {

    },
    setup(props) {
        const header = ref([
            {id: 1, title: '會員登入'},
            {id: 2, title: '加入會員'}
        ]);
        const current = ref<string>('會員登入');
        function changeCurrent(name: string) {
            current.value = name;
        }
        return {
            header,
            current,

            changeCurrent
        }
    }
})