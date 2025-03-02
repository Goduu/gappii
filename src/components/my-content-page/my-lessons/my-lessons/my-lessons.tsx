"use client"
import { LessonCard } from '@/components/lesson-card/lesson-card'
import { PageTitle } from '@/components/ui/page-title'
import { LessonsSkeleton } from '../lessons-skeleton'
import { useGetUserLessons } from './useGetUserLessons'
import { LessonsActionBar } from '../lessons-actions-bar'

type MyLessonsProps = {
    searchParams?: {
        lessonSearch?: string,
        lessonReaction?: string,
    }
}

export const MyLessons = ({ searchParams }: MyLessonsProps) => {
    const { lessons, loading, setInfiniteScrollRef } = useGetUserLessons(searchParams);

    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col md:flex-row gap-2'>
                <PageTitle title='My Lessons' />
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <LessonsActionBar />
                <div className='flex flex-col gap-10 w-full items-start'>
                    <div className="flex flex-wrap gap-4 items-center justify-center w-full">
                        {lessons.map((lesson) => (
                            <LessonCard
                                variant="my-content"
                                key={lesson.id}
                                lesson={lesson}
                            />
                        ))}
                        {(loading) && <LessonsSkeleton />}
                        <div ref={setInfiniteScrollRef} className="h-4 w-full flex flex-wrap gap-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
