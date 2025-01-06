"use client"
import { motion } from 'framer-motion'
import React from 'react'

interface FeatureCardProps {
    title: string
    description: string
    index: number
}

export const FeatureCard = ({ title, description, index }: FeatureCardProps) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-4 sm:p-6 rounded-lg bg-card/50 backdrop-blur-sm 
                border border-border/50 hover:border-primary/50 
                transition-all duration-300
                w-full max-w-sm"
        >
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        </motion.div>
    )
} 