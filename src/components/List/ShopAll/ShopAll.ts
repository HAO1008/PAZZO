import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
    },
    props: {

    },
    setup(props) {
        const list = ref([
            {id: 1, name: '品牌主打', list: [
                {id:1, name:'本周新品'},
                {id:2, name:'2024人氣必買清單'},
                {id:3, name:'保暖發熱衣系列'},
                {id:4, name:'鋪棉單品專區', discount: true},
                {id:5, name:'迎新年時髦．紅色單品', hot: true},
                {id:6, name:'顯瘦美圖褲系列'},
                {id:7, name:'熱銷BRAT系列'},
                {id:8, name:'印花標語TEE系列'},
                {id:9, name:'抗UV涼感砂系列'},
                {id:10, name:'熱鋪銷貨'},
                {id:11, name:'人氣預購'},
                {id:12, name:'優惠活動'},
            ]},
            {id: 2, name: '優惠活動', list: [
                {id:1, name:'新品折扣', discount: true},
                {id:2, name:'2件$598', discount: true},
                {id:3, name:'2件$798', discount: true},
            ], discount: true},
            {id: 3, name: '美圖系列', list: [
                {id:1, name:'美圖褲全系列'},
                {id:2, name:'顯瘦長腿'},
                {id:3, name:'藏肉寬褲'},
            ]},
            {id: 4, name: '上身類', list: [
                {id:1, name:'BRAT'},
                {id:2, name:'無袖'},
                {id:3, name:'有袖'},
            ]},
            {id: 5, name: '下身類', list: [
                {id:1, name:'裙類'},
                {id:2, name:'短褲'},
                {id:3, name:'長褲'},
            ]},
            {id: 6, name: '連身類', list: [
                {id:1, name:'洋裝'},
                {id:2, name:'連身褲'},
                {id:3, name:'泳衣'},
            ]},
            {id: 7, name: '配件', list: [
                {id:1, name:'耳環'},
                {id:2, name:'項鍊'},
                {id:3, name:'戒指'},
            ]},
            {id: 8, name: '特別企劃', list: [
                {id:1, name:'PEANUTS 史努比聯名企劃'},
                {id:2, name:'金針菇 聯名企劃'},
                {id:3, name:'REEBOK 跨界聯乘'},
            ]},
            {id: 9, name: '風格支線', list: [
                {id:1, name:'PPP品牌限定系列'},
                {id:2, name:'&INTHING個性系列'},
                {id:3, name:"A'a小羊工作室"},
            ]},
            {id: 10, name: '家居內著', list: [
                {id:1, name:'內衣'},
                {id:2, name:'內褲'},
                {id:3, name:'家居服'},
            ]},
            {id: 11, name: 'HOME', list: [
                {id:1, name:'香氛油'},
                {id:2, name:'寢具'},
                {id:3, name:'家居小物'},
            ]},
            {id: 12, name: 'BEAUTY', list: [
                {id:1, name:'彩妝'}
            ]},
        ]);
        return {
            list
        }
    }
})