import { useEffect, useRef, useState } from 'react';
import { DebouncedState } from 'use-debounce';

interface UseInfiniteScrollProps {
    loading: boolean;
    hasNextPage: boolean | undefined;
    onLoadMore: DebouncedState<() => Promise<void>>;
    threshold?: number;
}

export const useInfiniteScroll = ({
    loading,
    hasNextPage,
    onLoadMore,
    threshold = 100
}: UseInfiniteScrollProps) => {
    const [element, setElement] = useState<HTMLElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (!element) return;

        // Cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Create new observer
        observerRef.current = new IntersectionObserver(
            async (entries) => {
                const first = entries[0];
                if (first.isIntersecting && hasNextPage && !loading && !isLoading) {
                    setIsLoading(true);
                    await onLoadMore();
                    setIsLoading(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: `0px 0px ${threshold}px 0px`,
            }
        );

        // Observe element
        observerRef.current.observe(element);

        // Cleanup on unmount
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [element, hasNextPage, loading, onLoadMore, threshold]);

    return { setElement };
};