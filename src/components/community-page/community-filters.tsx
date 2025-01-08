import React from 'react'
import { Input } from '../ui/input'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { Flame, Star, Clock, Search } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface CommunityFiltersProps {
  onSearch: (term: string) => void
  onSortChange: (sort: 'trending' | 'top' | 'newest') => void
  onLevelChange: (level: string) => void
}

export const CommunityFilters = ({ onSearch, onSortChange, onLevelChange }: CommunityFiltersProps) => {
  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
        <Input 
          placeholder="Search lessons..." 
          className="pl-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <ToggleGroup type="single" className="flex flex-wrap gap-2">
          <ToggleGroupItem value="trending" className="flex-1 sm:flex-none">
            <Flame className="w-4 h-4 mr-2" /> Trending
          </ToggleGroupItem>
          <ToggleGroupItem value="top" className="flex-1 sm:flex-none">
            <Star className="w-4 h-4 mr-2" /> Top Rated
          </ToggleGroupItem>
          <ToggleGroupItem value="newest" className="flex-1 sm:flex-none">
            <Clock className="w-4 h-4 mr-2" /> Newest
          </ToggleGroupItem>
        </ToggleGroup>

        <Select onValueChange={onLevelChange}>
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