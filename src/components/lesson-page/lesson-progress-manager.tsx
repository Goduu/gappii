"use client"
import { Activity, Lesson } from "@/ogm-resolver/ogm-types";
import { LessonNavigation } from "./lesson-navigation";
import { LessonHeader } from "./lesson-header";
import { LessonProvider, useLessonContext } from "./lesson-context";
import { LessonActivity } from "./lesson-activity";

type LessonProgressManagerProps = {
    lesson: Lesson;
    reportedActivityIds: Activity[] | undefined;
};

const LessonContent: React.FC<LessonProgressManagerProps> = ({
    lesson,
    reportedActivityIds,
}) => {
    const { currentActivityIndex, progress, handleBack, handleNext } = useLessonContext();
    const topic = lesson.hasTopic;
    const subtopic = lesson.hasSubtopic;
    const activities = lesson.hasActivities;

    return (
        <div className="flex flex-col px-4 py-4 gap-2 sm:py-10 items-center">
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
                topic={topic.title}
                subtopic={subtopic.title}
                reportedActivityIds={reportedActivityIds}
            />
        </div>
    );
};

export const LessonProgressManager: React.FC<LessonProgressManagerProps> = (props) => {
    return (
        <LessonProvider lesson={props.lesson}>
            <LessonContent {...props} />
        </LessonProvider>
    );
};