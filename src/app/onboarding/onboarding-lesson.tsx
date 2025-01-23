import { LessonActivity } from '@/components/lesson-page/lesson-activity';
import { useLessonContext } from '@/components/lesson-page/lesson-context'
import { LessonHeader } from '@/components/lesson-page/lesson-header';
import { Lesson } from '@/ogm-resolver/ogm-types';
import React, { FC } from 'react'

type OnboardingLessonProps = {
    lesson: Lesson;
}

export const OnboardingLesson: FC<OnboardingLessonProps> = ({ lesson }) => {
    const { currentActivityIndex, progress } = useLessonContext();
    const topic = lesson.hasTopic;
    const subtopic = lesson.hasSubtopic;
    const activities = lesson.hasActivities;

    return (
        <div className="flex flex-col w-full items-center h-full">
            <div className="flex flex-col gap-16 origin-top transform scale-100 md:scale-110 lg:scale-125 xl:scale-150">
                <div className="w-96">
                    <LessonHeader
                        topicTitle={topic.title}
                        subtopicTitle={subtopic.title}
                        currentIndex={currentActivityIndex}
                        total={activities.length}
                        progress={progress}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <LessonActivity
                        isOnboarding
                    />
                </div>
            </div>
        </div>
    )
}
