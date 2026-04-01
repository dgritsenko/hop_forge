import { CatalogItem, CatalogTheme } from '@/types/beerItem';

export const catalogMocks: Record<CatalogTheme, CatalogItem[]> = {
    'hot-deals': [
        {
            id: 'hd-001',
            type: 'catalog',
            category: 'hot-deals',
            title: 'Янтарный Шторм',
            description: 'Насыщенный красный эль с карамельными нотами и лёгкой горчинкой',
            imageUrl: '/assets/img/catalog/amber-storm.jpg',
            baseStyle: 'Red Ale',
            abv: 5.8,
            ibu: 35,
            volume: 500,
            price: 450,
            isAvailable: true,
            createdAt: '2025-01-15T10:00:00Z',
            ingredients: [
                { name: 'Солод Crystal', amount: 2.5, unit: 'кг' },
                { name: 'Хмель Cascade', amount: 50, unit: 'г' },
                { name: 'Дрожжи US-05', amount: 1, unit: 'уп' },
            ],
        },
        {
            id: 'hd-002',
            type: 'catalog',
            category: 'hot-deals',
            title: 'Огненный Закат',
            description: 'Пряный стаут с добавлением корицы и апельсиновой цедры',
            imageUrl: '/assets/img/catalog/fire-sunset.jpg',
            baseStyle: 'Stout',
            abv: 6.2,
            ibu: 40,
            volume: 500,
            price: 520,
            isAvailable: true,
            createdAt: '2025-01-20T14:30:00Z',
            ingredients: [
                { name: 'Солод Chocolate', amount: 3, unit: 'кг' },
                { name: 'Корица молотая', amount: 10, unit: 'г' },
                { name: 'Апельсиновая цедра', amount: 20, unit: 'г' },
            ],
        },
    ],

    'new-arrivals': [
        {
            id: 'na-001',
            type: 'catalog',
            category: 'new-arrivals',
            title: 'Тропический Взрыв',
            description: 'Сочный IPA с хмелями Citra и Mosaic, ноты манго и маракуйи',
            imageUrl: '/assets/img/catalog/tropical-explosion.jpg',
            baseStyle: 'IPA',
            abv: 6.5,
            ibu: 55,
            volume: 500,
            price: 590,
            isAvailable: true,
            createdAt: '2025-02-01T09:00:00Z',
            ingredients: [
                { name: 'Солод Pale Ale', amount: 4, unit: 'кг' },
                { name: 'Хмель Citra', amount: 80, unit: 'г' },
                { name: 'Хмель Mosaic', amount: 60, unit: 'г' },
            ],
        },
        {
            id: 'na-002',
            type: 'catalog',
            category: 'new-arrivals',
            title: 'Северное Сияние',
            description: 'Лёгкий лагер с чистым вкусом и хрустящей финишной горечью',
            imageUrl: '/assets/img/catalog/northern-lights.jpg',
            baseStyle: 'Lager',
            abv: 4.8,
            ibu: 22,
            volume: 500,
            price: 380,
            isAvailable: true,
            createdAt: '2025-02-05T11:00:00Z',
            ingredients: [
                { name: 'Солод Pilsner', amount: 3.5, unit: 'кг' },
                { name: 'Хмель Saaz', amount: 40, unit: 'г' },
                { name: 'Дрожжи Lager', amount: 1, unit: 'уп' },
            ],
        },
    ],

    'best-value': [
        {
            id: 'bv-001',
            type: 'catalog',
            category: 'best-value',
            title: 'Классический Портер',
            description: 'Тёмный портер с кофейными оттенками и мягкой текстурой',
            imageUrl: '/assets/img/catalog/classic-porter.jpg',
            baseStyle: 'Porter',
            abv: 5.5,
            ibu: 30,
            volume: 500,
            price: 420,
            isAvailable: true,
            createdAt: '2025-01-10T08:00:00Z',
            ingredients: [
                { name: 'Солод Maris Otter', amount: 3.8, unit: 'кг' },
                { name: 'Солод Roasted', amount: 0.5, unit: 'кг' },
                { name: 'Хмель Fuggles', amount: 45, unit: 'г' },
            ],
        },
        {
            id: 'bv-002',
            type: 'catalog',
            category: 'best-value',
            title: 'Пшеничное Облако',
            description: 'Нефильтрованное пшеничное пиво с банановыми и гвоздичными нотами',
            imageUrl: '/assets/img/catalog/wheat-cloud.jpg',
            baseStyle: 'Weissbier',
            abv: 5.2,
            ibu: 15,
            volume: 500,
            price: 400,
            isAvailable: true,
            createdAt: '2025-01-12T10:30:00Z',
            ingredients: [
                { name: 'Солод Wheat', amount: 3, unit: 'кг' },
                { name: 'Солод Pilsner', amount: 2, unit: 'кг' },
                { name: 'Дрожжи Weizen', amount: 1, unit: 'уп' },
            ],
        },
    ],

    'unique-experience': [
        {
            id: 'ue-001',
            type: 'catalog',
            category: 'unique-experience',
            title: 'Дымный Феникс',
            description: 'Копчёный раухбир с интенсивным ароматом бука и дымной сладостью',
            imageUrl: '/assets/img/catalog/smoky-phoenix.jpg',
            baseStyle: 'Rauchbier',
            abv: 6.0,
            ibu: 28,
            volume: 500,
            price: 650,
            isAvailable: true,
            createdAt: '2025-01-25T16:00:00Z',
            ingredients: [
                { name: 'Солод Smoked', amount: 4.5, unit: 'кг' },
                { name: 'Хмель Hallertau', amount: 35, unit: 'г' },
                { name: 'Дрожжи Lager', amount: 1, unit: 'уп' },
            ],
        },
        {
            id: 'ue-002',
            type: 'catalog',
            category: 'unique-experience',
            title: 'Кислый Бархат',
            description: 'Берлинский вайсс с добавлением малины и мягкой кислотностью',
            imageUrl: '/assets/img/catalog/sour-velvet.jpg',
            baseStyle: 'Berliner Weisse',
            abv: 3.8,
            ibu: 8,
            volume: 500,
            price: 550,
            isAvailable: true,
            createdAt: '2025-01-28T13:00:00Z',
            ingredients: [
                { name: 'Солод Wheat', amount: 2.5, unit: 'кг' },
                { name: 'Солод Pilsner', amount: 1.5, unit: 'кг' },
                { name: 'Малина свежая', amount: 200, unit: 'г' },
                { name: 'Лактобактерии', amount: 1, unit: 'уп' },
            ],
        },
    ],
};

export const getCatalogSections = () => {
    return Object.entries(catalogMocks).map(([theme, items]) => ({
        id: theme as CatalogTheme,
        title: getThemeTitle(theme as CatalogTheme),
        description: getThemeDescription(theme as CatalogTheme),
        items,
    }));
};

const getThemeTitle = (theme: CatalogTheme): string => {
    const titles: Record<CatalogTheme, string> = {
        'hot-deals': 'Горячая акция',
        'new-arrivals': 'Новинки',
        'best-value': 'Выгодно',
        'unique-experience': 'Уникальный опыт',
    };
    return titles[theme];
};

const getThemeDescription = (theme: CatalogTheme): string => {
    const descriptions: Record<CatalogTheme, string> = {
        'hot-deals': 'Лучшие предложения этой недели со скидками до 30%',
        'new-arrivals': 'Свежие рецепты от наших пивоваров',
        'best-value': 'Оптимальное соотношение цены и качества',
        'unique-experience': 'Эксклюзивные сорта для настоящих ценителей',
    };
    return descriptions[theme];
};