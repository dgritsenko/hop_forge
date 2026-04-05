'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema, IOrderForm } from '@/lib/validators';
import { OrderItems } from '@/components/pages/order/OrderItems';
import { OrderPickup } from '@/components/pages/order/OrderPickup';
import { OrderForm } from '@/components/pages/order/OrderForm';
import { OrderSummary } from '@/components/pages/order/OrderSummary';
import { useRouter } from 'next/navigation';
import useOrder from '@/hooks/useOrder';
import { useCart } from '@/hooks/useCart';
import { useEffect, useState } from 'react';

export default function OrderPage() {
    const { items } = useCart();
    
    const router = useRouter();

    const {        
        isSubmitting, 
        setIsSubmitting,
        
        createOrder,
    } = useOrder()

    const methods = useForm<IOrderForm>({
        resolver: zodResolver(orderSchema),
        defaultValues: {
            customerName: '',
            customerPhone: '',
            customerEmail: '',
            pickupType: 'immediate',
            pickupDate: '',
            pickupTime: '',
            pickupPoint: 'main-bar',
            comment: '',
        },
    });

    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <>
            { items.length === 0 || !isHydrated
                ?(
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl font-bold text-stone-800 mb-6 text-center">
                            Оформление заказа
                        </h1>
                        <div className="text-center py-12">
                            <p className="text-stone-600 mb-4">Ваша корзина пуста</p>
                            <button
                                onClick={() => router.push('/catalog')}
                                className="text-amber-600 hover:text-amber-700 font-medium underline"
                            >
                                Перейти в каталог
                            </button>
                        </div>
                    </div>
                ):(
                    
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-stone-800 mb-6 text-center">
                        Оформление заказа
                    </h1>

                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(createOrder)}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 space-y-6">
                                    <OrderItems />
                                    <OrderPickup />
                                    <OrderForm />
                                </div>

                                <div className="lg:col-span-1">
                                    <div className="sticky top-24">
                                        <OrderSummary
                                            onSubmit={methods.handleSubmit(createOrder)}
                                            isSubmitting={isSubmitting}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
                )
            }
        </>

    )
    
}
