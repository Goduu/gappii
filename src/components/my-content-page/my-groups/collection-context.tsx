import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CollectionFormValues } from './useCollectionForm';

interface CollectionContextType {
    collection: CollectionFormValues | null;
    setCollection: (collection: CollectionFormValues) => void;
}

const CollectionContext = createContext<CollectionContextType | undefined>(undefined);

export const CollectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [collection, setCollection] = useState<CollectionFormValues | null>(null);

    return (
        <CollectionContext.Provider value={{ collection, setCollection }}>
            {children}
        </CollectionContext.Provider>
    );
};

export const useCollection = (): CollectionContextType => {
    const context = useContext(CollectionContext);
    if (context === undefined) {
        throw new Error('useCollection must be used within a CollectionProvider');
    }
    return context;
};