import { cn } from "@/lib/utils"
import { PathStone } from "./types"
import { Flower2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SubtopicsPie } from "./circular-chart"

export const PathCircle = ({ path, isSelected }: { path: PathStone, isSelected: boolean }) => {
    return (
        <div key={path.id} className='flex relative flex-col items-center justify-center w-full gap-2 group h-72'>
            <div
                className={cn('flex flex-col items-center justify-center w-20 mt-[30px]',
                    'bg-green-500 rounded-full aspect-square text-white',
                    'border-b-8 border-green-600 cursor-pointer',
                    'transition-all duration-1000 ease-in-out z-20',
                    isSelected && 'border-green-600 scale-105 border-b-2'
                )}
            >
                <Flower2 size={40} />
            </div>
            <Badge variant="outline" className={cn(
                isSelected && 'mt-8',
                'transition-all duration-1000 ease-in-out')}>
                {path.title}
            </Badge>
            {isSelected && <SubtopicsPie lessons={path.lessons} />}
        </div>
    )
}
