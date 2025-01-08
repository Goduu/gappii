"use client"
import React, { Suspense, useState } from 'react'
import { PageTitle } from '../page-title/page-title'
import { Skeleton } from '../ui/skeleton'
import { CommunityFilters } from './community-filters'
import { useQuery } from '@apollo/client'
import { GET_COMMUNITY_LESSONS } from '@/lib/gqls/lessonGQLs'
import { toast } from '@/hooks/use-toast'
import { CommunityCard } from './community-card'
import { Lesson } from '@/ogm-resolver/ogm-types'

export const CommunityPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState<'trending' | 'top' | 'newest'>('trending')
    const [level, setLevel] = useState<string>('')

    const { data } = useQuery<{ lessons: Lesson[] }>(GET_COMMUNITY_LESSONS, {
        variables: {
            searchTerm,
            level: level ? parseInt(level) : undefined
        }
    })

    const handlePlay = (lessonId: string) => {
        // Implement play logic
    }

    const handleCopy = (lessonId: string) => {
        // Implement copy logic
        toast({
            title: "Lesson copied",
            description: "The lesson has been copied to your library"
        })
    }

    const handleAdd = (lessonId: string) => {
        // Implement add to collection logic
    }

    return (
        <div className="space-y-4 px-4 md:px-6">
            <PageTitle title='Community' />

            <CommunityFilters
                onSearch={setSearchTerm}
                onSortChange={setSortBy}
                onLevelChange={setLevel}
            />

            <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-56 w-full" />
                ))}
            </div>}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.lessons.map((lesson) => (
                        <CommunityCard
                            key={lesson.id}
                            lesson={lesson}
                            onPlay={handlePlay}
                            onCopy={handleCopy}
                            onAdd={handleAdd}
                        />
                    ))}
                </div>
            </Suspense>
        </div>
    )
}
