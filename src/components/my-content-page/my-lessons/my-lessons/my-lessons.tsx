"use client"
import { LessonCard } from '@/components/lesson-card/lesson-card'
import { PageTitle } from '@/components/ui/page-title'
import { LessonsSkeleton } from '../lessons-skeleton'
import { useGetUserLessons } from './useGetUserLessons'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { SearchCheck } from 'lucide-react'
import { LessonsActionBar } from '../lessons-actions-bar'

type MyLessonsProps = {
    searchParams?: {
        lessonSearch?: string,
        lessonReaction?: string,
    }
}

export const MyLessons = ({ searchParams }: MyLessonsProps) => {
    const { lessons, loading, setInfiniteScrollRef } = useGetUserLessons(searchParams);
    const router = useRouter();

    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col md:flex-row gap-2'>
                <PageTitle title='My Lessons' />
                <div className='flex flex-col md:flex-row gap-2 md:ml-auto'>
                    {/* <PulppiiBehindElement > */}
                    <Button
                        title="Coming soon"
                        className=" relative md:ml-auto flex items-center gap-2"
                        onClick={() => router.push('/logged-in/correct-mistakes')}>
                        <SearchCheck /> Correct my mistakes
                    </Button>
                </div>
                {/* </PulppiiBehindElement> */}
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
