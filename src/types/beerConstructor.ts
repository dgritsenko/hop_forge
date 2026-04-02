// src/types/beerConstructor.ts

import { CustomIngredient } from './beerItem';

export type BeerStyle = 'lager' | 'ale' | 'ipa' | 'stout' | 'porter' | 'weissbier';

export interface BeerStyleData {
    id: BeerStyle;
    name: string;
    description: string;
    color: string;
    colorDark: string;
    abv: number;
    ibu: number;
    basePrice: number;
}

export type IngredientCategory = 'bubble-juice' | 'citrus' | 'spice' | 'sweet' | 'roasted' | 'fruit';

// Маппинг категорий конструктора на категории корзины
export const ingredientCategoryMap: Record<IngredientCategory, CustomIngredient['category']> = {
    'bubble-juice': 'additive',
    'citrus': 'additive',
    'spice': 'additive',
    'sweet': 'additive',
    'roasted': 'malt',
    'fruit': 'additive',
};

export interface Ingredient {
    id: string;
    name: string;
    category: IngredientCategory;
    description: string;
    price: number;
    color: string;
    visualType: 'bubble' | 'piece' | 'grain' | 'slice';
}

export interface SelectedIngredient {
    ingredientId: string;
    quantity: number;
}

export interface ConstructorState {
    selectedStyle: BeerStyle | null;
    volume: number;
    selectedIngredients: SelectedIngredient[];
    recipeName: string;
}

export interface ConstructorCalculations {
    totalPrice: number;
    estimatedAbv: number;
    estimatedIbu: number;
    totalIngredients: number;
}

export interface UseBeerConstructorReturn extends ConstructorState, ConstructorCalculations {
    setBeerStyle: (style: BeerStyle) => void;
    setVolume: (volume: number) => void;
    setRecipeName: (name: string) => void;
    addIngredient: (ingredientId: string) => void;
    removeIngredient: (ingredientId: string) => void;
    updateIngredientQuantity: (ingredientId: string, quantity: number) => void;
    clearConstructor: () => void;
    addToCart: () => void;
    saveRecipe: () => void;
    isIngredientSelected: (ingredientId: string) => boolean;
    getIngredientQuantity: (ingredientId: string) => number;
}