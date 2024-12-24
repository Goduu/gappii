"use client"
import React from 'react'
import { FilterBar } from './filter-bar'
import { LessonSkeletons } from './lesson-skeletons'
import { TopicSection } from './topic-section'
import { Button } from '@/components/ui/button'
import { useMyLessonsFunctions } from './useMyLessonsFunctions'

const TOPICS_PER_PAGE = 10; // Number of topics to load per scroll

export const MyLessons = () => {

    const { filter,
        setFilter,
        sortedLessonByTopic,
        hasNextPage,
        loadMoreLessons,
        loading,
        setKeywordFilter,
        setTopicFilter,
        setSubtopicFilter } = useMyLessonsFunctions()


    return (
        <div className='flex flex-col gap-10 w-full items-start'>
            <FilterBar setFilter={setFilter} filter={filter} />
            <div className='flex flex-wrap gap-4 justify-center'>
                <>
                    {Object.entries(sortedLessonByTopic).map(([topic, lessons]) => (
                        <TopicSection
                            key={topic}
                            lessons={lessons}
                            topic={lessons[0].hasTopic}
                            setKeywordFilter={setKeywordFilter}
                            setSubtopicFilter={setSubtopicFilter}
                            setTopicFilter={setTopicFilter}
                        />
                    ))}
                </>

            </div>
            {loading ?
                <LessonSkeletons />
                :
                hasNextPage && (
                    <Button onClick={loadMoreLessons} variant="outline">
                        Load More
                    </Button>
                )
            }
        </div>
    )
}