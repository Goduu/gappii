import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { CommunityCardReactions } from './community-card-reactions'
import { Button } from '../ui/button'
import { Copy, Play, Plus } from 'lucide-react'
import { Lesson } from '@/ogm-resolver/ogm-types'

interface CommunityCardProps {
  lesson: Lesson
  onPlay: (lessonId: string) => void
  onCopy: (lessonId: string) => void
  onAdd: (lessonId: string) => void
}

export const CommunityCard = ({ lesson, onPlay, onCopy, onAdd }: CommunityCardProps) => {
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
          <span className="text-sm bg-primary/10 px-2 py-1 rounded">
            {lesson.hasTopic.title}
          </span>
          <span className="text-sm bg-primary/10 px-2 py-1 rounded">
            {lesson.hasSubtopic.title}
          </span>
        </div>
        <CommunityCardReactions lesson={lesson} />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 sm:gap-0 sm:justify-between">
        <Button variant="ghost" size="sm" onClick={() => onPlay(lesson?.id ?? "")}>
          <Play className="w-4 h-4 mr-2" /> Play
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onCopy(lesson?.id ?? "")}>
          <Copy className="w-4 h-4 mr-2" /> Copy
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onAdd(lesson?.id ?? "")}>
          <Plus className="w-4 h-4 mr-2" /> Add
        </Button>
      </CardFooter>
    </Card>
  )
} 