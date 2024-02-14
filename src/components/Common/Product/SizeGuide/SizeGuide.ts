import { defineComponent, ref } from 'vue';
import { ElCollapse, ElCollapseItem } from 'element-plus';
import { useModal } from '@/stores/useModal.ts';
export default defineComponent({
    components: {
        ElCollapse,
        ElCollapseItem
    },
    props: {
        isAccordion: {
            type: Boolean,
            default: true
        },
        allOpen: {
            type: Boolean,
            default: false
        }
    },
    // 腰圍 臀圍 前褲檔 後褲檔 大腿寬 褲長 褲口寬 褲口高岔高度 重量g
    setup({isAccordion, allOpen}) {
        const modal = useModal();
        const activeTable = ref<string[]>(allOpen ? ['1','2','3'] : []);
        const table1 = ref([
            {
                id:1, 
                size: 'S-',
                waist: 30,
                hips: 41.5,
                frontCrotch: 28,
                backCrotch: 38,
                tighWidth: 26.5,
                trouserLength: 97,
                trouserCuffWidth: 22,
                cuffHeight: 16.5,
                weight: 490,
            },
            {
                id:2, 
                size: 'S',
                waist: 30,
                hips: 41.5,
                frontCrotch: 28,
                backCrotch: 38,
                tighWidth: 26.5,
                trouserLength: 103,
                trouserCuffWidth: 22,
                cuffHeight: 16.5,
                weight: 490,
            },
            {
                id:3, 
                size: 'S+',
                waist: 30,
                hips: 41.5,
                frontCrotch: 28,
                backCrotch: 38,
                tighWidth: 26.5,
                trouserLength: 108,
                trouserCuffWidth: 22,
                cuffHeight: 16.5,
                weight: 490,
            },
            {
                id:4, 
                size: 'M',
                waist: 32,
                hips: 43.5,
                frontCrotch: 28.6,
                backCrotch: 39.3,
                tighWidth: 28,
                trouserLength: 104.5,
                trouserCuffWidth: 23,
                cuffHeight: 16.5,
                weight: 490,
            },
            {
                id:5, 
                size: 'M+',
                waist: 32,
                hips: 43.5,
                frontCrotch: 28.6,
                backCrotch: 39.3,
                tighWidth: 28,
                trouserLength: 109.5,
                trouserCuffWidth: 23,
                cuffHeight: 16.5,
                weight: 490,
            },
            {
                id:6, 
                size: 'L',
                waist: 34,
                hips: 45.5,
                frontCrotch: 29.2,
                backCrotch: 40.6,
                tighWidth: 29.5,
                trouserLength: 106,
                trouserCuffWidth: 24,
                cuffHeight: 16.5,
                weight: 490,
            },
            {
                id:7, 
                size: 'L+',
                waist: 34,
                hips: 45.5,
                frontCrotch: 29.2,
                backCrotch: 40.6,
                tighWidth: 29.5,
                trouserLength: 111,
                trouserCuffWidth: 24,
                cuffHeight: 16.5,
                weight: 490,
            },
        ]);
        const table2 = ref([
            {
                id:1, 
                name: '羊',
                height: 158,
                weight: 52,
                shoulderWidth: '上圍豐滿肉肉腰臀腿細直',
                upperBust: 34,
                underBust: 88,
                waist: 72,
                lowerWaist: 69,
                circumference: 79,
                hips: 91,
                bra: '75C',
                recommended: 'S',
            },
            {
                id:1, 
                name: 'A',
                height: 156,
                weight: 44,
                shoulderWidth: '纖細身材體型扁身',
                upperBust: 34,
                underBust: 80,
                waist: 67,
                lowerWaist: 62,
                circumference: 72,
                hips: 84,
                bra: '70B',
                recommended: 'S',
            },
            {
                id:1, 
                name: 'B',
                height: 160,
                weight: 62,
                shoulderWidth: '體型結實臀圍較大大腿略粗',
                upperBust: 36.5,
                underBust: 89,
                waist: 74,
                lowerWaist: 69,
                circumference: 84,
                hips: 98,
                bra: '75C',
                recommended: 'L',
            },
            {
                id:1, 
                name: 'C',
                height: 163,
                weight: 58,
                shoulderWidth: '上身略扁身下身較圓潤',
                upperBust: 35.5,
                underBust: 87,
                waist: 74,
                lowerWaist: 71,
                circumference: 88,
                hips: 98,
                bra: '75B',
                recommended: 'M',
            },
        ]);
        const table3 = ref([
            {
                id: 1,
                height: 176,
                weight: 50,
                shoulderWidth: 49,
                bust: 77.5,
                waist: 59.5,
                hips: 86,
                size: 'S',
            }
        ])
        function closeModal(status: boolean) {
            modal.handleIsOpen(status);
        }
        function test() {
            if (allOpen) {
                activeTable.value = ['1','2','3'];
            }
        }

        return {
            isAccordion,
            allOpen,
            activeTable,
            table1,
            table2,
            table3,
            modal,

            closeModal,
            test
        }
    }
})