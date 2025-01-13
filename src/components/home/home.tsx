"use client"
import React from 'react'
import { OurTopics } from './our-topics'
import { CreateTopic } from './create-topic'
import { HeroContent } from './hero-content'
import { Blocks, ChartScatter, Users } from 'lucide-react'

const features = [
    {
        title: "Interactive Learning",
        icon: <Blocks className='w-6 h-6' />,
        description: "Engage with dynamic content and learn at your own pace"
    },
    {
        title: "Track Progress",
        icon: <ChartScatter className='w-6 h-6' />,
        description: "Monitor your learning journey with detailed analytics"
    },
    {
        title: "Community Driven",
        icon: <Users className='w-6 h-6' />,
        description: "Connect with learners and share knowledge"
    }
]

export const HomePage = () => {

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex items-center justify-center">
            <div className="flex flex-col items-center gap-8 sm:gap-24 w-full max-w-7xl mx-auto px-4 py-8 sm:py-24">
                <HeroContent features={features} />
                <CreateTopic />
                <OurTopics />
            </div>
        </div>
    )
}
