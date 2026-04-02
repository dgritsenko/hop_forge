'use client';

import { Ingredient } from '@/types/beerConstructor';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus } from 'lucide-react';

interface IngredientCardProps {
    ingredient: Ingredient;
    isSelected: boolean;
    quantity: number;
    onAdd: () => void;
    onRemove: () => void;
    onUpdateQuantity: (qty: number) => void;
}

export const IngredientCard = ({
    ingredient,
    isSelected,
    quantity,
    onAdd,
    onRemove,
    onUpdateQuantity,
}: IngredientCardProps) => {
    return (
        <Card
            className={`border-stone-200 transition-all duration-300 ${
                isSelected ? 'border-amber-500 bg-amber-50' : 'hover:border-amber-300'
            }`}
        >
            <CardContent className="p-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-4 h-4 rounded-full border border-stone-300"
                            style={{ backgroundColor: ingredient.color }}
                        />
                        <h4 className="text-sm font-semibold text-stone-800">{ingredient.name}</h4>
                    </div>
                    <span className="text-sm font-medium text-amber-600">{ingredient.price} ₽</span>
                </div>

                <p className="text-xs text-stone-500 mb-3 line-clamp-2">{ingredient.description}</p>

                {!isSelected ? (
                    <Button
                        onClick={onAdd}
                        size="sm"
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    >
                        Добавить
                    </Button>
                ) : (
                    <div className="flex items-center justify-between gap-2">
                        <Button
                            onClick={() => onUpdateQuantity(quantity - 1)}
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 border-stone-300"
                        >
                            <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-semibold text-stone-800 min-w-6 text-center">
                            {quantity}
                        </span>
                        <Button
                            onClick={() => onUpdateQuantity(quantity + 1)}
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 border-stone-300"
                            disabled={quantity >= 5}
                        >
                            <Plus className="w-3 h-3" />
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};