import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
    },
    props: {

    },
    setup(props) {
        const list = ref([
            {id: 1, name: '美圖褲全系列'},
            {id: 2, name: '顯瘦長腿'},
            {id: 3, name: '修身直筒'},
            {id: 4, name: '藏肉寬褲'},
            {id: 5, name: '褲類'},
            {id: 6, name: '裙類'},
            {id: 7, name: '洋裝'},
            {id: 8, name: '高彈羅馬布'},
            {id: 9, name: '挺版羅馬布'},
            {id: 10, name: '空氣棉'},
        ])
        return {
            list
        }
    }
})