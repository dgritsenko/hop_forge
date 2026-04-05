'use client';

import { useState, useEffect, useCallback } from 'react';
import { CatalogSection } from '@/types/beerItem';
import { getCatalogSections } from '@/lib/mocks/catalogMocks';
import axios from 'axios';

export interface UseCatalogReturn {
    sections: CatalogSection[];
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

export const useCatalog = (): UseCatalogReturn => {
    const [sections, setSections] = useState<CatalogSection[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const API_CATALOG = 'https:/SERVER/api/catalog' 


    const loadData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = axios.get(`${API_CATALOG}/getCatalog`,{
                'withCredentials': true
            })
            await new Promise((resolve) => setTimeout(resolve, 800));

            const data = getCatalogSections();
            setSections(data);
        } catch (err) {
            setError('Не удалось загрузить каталог');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const refetch = useCallback(async () => {
        await loadData();
    }, [loadData]);

    return {
        sections,
        loading,
        error,
        refetch,
    };
};