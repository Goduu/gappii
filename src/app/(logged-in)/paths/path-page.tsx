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
    const { userPaths, loading, setInfiniteScrollRef } = useUserPathsAndLessons(searchParams)

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-wrap gap-4 w-full items-center justify-center">
                {userPaths?.map(path => {
                    const progress = path.withLessons.reduce((acc, lesson) => acc + (lesson?.completionPercentage || 0), 0) / path.withLessons.length
                    return (
                        <AdvancementBarCard key={path.id} progress={progress} variant="status" size="medium" className='w-80 items-center justify-center'>
                            <PathCard path={path} size="md" />
                        </AdvancementBarCard>
                    )
                }
                )}
            </div>
            {(loading) && (
                <div className="flex flex-wrap gap-8 w-full items-center justify-center">
                    <Skeleton className="w-80 h-32" />
                    <Skeleton className="w-80 h-32" />
                </div>
            )}
            <div ref={setInfiniteScrollRef} className="h-4 w-full flex flex-wrap gap-4" />
        </div>
    )
}