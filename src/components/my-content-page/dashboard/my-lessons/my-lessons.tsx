"use client"
import { LessonCard } from '@/components/lesson-card/lesson-card'
import { LessonSearchBar } from '@/components/lesson-card/lesson-searchbar'
import { FilterBar } from '../filter-bar'
import { PageTitle } from '@/components/ui/page-title'
import { CreateLesson } from '../create-lesson'
import React from 'react'
import { LessonsSkeleton } from '../lessons-skeleton'
import { HardModeSwitch } from '@/components/lesson-card/hard-mode-switch'
import { useGetUserLessons } from './useGetUserLessons'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { SearchCheck } from 'lucide-react'

type MyLessonsProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export const MyLessons = ({ searchParams }: MyLessonsProps) => {
    const { lessons, loading, setInfiniteScrollRef } = useGetUserLessons(searchParams);
    const router = useRouter();

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                <PageTitle title='My Lessons' />
                <CreateLesson />
                <HardModeSwitch />
                {/* <PulppiiBehindElement > */}
                <Button
                    disabled
                    title="Coming soon"
                    className=" relative ml-auto flex items-center gap-2"
                    onClick={() => router.push('/logged-in/correct-mistakes')}>
                    <SearchCheck /> Correct my mistakes
                </Button>
                {/* </PulppiiBehindElement> */}
            </div>
            <div className='flex flex-col gap-2'>
                <LessonSearchBar />
                <div className='flex flex-col gap-10 w-full items-start'>
                    <FilterBar />
                    <div className='flex flex-wrap gap-4 justify-start'>
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
