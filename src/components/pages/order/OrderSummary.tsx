'use client';

import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface OrderSummaryProps {
    onSubmit: () => void;
    isSubmitting: boolean;
}

export const OrderSummary = ({ onSubmit, isSubmitting }: OrderSummaryProps) => {
    const { total, items } = useCart();

    const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Card className="border-stone-200 bg-stone-50">
            <CardContent className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-stone-800">
                    Итого
                </h3>

                <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-stone-600">
                        <span>Товары ({itemsCount})</span>
                        <span>{total} ₽</span>
                    </div>

                    <div className="flex justify-between text-stone-600">
                        <span>Доставка</span>
                        <span className="text-green-600">Бесплатно</span>
                    </div>

                    <div className="border-t border-stone-200 pt-2 flex justify-between font-semibold text-stone-800">
                        <span>К оплате</span>
                        <span className="text-amber-600 text-lg">{total} ₽</span>
                    </div>
                </div>

                <p className="text-xs text-stone-500">
                    Оплата при получении в пункте выдачи
                </p>

                <Button
                    onClick={onSubmit}
                    disabled={isSubmitting || items.length === 0}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Оформление...
                        </>
                    ) : (
                        'Оформить заказ'
                    )}
                </Button>
            </CardContent>
        </Card>
    );
};