'use client';

import { CatalogItem } from '@/types/beerItem';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Minus, Plus } from 'lucide-react';

interface CatalogCardProps {
    item: CatalogItem;
}

export const CatalogCard = ({ item }: CatalogCardProps) => {
    const { addItemToCart, decrementItemQuantity, incrementItemQuantity, isInCart, getItemQuantity } = useCart();
    const inCart = isInCart(item.id);
    const quantity = getItemQuantity(item.id);

    const handleAddToCart = () => {
        addItemToCart(item);
    };

    const handleIncrement = () => {
        incrementItemQuantity(item.id);
    };

    const handleDecrement = () => {
        decrementItemQuantity(item.id);
    };

    const getGradientColor = (style: string) => {
        const gradients: Record<string, string> = {
            'IPA': 'from-amber-400 to-orange-500',
            'Lager': 'from-yellow-300 to-amber-400',
            'Stout': 'from-stone-700 to-stone-900',
            'Porter': 'from-amber-800 to-stone-800',
            'Red Ale': 'from-red-600 to-amber-700',
            'Weissbier': 'from-yellow-200 to-amber-300',
            'Rauchbier': 'from-stone-600 to-stone-800',
            'Berliner Weisse': 'from-pink-300 to-rose-400',
        };
        return gradients[style] || 'from-amber-500 to-amber-700';
    };

    return (
        <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] bg-white border-stone-200 h-full flex flex-col">
            <CardHeader className="p-0">
                <div
                    className={`relative h-48 w-full bg-gradient-to-br ${getGradientColor(item.baseStyle)} flex items-center justify-center`}
                >
                    <span className="text-white font-semibold text-lg text-center px-4 drop-shadow-md">
                        {item.baseStyle}
                    </span>
                    {!item.isAvailable && (
                        <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-stone-200 font-semibold text-sm bg-stone-800/80 px-3 py-1.5 rounded-full">
                                Нет в наличии
                            </span>
                        </div>
                    )}
                </div>
            </CardHeader>

            <CardContent className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold text-stone-800 text-center flex-1">
                            {item.title}
                        </h3>
                    </div>

                    <p className="text-sm text-stone-600 text-center line-clamp-2 min-h-[2.5rem]">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-stone-500">
                        <span className="bg-stone-100 px-2 py-1 rounded font-medium">
                            {item.baseStyle}
                        </span>
                        <span className="bg-stone-100 px-2 py-1 rounded font-medium">
                            {item.abv}% ABV
                        </span>
                        {item.ibu && (
                            <span className="bg-stone-100 px-2 py-1 rounded font-medium">
                                {item.ibu} IBU
                            </span>
                        )}
                        <span className="bg-stone-100 px-2 py-1 rounded font-medium">
                            {item.volume} мл
                        </span>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <span className="text-2xl font-bold text-amber-600">
                        {item.price} ₽
                    </span>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                {!inCart ? (
                    <Button
                        onClick={handleAddToCart}
                        disabled={!item.isAvailable}
                        className="w-full bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300 font-medium"
                    >
                        В корзину
                    </Button>
                ) : (
                    <div className="flex items-center justify-center w-full gap-3">
                        <Button
                            onClick={handleDecrement}
                            variant="outline"
                            size="icon"
                            className="w-10 h-10 border-amber-600 text-amber-600 hover:bg-amber-50 hover:scale-105 transition-all duration-200"
                        >
                            <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-xl font-semibold text-stone-800 min-w-[3rem] text-center">
                            {quantity}
                        </span>
                        <Button
                            onClick={handleIncrement}
                            variant="outline"
                            size="icon"
                            className="w-10 h-10 border-amber-600 text-amber-600 hover:bg-amber-50 hover:scale-105 transition-all duration-200"
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};