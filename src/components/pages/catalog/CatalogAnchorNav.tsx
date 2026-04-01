'use client';

import { CatalogTheme } from '@/types/beerItem';

interface CatalogAnchorNavProps {
    sections: Array<{ id: CatalogTheme; title: string }>;
}

export const CatalogAnchorNav = ({ sections }: CatalogAnchorNavProps) => {
    const getThemeTitle = (theme: CatalogTheme): string => {
        const titles: Record<CatalogTheme, string> = {
            'hot-deals': 'Акция',
            'new-arrivals': 'Новинки',
            'best-value': 'Выгодно',
            'unique-experience': 'Уникальное',
        };
        return titles[theme];
    };

    return (
        <nav className="fixed top-16 left-0 right-0 z-30 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
            <div className="container mx-auto px-4">
                <ul className="flex gap-4 overflow-x-auto py-3 scrollbar-hide items-center justify-center ml-50">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className="
                                    text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors duration-300 whitespace-nowrap
                                    ml-3 mr-3
                                    "
                            >
                                {getThemeTitle(section.id)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};