"use client"
import { Activity, Lesson } from "@/ogm-resolver/ogm-types";
import { LessonProvider } from "./lesson-context";
import { LessonContent } from "./lesson-content";

type LessonProgressManagerProps = {
    lesson: Lesson;
    reportedActivityIds: Activity[] | undefined;
};

export const LessonProgressManager: React.FC<LessonProgressManagerProps> = (props) => {
    return (
        <LessonProvider lesson={props.lesson}>
            <LessonContent {...props} />
        </LessonProvider>
    );
};