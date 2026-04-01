'use client';

import { useCatalog } from '@/hooks/useCatalog';
import { CatalogAnchorNav } from '@/components/pages/catalog/CatalogAnchorNav';
import { CatalogSection } from '@/components/pages/catalog/CatalogSection';
import { Loader2 } from 'lucide-react';

export default function CatalogPage() {
    const { sections, loading, error } = useCatalog();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 animate-spin text-amber-600 mx-auto mb-4" />
                    <p className="text-stone-600 font-medium">Загружаем каталог...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <div className="text-center">
                    <p className="text-stone-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-amber-600 hover:text-amber-700 font-medium underline"
                    >
                        Попробовать снова
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-stone-50 pt-[140px] pb-16">
            <CatalogAnchorNav sections={sections} />

            <div className="container mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-800 mb-4 text-center">
                    Каталог пива
                </h1>
                <p className="text-stone-600 text-center max-w-2xl mx-auto mb-12">
                    Выберите готовый рецепт или создайте свой уникальный вкус в конструкторе
                </p>

                {sections.map((section) => (
                    <CatalogSection key={section.id} section={section} />
                ))}
            </div>
        </main>
    );
};