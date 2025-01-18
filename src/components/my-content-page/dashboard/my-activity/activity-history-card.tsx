"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { ActivityHeatmap } from './activity-heatmap'
import { CalendarDays, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export const ActivityHistoryCard = () => {

    return (
        <Card className='w-full max-w-[28rem] overflow-hidden bg-gradient-to-br from-background to-muted/20'>
            <CardHeader className='pb-2 space-y-1'>
                <motion.div
                    className='flex items-center gap-2'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative">
                        <CalendarDays size={24} className="text-green-500" />
                        <motion.div
                            className="absolute -top-1 -right-1"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles className="h-3 w-3 text-yellow-500" />
                        </motion.div>
                    </div>
                    <CardTitle className='text-lg font-medium bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>
                        Activity History
                    </CardTitle>
                </motion.div>
                <motion.p
                    className="text-sm text-muted-foreground"
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
                    <div className='pt-4 pl-2'>
                        <ActivityHeatmap />
                    </div>
                </motion.div>
            </CardContent>
        </Card>
    )
}
