"use client"
import React from 'react'
import { Input } from '../ui/input'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { Star, Clock, Search } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';

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

  const onTextSearchChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // att to searchParams
    const params = new URLSearchParams(searchParams);

    // if the search term is empty, delete the search param
    if (e.target.value === '') {
      params.delete('search');
    } else {
      params.set('search', e.target.value);
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300)

  const onLevelChange = (level: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('level', level);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search lessons..."
          className="pl-10"
          onChange={onTextSearchChange}
        />
      </div>

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
            <SelectItem value="1">Level 1</SelectItem>
            <SelectItem value="2">Level 2</SelectItem>
            <SelectItem value="3">Level 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
} 