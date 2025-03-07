"use client"

import { AdvancementBarCard } from "@/components/ui/advancementbar"
import { useUserPathsAndLessons } from "@/lib/queries/useUserPaths"
import { PathCard } from "./path-card"
import { Skeleton } from "@/components/ui/skeleton"

type PathPageProps = {
    searchParams?: {
        pathSearch?: string,
        pathReaction?: string,
    }
}

export const PathPage = ({ searchParams }: PathPageProps) => {
    const { userPaths, loading, setInfiniteScrollRef, refetch } = useUserPathsAndLessons(searchParams)

    const handlePathDeleted = () => {
        // Refetch paths to update the UI after deletion
        refetch?.();
    };

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">My Learning Paths</h1>
            </div>
            
            <div className="w-full">
                {userPaths.length === 0 && !loading ? (
                    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
                        <p className="text-lg text-gray-500 dark:text-gray-400">No learning paths found</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Try adjusting your search or create a new path</p>
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-4 w-full items-center justify-center">
                        {userPaths.map(path => {
                            const progress = path.withLessons.reduce(
                                (acc, lesson) => acc + (lesson?.completionPercentage || 0), 0
                            ) / path.withLessons.length;
                            
                            
                            return (
                                <div key={path.id} className="relative w-full md:w-80">
                                    <AdvancementBarCard 
                                        progress={progress} 
                                        variant="status" 
                                        size="medium" 
                                        className='w-full items-center justify-center transition-all hover:shadow-md'
                                    >
                                        <PathCard 
                                            path={path} 
                                            size="md" 
                                            onPathDeleted={handlePathDeleted}
                                        />
                                    </AdvancementBarCard>
                                </div>
                            );
                        })}
                    </div>
                )}
                
                {loading && (
                    <div className="flex flex-wrap gap-8 w-full items-center justify-center mt-4">
                        <Skeleton className="w-80 h-32 rounded-lg" />
                        <Skeleton className="w-80 h-32 rounded-lg" />
                    </div>
                )}
                
                <div ref={setInfiniteScrollRef} className="h-4 w-full" />
            </div>
        </div>
    )
}