'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import InputForm from '@/components/shared/InputForm/InputForm';
import { IOrderForm } from '@/lib/validators';
import { useUser } from '@/hooks/useUser';

export const OrderForm = () => {
    const { control, formState: { errors } } = useFormContext<IOrderForm>();
    const { user } = useUser();

    return (
        <Card className="border-stone-200">
            <CardContent className="p-4 space-y-4">
                <h3 className="text-lg font-semibold text-stone-800">
                    Данные получателя
                </h3>

                <div className="space-y-3">
                    <InputForm<IOrderForm>
                        control={control}
                        name="customerName"
                        type="text"
                        label="ФИО *"
                        placeholder="Иванов Иван Иванович"
                        error={errors.customerName}
                    />

                    <InputForm<IOrderForm>
                        control={control}
                        name="customerPhone"
                        type="tel"
                        label="Телефон *"
                        placeholder="+7 (999) 000-00-00"
                        error={errors.customerPhone}
                    />

                    <InputForm<IOrderForm>
                        control={control}
                        name="customerEmail"
                        type="email"
                        label="Email *"
                        placeholder="example@mail.ru"
                        error={errors.customerEmail}
                    />

                    <div className="space-y-1">
                        <label className="text-sm text-stone-600" htmlFor="comment">
                            Комментарий к заказу
                        </label>
                        <Controller
                            name="comment"
                            control={control}
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    id="comment"
                                    placeholder="Пожелания к заказу"
                                    className="border-stone-300 min-h-[80px]"
                                />
                            )}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};