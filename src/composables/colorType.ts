export function colorType(color: number) {
    switch (color) {
        case 1:
            return {
                img: 'https://pic.pzcdn.tw/pazzo/ProductColor/7aacb698-173a-4869-a225-ea2cd346cc08.jpg',
                color: '黑'
            } 
            break;
        case 2:
            return {
                img: 'https://pic.pzcdn.tw/pazzo/ProductColor/61d597bd-d16b-433c-a253-786ea857b0ae.jpg',
                color: '麻灰'
            }
            break;
        case 3:
            return {
                img: 'https://pic.pzcdn.tw/pazzo/ProductColor/bc0e8de5-2252-4377-90a8-80e155557e95.jpg',
                color: '鐵灰'
            }
            break;
    }
}