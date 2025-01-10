"use client"
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { Star, Clock } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { LessonSearchBar } from '../shared/lesson-searchbar'
import { TbStar } from '../ui/customIcons/tb-star'
import { TbStars } from '../ui/customIcons/tb-stars'

export const CommunityFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const urlReaction = searchParams.get('reaction');

  const handleToggle = (toggle: "topRated" | "newest") => {
    const params = new URLSearchParams(searchParams);

    if (toggle && toggle !== urlReaction) {
      params.set('toggle', toggle);
    } else {
      params.delete('toggle');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  const onLevelChange = (level: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('level', level);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full space-y-4">
      <LessonSearchBar />

      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <ToggleGroup
          type="single"
          className="flex flex-wrap gap-2"
          onValueChange={handleToggle}
          defaultValue={searchParams.get('toggle') || ''}>
          {/* //need to rethink how to implement it
          <ToggleGroupItem value="trending" className="flex-1 sm:flex-none">
            <Flame className="w-4 h-4 mr-2" /> Trending
          </ToggleGroupItem> */}
          <ToggleGroupItem value="topRated" className="flex-1 sm:flex-none">
            <Star className="w-4 h-4 mr-2" /> Top Rated
          </ToggleGroupItem>
          <ToggleGroupItem value="newest" className="flex-1 sm:flex-none">
            <Clock className="w-4 h-4 mr-2" /> Newest
          </ToggleGroupItem>
        </ToggleGroup>

        <Select onValueChange={onLevelChange} defaultValue={searchParams.get('level') || ''}>
          <SelectTrigger className="w-full sm:w-32">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1" ><StarLevel level={1} /></SelectItem>
            <SelectItem value="2" ><StarLevel level={2} /></SelectItem>
            <SelectItem value="3" ><StarLevel level={3} /></SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

const StarLevel = ({ level }: { level: number }) => {
  return (
    <div className='flex gap-2 items-center'>
      <div className='border rounded-full w-7 aspect-square flex items-center justify-center'>
        {level === 1
          ? <TbStar className='w-3' /> : level === 2
            ?
            <div className='flex gap-0'>
              <TbStar className='w-3' />
              <TbStar className='w-3' />
            </div>
            : <TbStars className='p-[0.1rem]' />
        }
      </div>
      <p>{level === 1 ? "Beginner" : level === 2 ? "Intermediate" : "Advanced"}</p>
    </div>
  )
} 