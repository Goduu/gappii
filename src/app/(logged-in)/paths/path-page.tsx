"use client"

import { AdvancementBarCard } from "@/components/ui/advancementbar"
import { useUserPathsAndLessons } from "@/lib/queries/useUserPaths"
import { PathCard } from "./path-card"
import { Skeleton } from "@/components/ui/skeleton"

export const PathPage = () => {
    const { userPaths, loading } = useUserPathsAndLessons()

    return (
        <div className="flex flex-wrap gap-8 w-full items-center justify-center">
            {loading && <Skeleton className="w-80 h-32" />}
            {!loading && userPaths?.map(path => {
                const progress = path.withLessons.reduce((acc, lesson) => acc + (lesson?.completionPercentage || 0), 0) / path.withLessons.length
                return (
                    <AdvancementBarCard key={path.id} progress={progress} variant="status" size="medium" className='w-80 items-center justify-center'>
                        <PathCard path={path} isSelected={true} size="md" />
                    </AdvancementBarCard>
                )
            }
            )}
        </div>
    )
}