// src/lib/mocks/ingredients.ts

import { Ingredient, IngredientCategory } from '@/types/beerConstructor';

export const ingredients: Ingredient[] = [
    {
        id: 'bubble-taro',
        name: 'Таро бабл джус',
        category: 'bubble-juice',
        description: 'Сладкий сироп со вкусом таро с нотками ванили и ореха',
        price: 120,
        color: '#9b7ebd',
        visualType: 'bubble',
    },
    {
        id: 'bubble-mango',
        name: 'Манго бабл джус',
        category: 'bubble-juice',
        description: 'Тропический концентрат манго с характерной сладостью bubble tea',
        price: 110,
        color: '#ffb347',
        visualType: 'bubble',
    },
    {
        id: 'bubble-brownsugar',
        name: 'Коричневый сахар бабл джус',
        category: 'bubble-juice',
        description: 'Карамельный сироп с глубоким вкусом жженого сахара и патоки',
        price: 90,
        color: '#8b5a2b',
        visualType: 'bubble',
    },
    {
        id: 'bubble-matcha',
        name: 'Матча бабл джус',
        category: 'bubble-juice',
        description: 'Зеленый чай матча с легкой горчинкой и травянистым оттенком',
        price: 130,
        color: '#7cb342',
        visualType: 'bubble',
    },
    {
        id: 'lemon-zest',
        name: 'Лимонная цедра',
        category: 'citrus',
        description: 'Свежая цедра лимона для яркой кислотности',
        price: 40,
        color: '#fdd835',
        visualType: 'slice',
    },
    {
        id: 'orange-peel',
        name: 'Апельсиновая корка',
        category: 'citrus',
        description: 'Сушеная апельсиновая корка с легкой горчинкой',
        price: 45,
        color: '#ff8a65',
        visualType: 'slice',
    },
    {
        id: 'chili-pepper',
        name: 'Перец чили',
        category: 'spice',
        description: 'Острый перец для согревающего эффекта',
        price: 50,
        color: '#c62828',
        visualType: 'piece',
    },
    {
        id: 'black-pepper',
        name: 'Черный перец',
        category: 'spice',
        description: 'Горошки черного перца с древесно-пряной нотой',
        price: 35,
        color: '#212121',
        visualType: 'grain',
    },
    {
        id: 'vanilla-bean',
        name: 'Ванильный стручок',
        category: 'sweet',
        description: 'Натуральная ваниль для сливочной сладости',
        price: 150,
        color: '#5d4037',
        visualType: 'piece',
    },
    {
        id: 'coffee-beans',
        name: 'Кофейные зерна',
        category: 'roasted',
        description: 'Обжаренные зерна для глубокого кофейного профиля',
        price: 80,
        color: '#5d4037',
        visualType: 'grain',
    },
    {
        id: 'cacao-nibs',
        name: 'Какао бобы',
        category: 'roasted',
        description: 'Обжаренные какао бобы для шоколадных нот',
        price: 95,
        color: '#3e2723',
        visualType: 'grain',
    },
    {
        id: 'honey',
        name: 'Мёд',
        category: 'sweet',
        description: 'Натуральный мёд для цветочной сладости',
        price: 100,
        color: '#ffc107',
        visualType: 'bubble',
    },
    {
        id: 'passion-fruit',
        name: 'Маракуйя пюре',
        category: 'fruit',
        description: 'Тропическое пюре с яркой кислотностью',
        price: 110,
        color: '#ff6f00',
        visualType: 'piece',
    },
    {
        id: 'ginger',
        name: 'Свежий имбирь',
        category: 'spice',
        description: 'Корень имбиря с острой согревающей пряностью',
        price: 40,
        color: '#d4a574',
        visualType: 'piece',
    },
    {
        id: 'coriander',
        name: 'Кориандр',
        category: 'spice',
        description: 'Семена кориандра с лимонно-пряным профилем',
        price: 30,
        color: '#a1887f',
        visualType: 'grain',
    },
];

export const getIngredient = (id: string): Ingredient | undefined => {
    return ingredients.find((ing) => ing.id === id);
};

export const getIngredientsByCategory = (category: IngredientCategory): Ingredient[] => {
    return ingredients.filter((ing) => ing.category === category);
};

export const ingredientCategories: { id: IngredientCategory; name: string }[] = [
    { id: 'bubble-juice', name: 'Бабл джусы' },
    { id: 'citrus', name: 'Цитрусовые' },
    { id: 'spice', name: 'Специи' },
    { id: 'sweet', name: 'Сладкое' },
    { id: 'roasted', name: 'Обжаренное' },
    { id: 'fruit', name: 'Фрукты' },
];