export interface BeerCard {
    id: number;
    name: string;
    style: string;
    abv: number;
    ibu: number;
    description: string;
    color: string;
}

export const beerCards: BeerCard[] = [
    {
        id: 1,
        name: 'Bable beer',
        style: 'IPA с добавками',
        abv: 5.2,
        ibu: 45,
        description: 'Крафтовое IPA с тапиоковыми шариками и нотами манго',
        color: 'from-amber-400 to-orange-500',
    },
    {
        id: 2,
        name: 'Шоколадный стаут',
        style: 'Стаут',
        abv: 6.8,
        ibu: 30,
        description: 'Плотный стаут с какао-бобами и ванилью',
        color: 'from-stone-700 to-stone-900',
    },
    {
        id: 3,
        name: 'Цитрусовый лагер',
        style: 'Лагер',
        abv: 4.5,
        ibu: 20,
        description: 'Лёгкий лагер с цедрой апельсина и лайма',
        color: 'from-yellow-400 to-amber-500',
    },
    {
        id: 4,
        name: 'Ягодное пшено',
        style: 'Витбир',
        abv: 5.0,
        ibu: 15,
        description: 'Пшеничное пиво с малиной и клубникой',
        color: 'from-pink-400 to-rose-500',
    },
    {
        id: 5,
        name: 'Кофейный портер',
        style: 'Портер',
        abv: 6.2,
        ibu: 35,
        description: 'Тёмный портер с эфиопским кофе',
        color: 'from-amber-800 to-stone-800',
    },
    {
        id: 6,
        name: 'Жгучий эль',
        style: 'Эль',
        abv: 5.5,
        ibu: 25,
        description: 'Пряный эль с корицей, гвоздикой и мускатом',
        color: 'from-orange-500 to-red-600',
    },
];