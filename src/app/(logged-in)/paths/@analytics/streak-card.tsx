"use client"

import React, { useState } from 'react'
import { Streak } from '@/ogm-types'
import { isToday, isYesterday } from '@/lib/utils'
import { AnayliticCard } from './analytic-card'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { ActivityHistoryCard } from '@/components/my-content-page/my-lessons/my-activity/activity-history-card'

type StreakCardProps = {
  streak?: Streak
}

export const StreakCard = ({ streak }: StreakCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const completedToday = streak?.lastActivityDate ? isToday(streak.lastActivityDate) : false
  const completedYesterday = streak?.lastActivityDate ? isYesterday(streak.lastActivityDate) : false

  const currentStreak = !completedYesterday && !completedToday ? 0 : streak?.streakCount || 0

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger asChild>
        <div
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={(e) => {
            const relatedTarget = e.relatedTarget as HTMLElement
            if (!relatedTarget?.closest('[data-popover-content]')) {
              setIsOpen(false)
            }
          }}>
          <AnayliticCard indicator='streak' number={currentStreak} highlight={completedToday} />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className='p-0 border-none rounded-xl overflow-hidden z-30 outline-none w-full'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        data-popover-content
      // sideOffset={5}
      >
        <div className='bg-amber-500 z-40'>
          <ActivityHistoryCard />
        </div>
      </PopoverContent>
    </Popover>
  )
}
