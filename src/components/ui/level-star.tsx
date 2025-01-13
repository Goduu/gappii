import { TbStar } from "./customIcons/tb-star"
import { TbStars } from "./customIcons/tb-stars"

export const LevelStar = ({ level }: { level: number }) => {
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
                        : <div className='gap-0'><TbStars className="w-5" /></div>
                }
            </div>
            <p>{level === 1 ? "Beginner" : level === 2 ? "Intermediate" : "Advanced"}</p>
        </div>
    )
} 