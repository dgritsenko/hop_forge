'use client';

import { useState } from 'react';
import { IngredientCategory } from '@/types/beerConstructor';
import { ingredients, ingredientCategories } from '@/lib/mocks/ingredients';
import { IngredientCard } from './IngredientCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface IngredientCatalogProps {
    onAddIngredient: (id: string) => void;
    onRemoveIngredient: (id: string) => void;
    isIngredientSelected: (id: string) => boolean;
    getIngredientQuantity: (id: string) => number;
    onUpdateQuantity: (id: string, qty: number) => void;
}

export const IngredientCatalog = ({
    onAddIngredient,
    onRemoveIngredient,
    isIngredientSelected,
    getIngredientQuantity,
    onUpdateQuantity,
}: IngredientCatalogProps) => {
    const [activeCategory, setActiveCategory] = useState<IngredientCategory | 'all'>('all');

    const filteredIngredients =
        activeCategory === 'all'
            ? ingredients
            : ingredients.filter((ing) => ing.category === activeCategory);

    return (
        <Card className="border-stone-200">
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">
                    3. Добавьте ингредиенты (макс. 5 типов)
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    <Button
                        variant={activeCategory === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveCategory('all')}
                        className={activeCategory === 'all' ? 'bg-amber-600' : 'border-stone-300'}
                    >
                        Все
                    </Button>
                    {ingredientCategories.map((cat) => (
                        <Button
                            key={cat.id}
                            variant={activeCategory === cat.id ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setActiveCategory(cat.id)}
                            className={activeCategory === cat.id ? 'bg-amber-600' : 'border-stone-300'}
                        >
                            {cat.name}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredIngredients.map((ingredient) => (
                        <IngredientCard
                            key={ingredient.id}
                            ingredient={ingredient}
                            isSelected={isIngredientSelected(ingredient.id)}
                            quantity={getIngredientQuantity(ingredient.id)}
                            onAdd={() => onAddIngredient(ingredient.id)}
                            onRemove={() => onRemoveIngredient(ingredient.id)}
                            onUpdateQuantity={(qty) => onUpdateQuantity(ingredient.id, qty)}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};