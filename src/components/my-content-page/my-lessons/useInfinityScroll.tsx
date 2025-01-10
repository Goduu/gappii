import { useEffect, useRef, useState } from 'react';

interface UseInfiniteScrollProps {
    loading: boolean;
    hasNextPage: boolean | undefined;
    onLoadMore: () => void;
    threshold?: number;
}

export const useInfiniteScroll = ({
    loading,
    hasNextPage,
    onLoadMore,
    threshold = 100
}: UseInfiniteScrollProps) => {
    const [element, setElement] = useState<HTMLElement | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (!element) return;

        // Cleanup previous observer
        if (observerRef.current) {
            console.log("disconnecting observer")
            observerRef.current.disconnect();
        }

        // Create new observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting && hasNextPage && !loading) {
                    onLoadMore();
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