"use client"
import React, { FC } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { Crown, ThumbsUp, X } from "lucide-react"
import { LessonReaction } from './lesson-reactions';
import { Badge } from '../../ui/badge';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export const FilterBar: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const topic = searchParams.get('topic')
  const subtopic = searchParams.get('subtopic')
  const urlReaction = searchParams.get('reaction');

  const handleToggle = (reaction: LessonReaction) => {
    const params = new URLSearchParams(searchParams);

    if (reaction && reaction !== urlReaction) {
      params.set('reaction', reaction);
    } else {
      params.delete('reaction');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  const removeTopic = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('topic');
    replace(`${pathname}?${params.toString()}`);
  }
  const removeSubtopic = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('subtopic');
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='flex gap-4 items-center'>
      <div className='font-bold text-gray-500'>
        Filters:
      </div>
      <ToggleGroup type="single">
        <ToggleGroupItem value={"LIKED"} onClick={() => handleToggle("LIKED")}><ThumbsUp /></ToggleGroupItem>
        <ToggleGroupItem value={"CROWNED"} onClick={() => handleToggle("CROWNED")}><Crown /></ToggleGroupItem>
      </ToggleGroup>
      {topic &&
        <Badge variant="outline" className='flex gap-2'>
          Topic: {topic || ""}
          <X className='w-3 cursor-pointer' onClick={removeTopic} />
        </Badge>}
      {subtopic &&
        <Badge variant="outline" className='flex gap-2'>
          Subtopic: {subtopic || ""}
          <X className='w-3 cursor-pointer' onClick={removeSubtopic} />
        </Badge>}
    </div >
  );
};

