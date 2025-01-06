import React, { FC } from 'react'
import { FilterBar } from './filter-bar'
import { TopicSection } from './topic-section'
import { getApolloClient } from '@/lib/getApolloClient'
import { Lesson, User, UserHasLessonsConnectionWhere } from '@/ogm-resolver/ogm-types'
import { GET_USER_LESSONS } from '@/lib/gqls/userGQLs'
import { auth } from '@clerk/nextjs/server'

type MyLessonsProps = {
    props: {
        searchParams?: Promise<{
            topic?: string;
            subtopic?: string;
            reaction?: string;
            page?: string;
        }>;
    }
}

export const MyLessons: FC<MyLessonsProps> = async ({ props }) => {
    const { userId } = await auth()
    if (!userId) return null
    
    const searchParams = await props.searchParams;
    const topic = searchParams?.topic || '';
    const subtopic = searchParams?.subtopic || '';
    const reaction = searchParams?.reaction || '';
    const currentPage = Number(searchParams?.page) || 1;


    const client = getApolloClient();
    const { data } = await client.query<{ users: Array<User> }>({
        query: GET_USER_LESSONS,
        variables: {
            where: {
                clerkId: userId
            },
            lessonWhere: {
                node: {
                    hasTopic: topic ? {
                        title: topic
                    } : {},
                    hasSubtopic: subtopic ? {
                        title: subtopic
                    } : {},
                    wasReactedConnection_SOME: reaction ? {
                        node: {
                            clerkId: userId
                        },
                        edge: reaction ? {
                            type: reaction
                        } : {}
                    } : {}
                }
            } satisfies UserHasLessonsConnectionWhere,
            // Add pagination parameters
            first: 10 * currentPage, // Load cumulative lessons
        }
    });
    console.log(data)

    if (!data.users[0]?.hasLessonsConnection) return <div>No lessons found</div>

    const groupedLessons = data.users[0]?.hasLessonsConnection.edges.reduce((acc, lessonConnection) => {
        const lesson = lessonConnection.node;

        // Skip lessons without a topic
        if (!lesson.hasTopic) return acc;

        // Group lessons by topic title
        const topicTitle = lesson.hasTopic.title;
        acc[topicTitle] ??= [];
        acc[topicTitle].push(lesson);

        return acc;
    }, {} as Record<string, Lesson[]>);

    // Sort topics by number of lessons (descending)
    const sortedLessonByTopic = Object.entries(groupedLessons)
        .sort(([, a], [, b]) => b.length - a.length)
        .reduce((sortedAcc, [key, value]) => {
            sortedAcc[key] = value;
            return sortedAcc;
        }, {} as Record<string, Lesson[]>)


    return (
        <div className='flex flex-col gap-10 w-full items-start'>
            <FilterBar />
            <div className='flex flex-wrap gap-4 justify-center'>
                {Object.entries(sortedLessonByTopic).map(([topic, lessons]) => (
                    <TopicSection
                        key={topic}
                        lessons={lessons}
                        topic={lessons[0].hasTopic}
                    />
                ))}
            </div>
            {/* hasNextPage && (
            //         <Button onClick={loadMoreLessons} variant="outline">
            //             Load More
            //         </Button>
            ) */}
        </div>
    )
}