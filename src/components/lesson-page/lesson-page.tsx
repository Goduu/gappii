import { Lesson } from '@/ogm-types'
import React, { FC } from 'react'
import { SessionProgressManager } from '../session/session-progress-manager';
import { LessonSessionData } from '../session/types';

type LessonPageProps = {
    lesson: Lesson;
}

export const LessonPage: FC<LessonPageProps> = ({ lesson }) => {

    const sessionData: LessonSessionData = {
        type: 'lesson',
        lessonId: lesson.id || "",
        activities: lesson.hasActivities.map(activity => ({
            ...activity,
            title: lesson.hasTopic.title || "",
            subtitle: lesson.hasSubtopic.title || ""
        }))
    }

    return (
        <div className="w-full">
            <SessionProgressManager
                sessionData={sessionData}
                reportedActivityIds={[]}
            />
        </div>
    )
}
