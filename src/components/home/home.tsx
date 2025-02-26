"use client"
import React from 'react'
import { OurTopics } from './our-topics'
import { HeroContent } from './hero-content'
import { LearnInput } from '../learn-input/learn-input'
import { HomeButtons } from './home-buttons'

export const HomePage = () => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full">
            <HomeButtons />
            <div className="flex flex-col items-center gap-8 sm:gap-24 w-full max-w-7xl mx-auto py-8 sm:py-24">
                <HeroContent />
                <LearnInput />
                <OurTopics />
            </div>
        </div>
    )
}
