import { Badge } from "@/components/ui/badge"
import { Lesson } from "@/ogm-types"
import { cn } from "@/lib/utils"
import { CalendarCheck, MessageCircleQuestion, Target } from "lucide-react"
import { motion } from "framer-motion"
import { AdvancementBarCard } from "@/components/ui/advancementbar"

type PathLessonStatisticsProps = {
    lesson: Lesson
}
export const PathLessonStatistics = ({ lesson }: PathLessonStatisticsProps) => {

    const progress = Math.min(10 + lesson.title.length * 3, 100)

    return (
        <AdvancementBarCard
            variant="status"
            progress={progress}
            className="relative flex flex-col border p-4 w-full rounded-lg hover:bg-slate-50 cursor-pointer"
        >
            <div className='flex flex-col gap-2'>
                <div>
                    {lesson.title}
                </div>
                <div className='ml-auto flex items-center gap-2'>
                    <Badge variant="outline" title={"8 times completed"} className={cn(
                        "flex items-center gap-2 py-2")}>
                        8 <CalendarCheck size={16} />
                    </Badge>
                    <Badge variant="outline" title={"52% accuracy"} className={cn(
                        "flex items-center gap-2 py-2")}>
                        56.2% <Target size={16} />
                    </Badge>
                    <Badge variant="outline" title={lesson.hasActivities?.length + ' activities'} className={cn(
                        "flex items-center gap-2 py-2")}>
                        {lesson.hasActivities?.length} <MessageCircleQuestion size={16} />
                    </Badge>
                </div>
            </div>
        </AdvancementBarCard>
    )
}