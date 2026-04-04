export interface Feature {
	id: number;
	title: string;
	description: string;
	icon: string;
}

export const features: Feature[] = [
    {
        id: 1,
        title: 'Визуальный конструктор',
        description: 'Создавай рецепт в удобном редакторе с расчётом параметров в реальном времени',
        icon: 'cpu',
    },
    {
        id: 2,
        title: 'Качественные ингредиенты',
        description: 'Только проверенные поставщики хмеля, солода и дрожжей',
        icon: 'leaf',
    },
    {
        id: 3,
        title: 'Доставка прямо до пункта выдачи ПИВА',
        description: 'Бережная доставка готового пива прямо рядом с вашим домом',
        icon: 'truck',
    },
];