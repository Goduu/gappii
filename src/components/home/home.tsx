import React from 'react'
import { Logo } from '../logo'
import { TypingText } from './typing-text'
import { HotTopics } from './hot-topics'
import { Badge } from '../ui/badge'
import { CreateTopic } from './create-topic'

export const HomePage = () => {
    return (
        <div className="flex flex-col items-center gap-8 sm:gap-36 justify-center w-screen">
            <div className='items-center flex flex-col'>
                <Logo className='w-72' />
                <div className='flex flex-wrap gap-2 md:gap-0 flex-col md:flex-row'>
                    <TypingText text={'Fill you knowledge'} className='text-4xl' />
                    <Badge className='text-4xl select-none -mt-1 group  animate-pulse hover:animate-none ease-in-out relative'>
                        <span className='md:text-opacity-0 text-gray-50 hover:text-opacity-100 transition-all duration-1000'>
                            gaps
                        </span>
                        {/* <Pointer className='w-10 h-10 ping absolute opacity-15 text-orange-500 fill-white right-0 -bottom-8 group-hover:opacity-0 duration-1000 transition-all' /> */}
                    </Badge>
                </div>
            </div>
            <HotTopics />
            <CreateTopic />

        </div>
    )
}
