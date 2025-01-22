import { LessonActivity } from '@/components/lesson-page/lesson-activity';
import { useLessonContext } from '@/components/lesson-page/lesson-context'
import { LessonHeader } from '@/components/lesson-page/lesson-header';
import { LessonNavigation } from '@/components/lesson-page/lesson-navigation';
import { Lesson } from '@/ogm-resolver/ogm-types';
import React, { FC } from 'react'

type OnboardingLessonProps = {
    lesson: Lesson;
}

export const OnboardingLesson: FC<OnboardingLessonProps> = ({ lesson }) => {
    const { currentActivityIndex, progress, handleBack, handleNext } = useLessonContext();
    const topic = lesson.hasTopic;
    const subtopic = lesson.hasSubtopic;
    const activities = lesson.hasActivities;

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full">
            <div className="flex flex-col px-4 py-4 gap-2 sm:py-10 items-center scale-100 md:scale-110 lg:scale-125 xl:scale-150">
                <div className="flex flex-col gap-2 sm:gap-4 w-full">
                    <LessonHeader
                        topicTitle={topic.title}
                        subtopicTitle={subtopic.title}
                    />
                    <LessonNavigation
                        currentIndex={currentActivityIndex}
                        total={activities.length}
                        progress={progress}
                        onBack={handleBack}
                        onNext={handleNext}
                    />
                </div>
                <LessonActivity
                    isOnboarding
                />
            </div>
        </div>
    )
}
