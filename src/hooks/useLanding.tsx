'use client';

export interface BeerCard {
	id: number;
	name: string;
	style: string;
	abv: number;
	ibu: number;
	description: string;
	color: string;
}

export interface Feature {
	id: number;
	title: string;
	description: string;
	icon: string;
}

export function useLanding() {
	const beerCards: BeerCard[] = [
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

	const features: Feature[] = [
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
		{
			id: 4,
			title: 'Сохранение рецептов',
			description: 'Храни свои рецепты в профиле и делись с друзьями',
			icon: 'save',
		},
	];

	return { beerCards, features };
}