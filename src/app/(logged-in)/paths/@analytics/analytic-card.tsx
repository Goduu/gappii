import { cn } from "@/lib/utils"
import { BookOpen, Flame, MessageCircle, LucideIcon } from "lucide-react"

type AnayliticCardProps = {
    indicator: 'streak' | 'lessons-created' | 'interactions'
    number: number
    highlight: boolean
}

type IndicatorConfig = {
    icon: LucideIcon
    color: string
    label: string
}

const INDICATOR_CONFIG: Record<AnayliticCardProps['indicator'], IndicatorConfig> = {
    'streak': {
        icon: Flame,
        color: 'text-orange-500',
        label: 'Streak'
    },
    'lessons-created': {
        icon: BookOpen,
        color: 'text-blue-500',
        label: 'Lessons Created'
    },
    'interactions': {
        icon: MessageCircle,
        color: 'text-violet-500',
        label: 'Interactions'
    }
}

export const AnayliticCard = ({ indicator, number, highlight }: AnayliticCardProps) => {
    const config = INDICATOR_CONFIG[indicator]
    const Icon = config.icon
    const label = config.label

    return (
        <div 
            title={label} 
            className='flex items-center gap-2 hover:bg-accent rounded-lg p-2 cursor-pointer outline-none focus:outline-none focus:ring-0'
        >
            <Icon className={config.color} size={24} />
            <span className={cn(
                "text-lg font-bold select-none",
                highlight ? config.color : "text-neutral-500"
            )}>
                {number}
            </span>
        </div>
    )
}
