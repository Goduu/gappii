"use client"

import { AdvancementBarCard } from "@/components/ui/advancementbar"
import { useUserPathsAndLessons } from "@/lib/queries/useUserPaths"
import { PathCard } from "./path-card"

export const PathPage = () => {
    const { userPaths, userLessons } = useUserPathsAndLessons()

    return (
        <div className="flex flex-col gap-8 items-center justify-center w-full">
            {userPaths?.map(path => {
                const progress = path.withLessons.reduce((acc, lesson) => acc + (lesson?.completionPercentage || 0), 0) / path.withLessons.length
                return (
                    <AdvancementBarCard key={path.id} progress={progress} variant="status" size="medium" className='w-80 items-center justify-center'>
                        <PathCard lessons={userLessons || []} path={path} isSelected={true} size="md" />
                    </AdvancementBarCard>
                )
            }
            )}
        </div>
    )
}