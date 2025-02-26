"use client"

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { ActivityHeatmap } from './activity-heatmap'
import { CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'

export const ActivityHistoryCard = () => {

    return (
        <div className='w-full max-w-[28rem] overflow-hidden bg-linear-to-br from-amber-500 to-muted/20'>
            <CardHeader className='pb-2 space-y-1 '>
                <motion.div
                    className='flex items-center gap-2'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative">
                        <CalendarDays size={24} className="text-white" />
                    </div>
                    <CardTitle className='text-lg text-white font-extrabold'>
                        Activity History
                    </CardTitle>
                </motion.div>
                <motion.p
                    className="text-sm text-white font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Your learning activity over the last 6 months
                </motion.p>
            </CardHeader>
            <CardContent className='p-0'>
                <motion.div
                    className='relative'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className='p-5 pb-7 '>
                        <ActivityHeatmap />
                    </div>
                </motion.div>
            </CardContent>
        </div>
    )
}
