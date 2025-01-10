import { Lesson } from "@/ogm-resolver/ogm-types";
import { Activity } from "@/ogm-resolver/ogm-types";
import { useLessonContext } from "./lesson-context";
import { LessonNavigation } from "./lesson-navigation";
import { LessonHeader } from "./lesson-header";
import { LessonActivity } from "./lesson-activity";

type LessonContentProps = {
    lesson: Lesson;
    reportedActivityIds: Activity[] | undefined;
};

export const LessonContent: React.FC<LessonContentProps> = ({
    lesson,
    reportedActivityIds,
}) => {
    const { currentActivityIndex, progress, handleBack, handleNext } = useLessonContext();
    const topic = lesson.hasTopic;
    const subtopic = lesson.hasSubtopic;
    const activities = lesson.hasActivities;

    return (
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
                reportedActivityIds={reportedActivityIds}
            />
        </div>
    );
};