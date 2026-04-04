'use client';

import { BeerVisualizer } from '@/components/pages/beerConstructor/BeerVisualizer';
import { BeerBaseSelector } from '@/components/pages/beerConstructor/BeerBaseSelector';
import { BeerVolumeSelector } from '@/components/pages/beerConstructor/BeerVolumeSelector';
import { IngredientCatalog } from '@/components/pages/beerConstructor/IngredientCatalog';
import { ConstructorSummary } from '@/components/pages/beerConstructor/ConstructorSummary';
import { useBeerConstructor } from '@/hooks/useBeerConstructor';

export default function BeerConstructorPage() {
    const {
        selectedStyle,
        volume,
        selectedIngredients,
        recipeName,
        totalPrice,
        estimatedAbv,
        estimatedIbu,
        totalIngredients,
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
    } = useBeerConstructor();

    return (
        <>        
            <div className="container mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-4 text-center">
                    Конструктор пива
                </h1>
                <p className="text-stone-600 text-center max-w-2xl mx-auto mb-8">
                    Создайте свой уникальный рецепт крафтового пива
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <BeerBaseSelector
                            selectedStyle={selectedStyle}
                            onSelectStyle={setBeerStyle}
                        />

                        <BeerVolumeSelector volume={volume} onSelectVolume={setVolume} />

                        <IngredientCatalog
                            onAddIngredient={addIngredient}
                            onRemoveIngredient={removeIngredient}
                            isIngredientSelected={isIngredientSelected}
                            getIngredientQuantity={getIngredientQuantity}
                            onUpdateQuantity={updateIngredientQuantity}
                        />
                    </div>

                    {/* Общий sticky-контейнер для визуализатора + итога */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Визуализатор с тёмным фоном */}
                            <div className="bg-stone-800 rounded-lg border border-stone-700 p-8 flex items-center justify-center min-h-[400px]">
                                <BeerVisualizer
                                    selectedStyle={selectedStyle}
                                    volume={volume}
                                    selectedIngredients={selectedIngredients}
                                />
                            </div>

                            <ConstructorSummary
                                recipeName={recipeName}
                                onRecipeNameChange={setRecipeName}
                                totalPrice={totalPrice}
                                estimatedAbv={estimatedAbv}
                                estimatedIbu={estimatedIbu}
                                totalIngredients={totalIngredients}
                                volume={volume}
                                isStyleSelected={!!selectedStyle}
                                onAddToCart={addToCart}
                                onSaveRecipe={saveRecipe}
                                onClear={clearConstructor}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}