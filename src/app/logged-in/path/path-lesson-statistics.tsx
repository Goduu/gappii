import { Badge } from "@/components/ui/badge"
import { Lesson } from "@/ogm-types"
import { cn } from "@/lib/utils"
import { CalendarCheck, MessageCircleQuestion, Target } from "lucide-react"
import { motion } from "framer-motion"

type PathLessonStatisticsProps = {
    lesson: Lesson
}
export const PathLessonStatistics = ({ lesson }: PathLessonStatisticsProps) => {

    const progress = Math.min(10 + lesson.title.length * 3, 100)

    return (
        <div
            key={'details' + lesson.id}
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
            <div className="absolute bottom-0 left-0 right-0">
                <div className="relative h-1 w-full bg-muted/50">
                    <motion.div
                        className={cn(
                            "absolute left-0 top-0 h-full",
                            progress < 50 && "bg-red-500",
                            progress >= 50 && "bg-yellow-500",
                            progress >= 80 && "bg-green-500",
                        )}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>
        </div>
    )
}