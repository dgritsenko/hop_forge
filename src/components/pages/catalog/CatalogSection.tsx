'use client';

import { CatalogSection as CatalogSectionType } from '@/types/beerItem';
import { CatalogCard } from './CatalogCard';

interface CatalogSectionProps {
    section: CatalogSectionType;
}

export const CatalogSection = ({ section }: CatalogSectionProps) => {
    return (
        <section
            id={section.id}
            className="scroll-mt-32 py-8"
        >
            <div className="mb-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-2">
                    {section.title}
                </h2>
                {section.description && (
                    <p className="text-base text-stone-600 max-w-2xl mx-auto">
                        {section.description}
                    </p>
                )}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {section.items.map((item) => (
                    <div
                        key={item.id}
                        className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] max-w-[320px]"
                    >
                        <CatalogCard item={item} />
                    </div>
                ))}
            </div>
        </section>
    );
};