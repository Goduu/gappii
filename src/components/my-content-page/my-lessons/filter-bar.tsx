"use client"
import React, { FC } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { Crown, Guitar, ThumbsDown, ThumbsUp, X } from "lucide-react"
import { LessonFilter } from './filter-hooks';
import { LessonReaction } from './lesson-reactions';
import { Badge } from '../../ui/badge';

type FilterBarProps = {
  setFilter: (filters: LessonFilter) => void
  filter: LessonFilter
}

export const FilterBar: FC<FilterBarProps> = ({ setFilter, filter }) => {

  const handleToggle = (reaction: LessonReaction) => {
    if (reaction === filter.reaction) {
      setFilter({ ...filter, reaction: null })
    } else {
      setFilter({ ...filter, reaction })
    }
  }
  const removeTopic = () => {
    setFilter({ ...filter, topic: null })
  }
  const removeSubtopic = () => {
    setFilter({ ...filter, subtopic: null })
  }

  return (
    <div className='flex gap-4 items-center'>
      <div className='font-bold text-gray-500'>
        Filters: {filter.reaction ? filter.reaction : "None"}
      </div>
      <ToggleGroup type="single">
        <ToggleGroupItem value={"DISLIKED"} onClick={() => handleToggle("DISLIKED")}><ThumbsDown /></ToggleGroupItem>
        <ToggleGroupItem value={"LIKED"} onClick={() => handleToggle("LIKED")}><ThumbsUp /></ToggleGroupItem>
        <ToggleGroupItem value={"CROWNED"} onClick={() => handleToggle("CROWNED")}><Crown /></ToggleGroupItem>
        <ToggleGroupItem value={"CROWNED"} onClick={() => handleToggle("CROWNED")}><Guitar /></ToggleGroupItem>
      </ToggleGroup>
      {filter.topic?.title &&
        <Badge variant="outline" className='flex gap-2'>
          Topic: {filter.topic?.title || ""}
          <X className='w-3 cursor-pointer' onClick={removeTopic} />
        </Badge>}
      {filter.subtopic?.title &&
        <Badge variant="outline" className='flex gap-2'>
          Subtopic: {filter.subtopic?.title || ""}
          <X className='w-3 cursor-pointer' onClick={removeSubtopic} />
        </Badge>}
    </div >
  );
};

