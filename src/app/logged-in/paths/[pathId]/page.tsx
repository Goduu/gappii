import React, { FC, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { getPathRandomActivities } from '@/lib/queries/getPathRandomActivities'
import { SessionProgressManager } from '@/components/session/session-progress-manager'
import { PathSessionData } from '@/components/session/types'

type CardsProps = {
    params: Promise<{
        pathId: string,
    }>
}

const Cards: FC<CardsProps> = async ({ params }) => {
    const { pathId } = await params

    const path = await getPathRandomActivities(pathId)
    if (!path) {
        return <div>No path found</div>
    }


    const sessionData: PathSessionData = {
        type: 'path',
        pathId,
        activities: path.randomActivities.map((activity) => ({
            ...activity,
            title: path.title || ""
        }))
    }

    return (
        <Suspense fallback={<Skeleton className="h-[calc(100vh-10rem)]" />}>
            {/* <LessonPage lesson={lesson} /> */}
            <div className='flex flex-col gap-4 w-full'>
                <SessionProgressManager sessionData={sessionData} />
            </div>
        </Suspense>
    )
}

export default Cards