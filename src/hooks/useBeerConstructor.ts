// src/hooks/useBeerConstructor.ts

'use client';

import { useState, useCallback, useMemo } from 'react';
import {
    BeerStyle,
    ConstructorState,
    ConstructorCalculations,
    SelectedIngredient,
    UseBeerConstructorReturn,
    ingredientCategoryMap,
} from '@/types/beerConstructor';
import { beerStyles, getBeerStyle } from '@/lib/mocks/beerStyles';
import { ingredients, getIngredient } from '@/lib/mocks/ingredients';
import { useCart } from '@/hooks/useCart';
import { CustomRecipe } from '@/types/beerItem';

const VOLUME_PRICES: Record<number, number> = {
    200: 0.5,
    400: 0.8,
    500: 1,
};

const MAX_INGREDIENTS = 5;

export const useBeerConstructor = (): UseBeerConstructorReturn => {
    const API_BC = 'https:/SERVER/api/auth' 

    const { addItemToCart } = useCart();

    const [state, setState] = useState<ConstructorState>({
        selectedStyle: null,
        volume: 500,
        selectedIngredients: [],
        recipeName: '',
    });

    const setBeerStyle = useCallback((style: BeerStyle) => {
        setState((prev) => ({ ...prev, selectedStyle: style }));
    }, []);

    const setVolume = useCallback((volume: number) => {
        setState((prev) => ({ ...prev, volume }));
    }, []);

    const setRecipeName = useCallback((name: string) => {
        setState((prev) => ({ ...prev, recipeName: name }));
    }, []);

    const addIngredient = useCallback((ingredientId: string) => {
        setState((prev) => {
            const existing = prev.selectedIngredients.find(
                (item) => item.ingredientId === ingredientId
            );

            if (existing) {
                if (existing.quantity >= 5) return prev;
                return {
                    ...prev,
                    selectedIngredients: prev.selectedIngredients.map((item) =>
                        item.ingredientId === ingredientId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            if (prev.selectedIngredients.length >= MAX_INGREDIENTS) return prev;

            return {
                ...prev,
                selectedIngredients: [...prev.selectedIngredients, { ingredientId, quantity: 1 }],
            };
        });
    }, []);

    const removeIngredient = useCallback((ingredientId: string) => {
        setState((prev) => ({
            ...prev,
            selectedIngredients: prev.selectedIngredients.filter(
                (item) => item.ingredientId !== ingredientId
            ),
        }));
    }, []);

    const updateIngredientQuantity = useCallback(
        (ingredientId: string, quantity: number) => {
            if (quantity <= 0) {
                removeIngredient(ingredientId);
                return;
            }
            if (quantity > 5) return;

            setState((prev) => ({
                ...prev,
                selectedIngredients: prev.selectedIngredients.map((item) =>
                    item.ingredientId === ingredientId ? { ...item, quantity } : item
                ),
            }));
        },
        [removeIngredient]
    );

    const clearConstructor = useCallback(() => {
        setState({
            selectedStyle: null,
            volume: 500,
            selectedIngredients: [],
            recipeName: '',
        });
    }, []);


    const calculations = useMemo<ConstructorCalculations>(() => {
        const style = state.selectedStyle ? getBeerStyle(state.selectedStyle) : null;
        const volumeMultiplier = VOLUME_PRICES[state.volume] || 1;

        const basePrice = style ? style.basePrice * volumeMultiplier : 0;

        const ingredientsPrice = state.selectedIngredients.reduce((sum, item) => {
            const ing = getIngredient(item.ingredientId);
            return sum + (ing?.price || 0) * item.quantity;
        }, 0);

        const totalPrice = Math.round(basePrice + ingredientsPrice);

        const baseAbv = style ? style.abv : 0;
        const ingredientAbvModifier = state.selectedIngredients.reduce((sum, item) => {
            const ing = getIngredient(item.ingredientId);
            if (ing?.category === 'bubble-juice' || ing?.category === 'sweet') {
                return sum + 0.3 * item.quantity;
            }
            return sum;
        }, 0);
        const estimatedAbv = parseFloat((baseAbv + ingredientAbvModifier).toFixed(1));

        const baseIbu = style ? style.ibu : 0;
        const ingredientIbuModifier = state.selectedIngredients.reduce((sum, item) => {
            const ing = getIngredient(item.ingredientId);
            if (ing?.category === 'citrus') {
                return sum + 2 * item.quantity;
            }
            if (ing?.category === 'spice') {
                return sum + 1 * item.quantity;
            }
            return sum;
        }, 0);
        const estimatedIbu = baseIbu + ingredientIbuModifier;

        const totalIngredients = state.selectedIngredients.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        return {
            totalPrice,
            estimatedAbv,
            estimatedIbu,
            totalIngredients,
        };
    }, [state.selectedStyle, state.volume, state.selectedIngredients]);


    const addToCart = useCallback(() => {
        const style = getBeerStyle(state.selectedStyle!);
        if (!style) return;

        const customRecipe: CustomRecipe = {
            id: `custom-${Date.now()}`,
            type: 'custom' as const,
            recipeId: `recipe-${Date.now()}`,
            title: state.recipeName || `Кастомное ${style.name}`,
            description: `Индивидуальный рецепт на основе ${style.name}`,
            imageUrl: '',
            baseStyle: style.name,
            abv: calculations.estimatedAbv,
            ibu: calculations.estimatedIbu,
            volume: state.volume,
            isAvailable: true,
            createdAt: new Date().toISOString(),
            price: calculations.totalPrice,
            customIngredients: state.selectedIngredients.map((item) => {
                const ing = getIngredient(item.ingredientId);
                return {
                    name: ing?.name || '',
                    amount: item.quantity,
                    unit: 'порция',
                    price: ing?.price || 0,
                    category: ing ? ingredientCategoryMap[ing.category] : 'additive',
                };
            }),
        };

        addItemToCart(customRecipe);
    }, [state, calculations, addItemToCart]);

    const saveRecipe = useCallback(() => {
        console.log('Сохранение рецепта:', state);
    }, [state]);

    const isIngredientSelected = useCallback(
        (ingredientId: string) => {
            return state.selectedIngredients.some((item) => item.ingredientId === ingredientId);
        },
        [state.selectedIngredients]
    );

    const getIngredientQuantity = useCallback(
        (ingredientId: string) => {
            const item = state.selectedIngredients.find((item) => item.ingredientId === ingredientId);
            return item ? item.quantity : 0;
        },
        [state.selectedIngredients]
    );

    return {
        ...state,
        ...calculations,
        setBeerStyle,
        setVolume,
        setRecipeName,
        addIngredient,
        removeIngredient,
        updateIngredientQuantity,
        clearConstructor,
        addToCart,
        saveRecipe,
        isIngredientSelected,
        getIngredientQuantity,
    };
};