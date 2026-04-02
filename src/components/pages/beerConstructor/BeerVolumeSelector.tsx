'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BeerVolumeSelectorProps {
    volume: number;
    onSelectVolume: (volume: number) => void;
}

const volumes = [
    { value: 200, label: '200 мл', price: '50%' },
    { value: 400, label: '400 мл', price: '80%' },
    { value: 500, label: '500 мл', price: '100%' },
];

export const BeerVolumeSelector = ({ volume, onSelectVolume }: BeerVolumeSelectorProps) => {
    return (
        <Card className="border-stone-200">
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">
                    2. Выберите объём
                </h3>

                <div className="flex gap-3">
                    {volumes.map((vol) => (
                        <Button
                            key={vol.value}
                            onClick={() => onSelectVolume(vol.value)}
                            variant={volume === vol.value ? 'default' : 'outline'}
                            className={`flex-1 transition-all duration-300 ${
                                volume === vol.value
                                    ? 'bg-amber-600 hover:bg-amber-700 border-amber-600'
                                    : 'border-stone-300 hover:border-amber-400'
                            }`}
                        >
                            <div className="text-center">
                                <p className="font-medium">{vol.label}</p>
                                <p className="text-xs text-stone-500">{vol.price}</p>
                            </div>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};