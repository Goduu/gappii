import React, { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

type GappiiSpeechBubbleProps = {
    message?: string;
    show: boolean;
    className?: string;
}

export const GappiiSpeechBubble: FC<GappiiSpeechBubbleProps> = ({
    message,
    show,
    className
}) => {
    return (
        <AnimatePresence>
            {show && message && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    className={cn(
                        "absolute right-full -top-16 mr-2 p-2 bg-white rounded-lg shadow",
                        "w-80 text-xs h-14",
                        "before:content-[''] before:absolute before:right-[-8px]",
                        "before:bottom-1 before:border-8 before:border-transparent",
                        "before:border-l-white before:border-t-white",
                        "dark:bg-slate-800 dark:before:border-l-slate-800 dark:before:border-t-slate-800",
                        "flex items-center",
                        className
                    )}
                    style={{ zIndex: 51 }}
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    )
} 