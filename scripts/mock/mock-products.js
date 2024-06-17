import product1_1x from '~/assets/images/products/shveller.jpg';
import product1_2x from '~/assets/images/products/shveller@2x.jpg';
import product2_1x from '~/assets/images/products/armatura.jpg';
import product2_2x from '~/assets/images/products/armatura@2x.jpg';
import product3_1x from '~/assets/images/products/krug.jpg';
import product3_2x from '~/assets/images/products/krug@2x.jpg';
import product4_1x from '~/assets/images/products/ugolok.jpg';
import product4_2x from '~/assets/images/products/ugolok@2x.jpg';

export const products = [
    {
        image: {
            x1: product1_1x,
            x2: product1_2x,
        },
        name: 'Швеллер – ГОСТ 8240-97', 
        sizes: '№ 5У, № 6,5У, ..., № 30',
        price: '101 000', 
        url: '/product1',
    },
    {
        image: {
            x1: product2_1x,
            x2: product2_2x,
        },
        name: 'Арматура А3 (А 400) ГОСТ 5781-82', 
        sizes: 'ф 6,0, Ф 8,0, ..., Ф 28',
        price: '83 000', 
        url: '/product2',
    },
    {
        image: {
            x1: product3_1x,
            x2: product3_2x,
        },
        name: 'Круг А1  ГОСТ 2590-88', 
        sizes: 'Ф 6,0, Ф 8,0, ..., Ф 130',
        price: '83 000', 
        url: '/product3',
    },
    {
        image: {
            x1: product4_1x,
            x2: product4_2x,
        },
        name: 'Уголок-ГОСТ 8509-93', 
        sizes: '160х10, 140х10, ..., 25х4',
        price: '86 000', 
        url: '/product4',
    },
    {
        image: {
            x1: product1_1x,
            x2: product1_2x,
        },
        name: 'Швеллер – ГОСТ 8240-97', 
        sizes: '№ 5У, № 6,5У, ..., № 30',
        price: '101 000', 
        url: '/product5',
    },
    {
        image: {
            x1: product2_1x,
            x2: product2_2x,
        },
        name: 'Арматура А3 (А 400) ГОСТ 5781-82', 
        sizes: 'ф 6,0, Ф 8,0, ..., Ф 28',
        price: '83 000', 
        url: '/product6',
    },
    {
        image: {
            x1: product3_1x,
            x2: product3_2x,
        },
        name: 'Круг А1  ГОСТ 2590-88', 
        sizes: 'Ф 6,0, Ф 8,0, ..., Ф 130',
        price: '83 000', 
        url: '/product7',
    },
    {
        image: {
            x1: product4_1x,
            x2: product4_2x,
        },
        name: 'Уголок-ГОСТ 8509-93', 
        sizes: '160х10, 140х10, ..., 25х4',
        price: '86 000', 
        url: '/product8',
    },
    
]

let allProducts = new Array();

for (let i = 0; i < 3; i++) allProducts.push(...products);

export { allProducts };