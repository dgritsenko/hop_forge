'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function OrderSuccessPage() {
    return (
        <main className="min-h-screen bg-stone-50 flex items-center justify-center py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />

                    <h1 className="text-3xl font-bold text-stone-800 mb-2">
                        Заказ оформлен!
                    </h1>

                    <p className="text-stone-600 mb-6">
                        Мы получили ваш заказ. Ожидайте уведомления о готовности.
                    </p>

                    <div className="space-y-3">
                        <Link href="/profile">
                            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                                В личный кабинет
                            </Button>
                        </Link>

                        <Link href="/catalog">
                            <Button variant="outline" className="w-full border-stone-300">
                                В каталог
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}