"use client"
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { Star, Clock, RotateCcw } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { LessonSearchBar } from '../lesson-card/lesson-searchbar'
import { SupportedLanguage } from '@/app/types'
import { LevelSelector } from '../learn-input/level-selector'
import { Button } from '../ui/button'
import { useMediaQuery } from '@/lib/use-media-query'
import { LanguageSelector } from '../learn-input/language-selector'

export const CommunityFilters = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const handleToggle = (toggle: "topRated" | "newest") => {
    const urlToggle = searchParams.get('toggle');

    if (toggle && toggle !== urlToggle) {
      params.set('toggle', toggle);
    } else {
      params.delete('toggle');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  const onLevelChange = (level: string | undefined) => {
    const currentLevel = params.get('level');

    if (level && level !== currentLevel) {
      params.set('level', level);
    } else {
      params.delete('level');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const onLanguageChange = (language: SupportedLanguage | undefined) => {
    const currentLanguage = params.get('language');

    if (language && language !== currentLanguage) {
      params.set('language', language);
    } else {
      params.delete('language');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const onResetFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('toggle');
    params.delete('level');
    params.delete('language');
    params.delete('search');
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full space-y-4">
      <div className='flex gap-4'>
        <LessonSearchBar />
        <Button className='flex items-center gap-2' variant='outline' onClick={onResetFilters}>
          <RotateCcw className="w-4 h-4" />
          {isDesktop && "Reset Filters"}
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <ToggleGroup
          type="single"
          className="flex flex-wrap gap-2"
          onValueChange={handleToggle}
          defaultValue={searchParams.get('toggle') || ''}>
          <ToggleGroupItem value="topRated" className="flex-1 sm:flex-none">
            <Star className="w-4 h-4 mr-2" /> Top Rated
          </ToggleGroupItem>
          <ToggleGroupItem value="newest" className="flex-1 sm:flex-none">
            <Clock className="w-4 h-4 mr-2" /> Newest
          </ToggleGroupItem>
        </ToggleGroup>
        <div className='flex gap-2'>
          <LevelSelector onLevelChange={onLevelChange} level={searchParams.get('level') || undefined} />
          <LanguageSelector onLanguageChange={onLanguageChange} language={searchParams.get('language') as SupportedLanguage || undefined} />
        </div>
      </div>
    </div>
  )
}
