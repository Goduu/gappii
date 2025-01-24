"use client"
import { motion } from 'framer-motion'
import { TypingText } from './typing-text'
import { Badge } from '../ui/badge'
import { FeatureCard } from './feature-card'
import { Blocks, ChartScatter, Users } from 'lucide-react'
import Image from 'next/image'

export const HeroContent = () => {
    return (
        <div className='w-full flex flex-col items-center gap-4 sm:gap-6 justify-center'>

            <Image src={'/logo.svg'} alt='logo' width={2386} height={2386} className='w-44 sm:w-80 hover:scale-105 transition-transform' />
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

                <div className="w-full flex gap-4 flex-wrap items-center justify-center ">
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