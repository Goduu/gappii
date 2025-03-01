"use client"
import React, { FC } from 'react'
import { Star } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PathReaction } from './types';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Whisper } from '@/components/ui/tooltip';


export const FilterButtons: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const urlReaction = searchParams.get('reaction');

  const handleToggle = (reaction: PathReaction) => {
    const params = new URLSearchParams(searchParams);

    if (reaction && reaction !== urlReaction) {
      params.set('reaction', reaction);
    } else {
      params.delete('reaction');
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='flex gap-4 items-center'>
      <ToggleGroup type="single" value={urlReaction || undefined}>
        <Whisper text="Filter: Favorite Paths" asChild>
          <ToggleGroupItem
            value="FAVORITED"
            onClick={() => handleToggle("FAVORITED")}
            aria-checked={urlReaction === "FAVORITED"}
            data-state={urlReaction === "FAVORITED" ? "on" : "off"}
          >
            <Star />
          </ToggleGroupItem>
        </Whisper>
      </ToggleGroup>
    </div >
  );
};

