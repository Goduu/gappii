import React from 'react'
import { Logo } from '../logo'
import { TypingText } from './typing-text'
import { OurTopics } from './our-topics'
import { Badge } from '../ui/badge'
import { CreateTopic } from './create-topic'

export const HomePage = () => {
    return (
        <div className="flex flex-col items-center gap-8 sm:gap-24 justify-center w-screen">
            <div className='items-center flex flex-col gap-4'>
                <Logo className='w-32 sm:w-44' />
                <div className='flex flex-wrap gap-2 md:gap-0 flex-col md:flex-row items-center'>
                    <TypingText text={'Fill you knowledge'} className='text-2xl sm:text-4xl' />
                    <Badge className='text-2xl sm:text-4xl select-none -mt-1 group  animate-pulse hover:animate-none ease-in-out relative w-fit'>
                        <span className='md:text-opacity-0 text-gray-50 hover:text-opacity-100 transition-all duration-1000'>
                            gaps
                        </span>
                    </Badge>
                </div>
                <OurTopics />
                <CreateTopic />
            </div>
        </div>
    )
}
