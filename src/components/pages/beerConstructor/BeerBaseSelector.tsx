'use client';

import { BeerStyle } from '@/types/beerConstructor';
import { beerStyles } from '@/lib/mocks/beerStyles';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BeerBaseSelectorProps {
    selectedStyle: BeerStyle | null;
    onSelectStyle: (style: BeerStyle) => void;
}

export const BeerBaseSelector = ({ selectedStyle, onSelectStyle }: BeerBaseSelectorProps) => {
    return (
        <Card className="border-stone-200">
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">
                    1. Выберите стиль пива
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {beerStyles.map((style) => (
                        <Button
                            key={style.id}
                            onClick={() => onSelectStyle(style.id)}
                            variant={selectedStyle === style.id ? 'default' : 'outline'}
                            className={`h-auto py-3 px-2 flex flex-col items-center gap-2 transition-all duration-300 ${
                                selectedStyle === style.id
                                    ? 'bg-amber-600 hover:bg-amber-700 border-amber-600'
                                    : 'border-stone-300 hover:border-amber-400'
                            }`}
                        >
                            <div
                                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                                style={{
                                    background: `linear-gradient(135deg, ${style.color}, ${style.colorDark})`,
                                }}
                            />
                            <span className="text-xs font-medium text-center">{style.name}</span>
                            <span className="text-xs text-stone-500">{style.abv}% · {style.ibu} IBU</span>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};