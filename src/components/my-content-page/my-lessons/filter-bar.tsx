"use client"
import React, { FC } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { Crown, ThumbsUp } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { LessonReaction } from '../types';
import { Whisper } from '@/components/ui/tooltip';


export const FilterBar: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const urlReaction = searchParams.get('lessonReaction');

  const handleToggle = (reaction: LessonReaction) => {
    const params = new URLSearchParams(searchParams);

    if (reaction && reaction !== urlReaction) {
      params.set('lessonReaction', reaction);
    } else {
      params.delete('lessonReaction');
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }


  return (
    <div className='flex gap-4 items-center'>
      <ToggleGroup type="single">
        <Whisper text="Filter: Liked Lessons" asChild>
          <ToggleGroupItem value={"LIKED"} onClick={() => handleToggle("LIKED")}
            aria-checked={urlReaction === "LIKED"}
            data-state={urlReaction === "LIKED" ? "on" : "off"}
          >
            <ThumbsUp />
          </ToggleGroupItem>
        </Whisper>
        <Whisper text="Filter: Crowned Lessons" asChild >
          <ToggleGroupItem value={"CROWNED"} onClick={() => handleToggle("CROWNED")}
            aria-checked={urlReaction === "CROWNED"}
            data-state={urlReaction === "CROWNED" ? "on" : "off"}
          >
            <Crown />
          </ToggleGroupItem>
        </Whisper>
      </ToggleGroup>
    </div >
  );
};

