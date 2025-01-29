import { Lesson } from "../../ogm-types";
import { Activity } from "../../ogm-types";
import { useLessonContext } from "./lesson-context";
import { LessonHeader } from "./lesson-header";
import { LessonActivity } from "./lesson-activity";
import { LessonMode } from "./type";
import { useSearchParams } from "next/navigation";

type LessonContentProps = {
    lesson: Lesson;
    reportedActivityIds?: Activity[] | undefined;
    onActivityComplete?: (activityIndex: number) => void;
};

export const LessonContent: React.FC<LessonContentProps> = ({
    lesson,
    reportedActivityIds = [],
}) => {
    const { currentActivityIndex, progress } = useLessonContext();
    const searchParams = useSearchParams();
    const mode = (searchParams.get('mode') || "normal") as LessonMode
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
                        reportedActivityIds={reportedActivityIds}
                        mode={mode}
                    />
                </div>
            </div>
        </div>
    );
};