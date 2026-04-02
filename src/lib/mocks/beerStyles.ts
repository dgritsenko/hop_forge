// src/lib/mocks/beerStyles.ts

import { BeerStyle, BeerStyleData } from '@/types/beerConstructor';

export const beerStyles: BeerStyleData[] = [
    {
        id: 'lager',
        name: 'Лагер',
        description: 'Лёгкое, чистое, освежающее',
        color: '#f5d76e',
        colorDark: '#d4b84a',
        abv: 4.5,
        ibu: 15,
        basePrice: 350,
    },
    {
        id: 'ale',
        name: 'Эль',
        description: 'Фруктовое, насыщенное, тёплое',
        color: '#e8a838',
        colorDark: '#c98f2a',
        abv: 5.5,
        ibu: 25,
        basePrice: 400,
    },
    {
        id: 'ipa',
        name: 'IPA',
        description: 'Хмелевое, горькое, ароматное',
        color: '#d99a2a',
        colorDark: '#b87f1f',
        abv: 6.5,
        ibu: 55,
        basePrice: 450,
    },
    {
        id: 'stout',
        name: 'Стаут',
        description: 'Тёмное, кофейное, плотное',
        color: '#3d2817',
        colorDark: '#2a1a0f',
        abv: 6.0,
        ibu: 35,
        basePrice: 480,
    },
    {
        id: 'porter',
        name: 'Портер',
        description: 'Шоколадное, карамельное, мягкое',
        color: '#4a3423',
        colorDark: '#352418',
        abv: 5.5,
        ibu: 30,
        basePrice: 460,
    },
    {
        id: 'weissbier',
        name: 'Вайсбир',
        description: 'Пшеничное, банановое, лёгкое',
        color: '#f9e5a3',
        colorDark: '#e0c985',
        abv: 5.0,
        ibu: 12,
        basePrice: 420,
    },
];

export const getBeerStyle = (id: BeerStyle): BeerStyleData | undefined => {
    return beerStyles.find((style) => style.id === id);
};