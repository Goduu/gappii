import { LevelStar } from '../ui/level-star'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { LevelSelectorProps } from './types'

export const LevelSelector = ({ level, onLevelChange }: LevelSelectorProps) => {
    return (
        <Select
            onValueChange={(value) => onLevelChange(value || '')}
            value={level || ''}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Level</SelectLabel>
                    <SelectItem value="1"><LevelStar level={1} /></SelectItem>
                    <SelectItem value="2"><LevelStar level={2} /></SelectItem>
                    <SelectItem value="3"><LevelStar level={3} /></SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
