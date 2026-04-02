'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

interface ConstructorSummaryProps {
    recipeName: string;
    onRecipeNameChange: (name: string) => void;
    totalPrice: number;
    estimatedAbv: number;
    estimatedIbu: number;
    totalIngredients: number;
    volume: number;
    isStyleSelected: boolean;
    onAddToCart: () => void;
    onSaveRecipe: () => void;
    onClear: () => void;
    isSubmitting?: boolean;
}

export const ConstructorSummary = ({
    recipeName,
    onRecipeNameChange,
    totalPrice,
    estimatedAbv,
    estimatedIbu,
    totalIngredients,
    volume,
    isStyleSelected,
    onAddToCart,
    onSaveRecipe,
    onClear,
    isSubmitting = false,
}: ConstructorSummaryProps) => {
    return (
        <Card className="border-stone-200 bg-stone-50 sticky top-24">
            <CardContent className="p-4 space-y-4">
                <h3 className="text-lg font-semibold text-stone-800">Итого</h3>

                <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-stone-600">
                        <span>Объём</span>
                        <span>{volume} мл</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                        <span>Ингредиенты</span>
                        <span>{totalIngredients} порц.</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                        <span>Крепость (≈)</span>
                        <span>{estimatedAbv}% ABV</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                        <span>Горечь (≈)</span>
                        <span>{estimatedIbu} IBU</span>
                    </div>

                    <div className="border-t border-stone-200 pt-2 flex justify-between font-semibold text-stone-800">
                        <span>К оплате</span>
                        <span className="text-amber-600 text-xl">{totalPrice} ₽</span>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs text-stone-600" htmlFor="recipeName">
                        Название рецепта
                    </label>
                    <Input
                        id="recipeName"
                        value={recipeName}
                        onChange={(e) => onRecipeNameChange(e.target.value)}
                        placeholder="Моё уникальное пиво"
                        className="border-stone-300"
                    />
                </div>

                <div className="space-y-2">
                    <Button
                        onClick={onAddToCart}
                        disabled={!isStyleSelected || isSubmitting}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Добавление...
                            </>
                        ) : (
                            'В корзину'
                        )}
                    </Button>

                    <Button
                        onClick={onSaveRecipe}
                        disabled={!isStyleSelected || !recipeName.trim()}
                        variant="outline"
                        className="w-full border-stone-300"
                    >
                        Сохранить рецепт
                    </Button>

                    <Button
                        onClick={onClear}
                        variant="ghost"
                        className="w-full text-stone-500 hover:text-red-500"
                    >
                        Очистить всё
                    </Button>
                </div>

                {!isStyleSelected && (
                    <p className="text-xs text-amber-600 text-center">
                        Выберите стиль пива для начала
                    </p>
                )}
            </CardContent>
        </Card>
    );
};