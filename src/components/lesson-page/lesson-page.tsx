import { Lesson } from '@/ogm-resolver/ogm-types'
import React, { FC } from 'react'
import { LessonProgressManager } from './lesson-progress-manager'

type LessonPageProps = {
    lesson: Lesson,
}

export const LessonPage: FC<LessonPageProps> = ({ lesson }) => {

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full">
            <LessonProgressManager lesson={lesson} reportedActivityIds={[]} />
        </div>
    )
}
