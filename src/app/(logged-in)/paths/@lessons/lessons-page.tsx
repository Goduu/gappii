"use client"
import { LessonCardSmall } from "@/components/lesson-card/lesson-card-small";
import { LessonsActionBar } from "@/components/my-content-page/my-lessons/lessons-actions-bar";
import { useGetUserLessons } from "@/components/my-content-page/my-lessons/my-lessons/useGetUserLessons";
import { PageTitle } from "@/components/ui/page-title";
import { useIsMobile } from "@/hooks/use-mobile";

type LessonsProps = {
    searchParams?: {
        search?: string,
        lessonReaction?: string,
    }
}
export default function LessonPage({ searchParams }: LessonsProps) {
    const { lessons } = useGetUserLessons(searchParams);
    const isMobile = useIsMobile()

    if (isMobile) {
        return null
    }
    return (
        <div className="flex flex-col gap-4 h-full">
            <PageTitle title="Lessons" />
            <LessonsActionBar />
            <div className="flex-1 min-h-0 overflow-y-auto thin-scrollbar px-2 ">
                <div className="flex flex-col gap-4 min-w-72">
                    {lessons.map((lesson) => (
                        <LessonCardSmall
                            variant="my-content"
                            key={lesson.id}
                            lesson={lesson}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}