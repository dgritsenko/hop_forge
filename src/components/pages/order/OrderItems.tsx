'use client';

import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2 } from 'lucide-react';

export const OrderItems = () => {
    const { items, incrementItemQuantity, decrementItemQuantity, removeItemFromCart } = useCart();

    if (items.length === 0) {
        return (
            <Card className="border-stone-200 bg-stone-50">
                <CardContent className="p-6 text-center">
                    <p className="text-stone-600">Корзина пуста</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-stone-200">
            <CardContent className="p-4 space-y-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">
                    Товары в заказе ({items.reduce((sum, item) => sum + item.quantity, 0)})
                </h3>

                <div className="space-y-3">
                    {items.map((cartItem) => (
                        <div
                            key={cartItem.item.id}
                            className="flex items-center gap-4 p-3 bg-stone-50 rounded-lg border border-stone-200"
                        >
                            <div
                                className={`w-16 h-16 rounded-md bg-gradient-to-br flex items-center justify-center flex-shrink-0 ${
                                    cartItem.item.baseStyle === 'IPA'
                                        ? 'from-amber-400 to-orange-500'
                                        : cartItem.item.baseStyle === 'Lager'
                                        ? 'from-yellow-300 to-amber-400'
                                        : cartItem.item.baseStyle === 'Stout'
                                        ? 'from-stone-700 to-stone-900'
                                        : 'from-amber-500 to-amber-700'
                                }`}
                            >
                                <span className="text-white text-xs font-medium text-center px-1">
                                    {cartItem.item.baseStyle}
                                </span>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-stone-800 truncate">
                                    {cartItem.item.title}
                                </h4>
                                <p className="text-xs text-stone-500">
                                    {cartItem.item.abv}% ABV · {cartItem.item.volume} мл
                                </p>
                                <p className="text-sm font-medium text-amber-600 mt-1">
                                    {cartItem.item.price} ₽
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="w-8 h-8 border-stone-300 hover:bg-stone-100"
                                    onClick={() => decrementItemQuantity(cartItem.item.id)}
                                >
                                    <Minus className="w-3 h-3" />
                                </Button>

                                <span className="text-sm font-semibold text-stone-800 min-w-[2rem] text-center">
                                    {cartItem.quantity}
                                </span>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="w-8 h-8 border-stone-300 hover:bg-stone-100"
                                    onClick={() => incrementItemQuantity(cartItem.item.id)}
                                >
                                    <Plus className="w-3 h-3" />
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-8 h-8 text-red-500 hover:bg-red-50 hover:text-red-600"
                                    onClick={() => removeItemFromCart(cartItem.item.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};