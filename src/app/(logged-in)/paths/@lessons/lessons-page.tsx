"use client"
import { LessonCardSmall } from "@/components/lesson-card/lesson-card-small";
import { LessonSearchBar } from "@/components/lesson-card/lesson-searchbar";
import { CreateLesson } from "@/components/my-content-page/my-lessons/create-lesson";
import { FilterBar } from "@/components/my-content-page/my-lessons/filter-bar";
import { useGetUserLessons } from "@/components/my-content-page/my-lessons/my-lessons/useGetUserLessons";
import { PageTitle } from "@/components/ui/page-title";
import { useIsMobile } from "@/hooks/use-mobile";

type LessonsProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
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
            <div className="flex-none flex items-center gap-2">
                <PageTitle title="Lessons" />
                <CreateLesson />
            </div>
            <div className="flex-none">
                <LessonSearchBar />
            </div>
            <div className="flex-none">
                <FilterBar />
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto thin-scrollbar px-2">
                <div className="flex flex-col gap-4">
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