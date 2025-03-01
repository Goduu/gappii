"use client"
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { Clock, Rocket } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SupportedLanguage } from '@/app/types'
import { Whisper } from '../ui/tooltip'
import { LevelSelector } from '../learn-input/level-selector'
import { LanguageSelector } from '../learn-input/language-selector'
import { Separator } from '../ui/separator'

export const CommunityFilters = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

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
    if (language === undefined || language === currentLanguage) {
      params.delete('language');
    } else {
      params.set('language', language);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <ToggleGroup
          type="single"
          className="flex gap-2"
          onValueChange={handleToggle}
          defaultValue={searchParams.get('toggle') || ''}>
          <Whisper text="Sort: Top Rated" asChild>
            <ToggleGroupItem
              value="topRated"
              className="flex-1 sm:flex-none"
              aria-checked={searchParams.get('toggle') === 'topRated'}
              data-state={searchParams.get('toggle') === 'topRated' ? 'on' : 'off'}>
              <Rocket className="w-4 h-4" />
            </ToggleGroupItem>
          </Whisper>
          <Whisper text="Sort: Newest" asChild>
            <ToggleGroupItem
              value="newest"
              className="flex-1 sm:flex-none"
              aria-checked={searchParams.get('toggle') === 'newest'}
              data-state={searchParams.get('toggle') === 'newest' ? 'on' : 'off'}>
              <Clock className="w-4 h-4" />
            </ToggleGroupItem>
          </Whisper>
        </ToggleGroup>
        <Separator orientation="vertical" className="h-4" />
        <LevelSelector onLevelChange={onLevelChange} level={searchParams.get('level') || undefined} />
        <LanguageSelector onLanguageChange={onLanguageChange} language={searchParams.get('language') as SupportedLanguage | undefined} />
      </div>
    </div>
  )
}
