"use client"
import React, { FC } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Crown, ThumbsDown, ThumbsUp } from "lucide-react"
import { LessonFilter } from './filter-hooks';
import { LessonReaction } from './lesson-reactions';

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

  return (
    <div className='flex gap-4 items-center'>
      <div className='font-bold text-gray-500'>
        Filters:
      </div>
      <ToggleGroup type="single">
        <ToggleGroupItem value={"DISLIKED"} onClick={() => handleToggle("DISLIKED")}><ThumbsDown /></ToggleGroupItem>
        <ToggleGroupItem value={"LIKED"} onClick={() => handleToggle("LIKED")}><ThumbsUp /></ToggleGroupItem>
        <ToggleGroupItem value={"CROWNED"} onClick={() => handleToggle("CROWNED")}><Crown /></ToggleGroupItem>
      </ToggleGroup>
    </div >
  );
};

