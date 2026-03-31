'use client';

import { Provider } from 'react-redux';
import { store, AppStore } from '@/store/store';
import { useUserActions } from '@/hooks/useUserActions';
import { useEffect, useRef } from 'react';

interface ProvidersProps {
    children: React.ReactNode;
}

function UserInitializer({ children }: { children: React.ReactNode }) {
    const { loadUser } = useUserActions();

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return <>{children}</>;
}

export function Providers({ children }: ProvidersProps) {
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = store();
    }

    return (
        <Provider store={storeRef.current}>
            <UserInitializer>{children}</UserInitializer>
        </Provider>
    );
}