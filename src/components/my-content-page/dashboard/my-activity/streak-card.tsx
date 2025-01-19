"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Flame, Sparkles } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

type StreakCardProps = {
  streak: number
  completedToday: boolean
}

export const StreakCard = ({ streak, completedToday }: StreakCardProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-to-br from-background to-muted/20 relative">
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <Flame size={24} className="text-orange-500" />
            <motion.div
              className="absolute -top-1 -right-1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-3 w-3 text-yellow-500" />
            </motion.div>
          </motion.div>
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Current Streak
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2 h-full">
        <div className="flex flex-col ">
          <div className="flex items-baseline gap-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={clsx(
                "text-7xl font-bold ",
                { "text-orange-500": completedToday },
                { "text-neutral-500": !completedToday }
              )}>{streak}</span>
              {completedToday && (
                <motion.div
                  className="absolute -top-1 -right-1"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                </motion.div>
              )}
            </motion.div>
            <span className="text-sm text-muted-foreground">days</span>
          </div>
          <motion.p
            className="text-sm text-muted-foreground mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {getSentence(streak)}
          </motion.p>
        </div>
      </CardContent>
    </Card>
  )
}

const getSentence = (streak: number) => {
  if (streak > 10) {
    return "You're doing great! Keep it up!"
  }
  if (streak > 1) {
    return "You're on a roll! Keep it up!"
  }
  return "It's never too late to start!"
}