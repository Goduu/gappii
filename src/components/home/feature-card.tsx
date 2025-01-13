"use client"
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

interface FeatureCardProps {
    title: string
    description: string
    index: number
    icon: ReactNode
}

export const FeatureCard = ({ title, description, index, icon }: FeatureCardProps) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 }}
            className="p-4 sm:p-6 rounded-lg bg-card/50 backdrop-blur-sm 
                border border-border/50 hover:border-primary/50 
                transition-all duration-300
                w-full max-w-sm"
        >
            <div className='flex items-center gap-2'>
                {icon}
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{title}</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        </motion.div>
    )
} 