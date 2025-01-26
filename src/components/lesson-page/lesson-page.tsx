import { Lesson } from '@/ogm-types'
import React, { FC } from 'react'
import { LessonProgressManager } from './lesson-progress-manager'

type LessonPageProps = {
    lesson: Lesson;
}

export const LessonPage: FC<LessonPageProps> = ({ lesson }) => {

    return (
        <div className="w-full">
            <LessonProgressManager
                lesson={lesson}
                reportedActivityIds={[]}
            />
        </div>
    )
}
