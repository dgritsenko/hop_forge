'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { IOrderForm } from '@/lib/validators';
import { useState } from 'react';

export const OrderPickup = () => {
    const { control, watch, formState: { errors } } = useFormContext<IOrderForm>();
    const pickupType = watch('pickupType');

    const pickupPoints = [
        {
            id: 'main-bar',
            name: 'Главный бар',
            address: 'ул. Пивоваров, д. 1',
            hours: 'Ежедневно 12:00 - 23:00',
        },
    ];

    const today = new Date().toISOString().split('T')[0];

    const [
        selectRadioButton, setSelectRadioButton
    ] = useState<string|null>()

    return (
        <Card className="border-stone-200">
            <CardContent className="p-4 space-y-4">
                <h3 className="text-lg font-semibold text-stone-800">
                    Способ получения
                </h3>

                <Controller
                    name="pickupType"
                    control={control}
                    defaultValue="immediate"
                    render={({ field }) => (
                        <RadioGroup value={field.value} onValueChange={field.onChange}>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem 
                                    value="immediate" 
                                    id="immediate" 
                                    className='focus:bg-black'
                                />
                                <Label htmlFor="immediate" className="flex-1 cursor-pointer">
                                    <span className="font-medium text-stone-800">Забрать по готовности</span>
                                    <p className="text-xs text-stone-500">
                                        Через 2-3 часа после заказа
                                    </p>
                                </Label>
                            </div>

                            <div className="flex items-center gap-3">
                                <RadioGroupItem 
                                    value="preorder" 
                                    id="preorder" 
                                    className='focus:bg-black'

                                />
                                <Label htmlFor="preorder" className="flex-1 cursor-pointer">
                                    <span className="font-medium text-stone-800">Предзаказ</span>
                                    <p className="text-xs text-stone-500">
                                        Выберите удобную дату и время
                                    </p>
                                </Label>
                            </div>
                        </RadioGroup>
                    )}
                />

                {pickupType === 'preorder' && (
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="space-y-1">
                            <Label htmlFor="pickupDate" className="text-sm text-stone-600">
                                Дата *
                            </Label>
                            <Controller
                                name="pickupDate"
                                control={control}
                                rules={{ required: 'Выберите дату получения' }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        id="pickupDate"
                                        type="date"
                                        min={today}
                                        className="border-stone-300"
                                    />
                                )}
                            />
                            {errors.pickupDate && (
                                <p className="text-xs text-red-500">{errors.pickupDate.message}</p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="pickupTime" className="text-sm text-stone-600">
                                Время *
                            </Label>
                            <Controller
                                name="pickupTime"
                                control={control}
                                rules={{ required: 'Выберите время получения' }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        id="pickupTime"
                                        type="time"
                                        className="border-stone-300"
                                    />
                                )}
                            />
                            {errors.pickupTime && (
                                <p className="text-xs text-red-500">{errors.pickupTime.message}</p>
                            )}
                        </div>
                    </div>
                )}

                <div className="pt-2 border-t border-stone-200">
                    <h4 className="text-sm font-medium text-stone-700 mb-2">
                        Пункт выдачи *
                    </h4>
                    {pickupPoints.map((point) => (
                        <div
                            key={point.id}
                            className="p-3 bg-stone-50 rounded-lg border border-stone-200"
                        >
                            <p className="font-medium text-stone-800">{point.name}</p>
                            <p className="text-sm text-stone-500">{point.address}</p>
                            <p className="text-xs text-stone-400">{point.hours}</p>
                        </div>
                    ))}
                    <Controller
                        name="pickupPoint"
                        control={control}
                        defaultValue="main-bar"
                        render={({ field }) => (
                            <input type="hidden" {...field} value={pickupPoints[0].id} />
                        )}
                    />
                    {errors.pickupPoint && (
                        <p className="text-xs text-red-500 mt-1">{errors.pickupPoint.message}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};