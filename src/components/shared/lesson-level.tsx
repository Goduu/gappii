import React from 'react'
import { TbStar } from '../ui/customIcons/tb-star'
import { TbStars } from '../ui/customIcons/tb-stars'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type LessonLevelProps = {
    level: number
}
export const LessonLevel = ({ level }: LessonLevelProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div className='absolute left-4 bottom-5 z-10 border rounded-full w-7 aspect-square flex items-center justify-center'>
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
            </TooltipTrigger>
            <TooltipContent>
                <p>{level === 1 ? "Beginner" : level === 2 ? "Intermediate" : "Advanced"}</p>
            </TooltipContent>
        </Tooltip>
    )
}
