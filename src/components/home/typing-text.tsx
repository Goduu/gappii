"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TypingTextProps {
    text: string
    className?: string
}

export const TypingText = ({ text, className }: TypingTextProps) => {
    return (
        <motion.span
            className={cn('whitespace-nowrap', className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            {text}
        </motion.span>
    )
}
