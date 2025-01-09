import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { CommunityCardReactions } from './community-card-reactions'
import { Lesson } from '@/ogm-resolver/ogm-types'
import { KeywordsBadgeDisplay } from '../ui/keywords-display'
import { CommunityCardActions } from './community-card-actions'

interface CommunityCardProps {
  lesson: Lesson
}

export const CommunityCard = ({ lesson }: CommunityCardProps) => {

  if (!lesson.id) return

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold truncate">{lesson.title}</h3>
          <span className="text-sm text-gray-500 whitespace-nowrap ml-2">
            Level {lesson.level}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-2">
          <KeywordsBadgeDisplay keywords={lesson.hasKeywords} level={lesson.level} />
        </div>
        <CommunityCardReactions lesson={lesson} />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 sm:gap-0 sm:justify-between">
        <CommunityCardActions lesson={lesson} />
      </CardFooter>
    </Card>
  )
} 