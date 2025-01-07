import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import { SubTopicSelectorProps } from './types'

export const SubTopicSelector = ({ subTopic, onRemove, onClick }: SubTopicSelectorProps) => (
    <div className='flex-col flex gap-1 w-1/2'>
        <p className='text-sm'>Subtopic:</p>
        <Badge variant="outline" className='flex items-center gap-2 h-8' onClick={onClick}>
            {subTopic ? (
                <>
                    {subTopic.label}
                    <Button size="icon" variant="ghost" onClick={onRemove} className='w-6 h-6'>
                        <X className='w-3 text-gray-500' />
                    </Button>
                </>
            ) : (
                <p className='text-gray-300 select-none'>Choose a subtopic</p>
            )}
        </Badge>
    </div>
) 