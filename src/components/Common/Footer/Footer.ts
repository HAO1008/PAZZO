import { defineComponent, ref } from 'vue';
import { IList } from '@/interfaces';
import copyright from '@/assets/copyright.svg';
export default defineComponent({
    components: {
    },
    props: {

    },
    setup(props) {
        const list = ref<IList[]>([
            {id: 1, title: '如何購買', enTitle: 'HOW TO BUY', isActive: false},
            {id: 2, title: '重要公告', enTitle: 'NOTICE', isActive: false},
            {id: 3, title: '關於PAZZO', enTitle: 'ABOUT PAZZO', isActive: false},
            {id: 4, title: '隱私權', enTitle: 'LEGAL', isActive: false},
            {id: 5, list: [{title: '小雜誌', href: ''}, {title: 'FACEBOOK', href: 'https://www.facebook.com/PAZZO.tw/'}, {title: 'INSTAGRAM', href: 'https://www.instagram.com/pazzo/'}, {title: 'LINE', href: 'https://line.me/ti/p/%40pazzo'}, {title: 'YOUTUBE', href: 'https://www.youtube.com/user/pazzotw'}], title: '', enTitle: '', isActive: false},
            {id: 6, list: [{title: 'THE BUTTERS', href: 'https://www.the-butters.com/'}, {title: 'MEIER.Q', href: 'https://www.meierq.com/'}], title: '', enTitle: '#BKPANTS', isActive: false},
            {id: 7, title: '165 反詐騙', enTitle: '165 ANTI-FRAUD', isActive: false},
            {id: 8, title: 'service@pazzo.com.tw', isActive: false},
        ]);
        return {
            list,
            copyright
        }
    }
})