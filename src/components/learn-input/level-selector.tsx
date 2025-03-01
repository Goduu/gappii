import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { TbStar } from '../ui/customIcons/tb-star'
import { TbStars } from '../ui/customIcons/tb-stars'
import { LevelSelectorProps } from './types'
import { cn } from '@/lib/utils'
import { Whisper } from '../ui/tooltip'
import { StarOff } from 'lucide-react'

export const LevelSelector = ({ level, onLevelChange }: LevelSelectorProps) => {
    // Convert string level to number for display
    const numericLevel = level ? parseInt(level) : undefined

    return (
        <Popover>
            <Whisper text="Filter: Level" asChild>
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            "flex items-center justify-center size-10 aspect-square",
                            !!numericLevel && "bg-accent"
                        )}
                    >
                        {numericLevel === 1 ? (
                            <TbStar className="size-4" />
                        ) : numericLevel === 2 ? (
                            <div className="flex">
                                <TbStar className="size-4" />
                                <TbStar className="size-4" />
                            </div>
                        ) : numericLevel === 3 ? (
                            <TbStars className="!size-8" />
                        ) : (
                            <StarOff className="h-4 w-4" />
                        )}
                    </Button>
                </PopoverTrigger>
            </Whisper>
            <PopoverContent className="w-auto p-2">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium mb-1">Select Level</p>
                    <div className="grid grid-cols-2 gap-2">
                        <Button
                            variant={numericLevel === 1 ? "default" : "outline"}
                            size="sm"
                            className={cn("flex items-center gap-1",
                                numericLevel === 1 && "bg-primary text-primary-foreground"
                            )}
                            onClick={() => onLevelChange("1")}
                        >
                            <TbStar className="h-4 w-4" />
                            <span>Beginner</span>
                        </Button>

                        <Button
                            variant={numericLevel === 2 ? "default" : "outline"}
                            size="sm"
                            className={cn("flex items-center gap-1",
                                numericLevel === 2 && "bg-primary text-primary-foreground"
                            )}
                            onClick={() => onLevelChange("2")}
                        >
                            <div className="flex">
                                <TbStar className="h-4 w-4" />
                                <TbStar className="h-4 w-4" />
                            </div>
                            <span>Intermediate</span>
                        </Button>

                        <Button
                            variant={numericLevel === 3 ? "default" : "outline"}
                            size="sm"
                            className={cn("flex items-center gap-1",
                                numericLevel === 3 && "bg-primary text-primary-foreground"
                            )}
                            onClick={() => onLevelChange("3")}
                        >
                            <TbStars className="h-4 w-4" />
                            <span>Advanced</span>
                        </Button>
                        <Button
                            variant={numericLevel === undefined ? "default" : "outline"}
                            size="sm"
                            className={cn("flex items-center gap-1",
                                numericLevel === 3 && "bg-primary text-primary-foreground"
                            )}
                            onClick={() => onLevelChange(undefined)}
                        >
                            <StarOff className="h-4 w-4" />
                            <span>All</span>
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
