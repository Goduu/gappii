"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Topic } from '@/ogm-resolver/ogm-types';
import { Badge } from '../ui/badge';
import { Flame } from 'lucide-react';
import { MdOutlineFiberNew } from './NewIcon';

export const HotTopics = () => {

    return (
        <div className='flex flex-col gap-4 w-96 md:w-[30rem] lg:w-[40rem] items-center border rounded-lg p-10'>
            <div className='text-3xl '>
                Check one of our topics
            </div>
            <Marquee className='overflow-visible'>
                <div className='flex gap-4 overflow-visible'>
                    {hotTopics.map(({ topic, subtopic, status }, i) => (
                        <div className=' p-5'>
                            <Badge key={i} className='relative flex overflow-visible text-2xl' variant="outline">
                                {status === 'hot' ?
                                    <span className='absolute -top-3 -right-4 text-xs z-20'>
                                        <Flame className='w-10 animate-ping absolute text-red-500 fill-red-500 opacity-50' />
                                        <Flame className='w-10 relative text-red-500 fill-red-500' />
                                    </span>
                                    :
                                    status === 'new' ?
                                        <span className='absolute -top-5 -right-4 text-xs z-20'>
                                            <MdOutlineFiberNew className='h-10 w-10 animate-ping absolute text-green-500 fill-green-500 opacity-50' />
                                            <MdOutlineFiberNew className='h-10 w-10 relative text-green-500 fill-green-500' />
                                        </span>
                                        : null}

                                {topic.title} - {subtopic.title}
                            </Badge>
                        </div>
                    ))}
                </div>
            </Marquee>
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
