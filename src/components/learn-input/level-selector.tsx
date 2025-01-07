import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { LevelSelectorProps } from './types'

export const LevelSelector = ({ level, onLevelChange }: LevelSelectorProps) => (
    <div className='flex-col flex gap-1'>
        <p className='text-sm'>Level:</p>
        <ToggleGroup type="single" variant="outline" value={level} onValueChange={onLevelChange}>
            <ToggleGroupItem value="1" aria-label="Beginner" className='text-xs h-8'>
                Beg
            </ToggleGroupItem>
            <ToggleGroupItem value="2" aria-label="Intermediate" className='text-xs h-8'>
                Mid
            </ToggleGroupItem>
            <ToggleGroupItem value="3" aria-label="Advanced" className='text-xs h-8'>
                Adv
            </ToggleGroupItem>
        </ToggleGroup>
    </div>
) 