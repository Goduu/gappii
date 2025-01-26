"use client"
import React from 'react'
import { OurTopics } from './our-topics'
import { CreateTopic } from './create-topic'
import { HeroContent } from './hero-content'

export const HomePage = () => {

    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="flex flex-col items-center gap-8 sm:gap-24 w-full max-w-7xl mx-auto py-8 sm:py-24">
                <HeroContent />
                <CreateTopic />
                <OurTopics />
            </div>
        </div>
    )
}
