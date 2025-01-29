import { useMistakeLessonContext } from "./mistakes-lesson-context";
import { LessonHeader } from "../lesson-page/lesson-header";
import { LessonMode } from "../lesson-page/type";
import { useSearchParams } from "next/navigation";
import { MistakeLessonActivity } from "./mistake-lesson-activity";
import { FC } from "react";


export const MistakeLessonContent: FC = () => {
    const { currentActivityIndex, progress, currentLesson } = useMistakeLessonContext();
    const searchParams = useSearchParams();
    const mode = (searchParams.get('mode') || "normal") as LessonMode;

    if (!currentLesson) return null;

    return (
        <div className="flex flex-col w-full items-center h-full">
            <div className="flex flex-col gap-16 origin-top transform scale-100 md:scale-110 lg:scale-125 xl:scale-150">
                <div className="w-96">
                    <LessonHeader
                        topicTitle={"Correcting Mistakes"}
                        subtopicTitle={currentLesson.title}
                        currentIndex={currentActivityIndex}
                        total={currentLesson.activities.length}
                        progress={progress}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <MistakeLessonActivity mode={mode} />
                </div>
            </div>
        </div>
    );
};