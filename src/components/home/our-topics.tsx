"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Lesson, QueryLessonsArgs, Topic } from '@/ogm-resolver/ogm-types';
import { Badge } from '../ui/badge';
import { Flame } from 'lucide-react';
import { MdOutlineFiberNew } from './NewIcon';
import { useQuery } from '@apollo/client';
import { GET_HOT_LESSON } from '@/lib/gqls/lessonGQLs';

export const OurTopics = () => {

    const { data } = useQuery<{ hotLessons: Lesson[], newLessons: Lesson[] }>(GET_HOT_LESSON)

    return (
        <div className='flex flex-col w-96 md:w-[30rem] lg:w-[40rem] items-center relative'>
            <div className='w-24 absolute -left-10 h-full bg-white z-10 blur-md '></div>
            <Marquee className='overflow-visible' speed={40}>
                <div className='flex gap-2 overflow-visible'>
                    {data?.hotLessons.map(({ hasTopic, hasSubtopic }, i) => (
                        <div className=' p-5' key={i}>
                            <Badge className='relative flex overflow-visible text-xs sm:text-sm' variant="outline">
                                <span className='absolute -top-3 -right-4 text-xs z-20'>
                                    <Flame className='w-10 animate-ping absolute text-red-500 fill-red-500 opacity-50' />
                                    <Flame className='w-10 relative text-red-500 fill-red-500' />
                                </span>
                                {hasTopic.title} - {hasSubtopic.title}
                            </Badge>
                        </div>
                    ))}
                </div>
            </Marquee>
            <Marquee className='overflow-visible' speed={30}>
                <div className='flex gap-4 overflow-visible'>
                    {data?.newLessons.map(({ hasTopic, hasSubtopic }, i) => (
                        <div className='p-5' key={i}>
                            <Badge className='relative flex overflow-visible text-sm sm:text-md' variant="outline">
                                <span className='absolute -top-5 -right-4 text-xs z-20'>
                                    <MdOutlineFiberNew className='h-10 w-10 animate-ping absolute text-green-500 fill-green-500 opacity-50' />
                                    <MdOutlineFiberNew className='h-10 w-10 relative text-green-500 fill-green-500' />
                                </span>
                                {hasTopic.title} - {hasSubtopic.title}
                            </Badge>
                        </div>
                    ))}
                </div>
            </Marquee>
            <div className='w-24 absolute -right-10 h-full bg-white z-10 blur-md '></div>
        </div>

    );
};

const hotTopics: { topic: Partial<Topic>, subtopic: Partial<Topic>, status: "new" | "hot" | "default" }[] = [
    {
        topic: {
            title: 'Math',
        },
        subtopic: {
            title: 'Algebra',
        },
        status: 'hot'
    },
    {
        topic: {
            title: 'Language',
        },
        subtopic: {
            title: 'English',
        },
        status: 'new'
    },
    {
        topic: {
            title: 'Science',
        },
        subtopic: {
            title: 'Physics',
        },
        status: 'default'
    },
    {
        topic: {
            title: 'History',
        },
        subtopic: {
            title: 'World War II',
        },
        status: 'hot'
    },
    {
        topic: {
            title: 'Math',
        },
        subtopic: {
            title: 'Geometry',
        },
        status: 'new'
    },
    {
        topic: {
            title: 'Language',
        },
        subtopic: {
            title: 'Spanish',
        },
        status: 'default'
    },
    {
        topic: {
            title: 'Science',
        },
        subtopic: {
            title: 'Chemistry',
        },
        status: 'hot'
    },
    {
        topic: {
            title: 'History',
        },
        subtopic: {
            title: 'Ancient Rome',
        },
        status: 'new'
    }
]
