"use client"
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Logo } from '../logo'
import { TypingText } from './typing-text'
import { Badge } from '../ui/badge'
import { FeatureCard } from './feature-card'

interface HeroContentProps {
    features: {
        title: string
        description: string
        icon: ReactNode
    }[]
}

export const HeroContent = ({ features }: HeroContentProps) => {
    return (
        <div className='w-full flex flex-col items-center gap-4 sm:gap-6'>

            <Logo className='w-24 sm:w-44 hover:scale-105 transition-transform' />
            <motion.div
                className='w-full flex flex-col items-center gap-4 sm:gap-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >

                <div className='flex flex-wrap gap-1 sm:gap-2 md:gap-0 flex-col md:flex-row items-center'>
                    <TypingText
                        text={'Fill your knowledge'}
                        className='text-2xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80'
                    />
                    <Badge className='ml-2 p-2 text-2xl sm:text-3xl md:text-5xl select-none group relative w-fit 
                    bg-gradient-to-r from-primary/20 to-primary/30 hover:from-primary/30 hover:to-primary/40
                    transition-all duration-300'>
                        <span className='md:text-opacity-0 text-gray-50 hover:text-opacity-100 
                        transition-all duration-1000 group-hover:scale-110 inline-block'>
                            gaps
                        </span>
                    </Badge>
                </div>

                <p className="text-center text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-2">
                    Discover, learn, and master new topics with our interactive learning platform
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mt-4 sm:mt-8 place-items-center">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            index={index}
                            title={feature.title}
                            icon={feature.icon}
                            description={feature.description}
                        />
                    ))}
                </div>
            </motion.div>
        </div>

    )
} 