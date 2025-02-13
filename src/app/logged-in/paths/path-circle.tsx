import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Path } from "@/ogm-types"
import { getTailwindBgColor500, getTailwindBorderColor600 } from "@/components/ui/color-picker/colors-list"
import { getIconFromLabel } from "@/components/ui/icon-picker/icon-list"
import { cloneElement } from "react"

type PathCircleProps = {
    path?: Path
    isSelected: boolean
    size: 'sm' | 'md' | 'lg'
}
export const PathCircle = ({ path, isSelected, size = 'md' }: PathCircleProps) => {
    if (!path) return
    const icon = path?.icon && getIconFromLabel(path.icon)

    return (
        <div key={path.id} className='flex flex-col items-center justify-center w-44 gap-2 group'>
            <div
                className={cn('flex flex-col items-center justify-center mt-[30px]',
                    'rounded-full aspect-square text-white',
                    'border-b-8 cursor-pointer',
                    'transition-all duration-1000 ease-in-out z-20',
                    getBadgeSizeClass(size),
                    isSelected && 'scale-105 border-b-2',
                    path.color && getTailwindBgColor500(path.color),
                    path.color && getTailwindBorderColor600(path.color)

                )}
            >
                <div className={cn("text-white", getIconSizeClass(size))} >
                    {icon && cloneElement(icon, { className: "w-full h-full" })}
                </div>
            </div>
            <Badge variant="outline" className={cn(
                isSelected && 'mt-7',
                getTextSizeClass(size),
                'transition-all duration-1000 ease-in-out',
                'items-center justify-center flex w-full',
                'text-center'
            )}>
                <span className="mx-auto">{path.title}</span>
            </Badge>
        </div>
    )
}

const getTextSizeClass = (size: 'sm' | 'md' | 'lg') => {
    switch (size) {
        case 'sm':
            return 'text-sm'
        case 'md':
            return 'text-base'
        case 'lg':
            return 'text-lg'
    }
}

const getIconSizeClass = (size: 'sm' | 'md' | 'lg') => {
    switch (size) {
        case 'sm':
            return 'w-9 h-9 md:w-10 md:h-10'
        case 'md':
            return 'w-10 h-10 md:w-12 md:h-12'
        case 'lg':
            return 'w-12 h-12 md:w-14 md:h-14'
    }
}

const getBadgeSizeClass = (size: 'sm' | 'md' | 'lg') => {
    switch (size) {
        case 'sm':
            return 'w-16'
        case 'md':
            return 'w-20'
        case 'lg':
            return 'w-24'
    }
}
