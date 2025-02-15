import { Badge } from "@/components/ui/badge"
import { Lesson } from "@/ogm-types"
import { cn } from "@/lib/utils"
import { CalendarCheck, MessageCircleQuestion, Play, Target } from "lucide-react"
import { AdvancementBarCard } from "@/components/ui/advancementbar"
import Link from "next/link"
import { routes } from "@/lib/routes"

type PathLessonStatisticsProps = {
    lesson: Lesson
}
export const PathLessonStatistics = ({ lesson }: PathLessonStatisticsProps) => {

    return (
        <AdvancementBarCard
            variant="status"
            progress={lesson.completionPercentage || 1}
            className="relative group flex flex-col border p-4 w-full rounded-lg hover:bg-slate-50 cursor-pointer"
        >
            <Link href={routes.lesson(lesson?.id || '')}>
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
                        <Badge variant="outline" title={lesson.hasActivitiesAggregate?.count + ' activities'} className={cn(
                            "flex items-center gap-2 py-2")}>
                            {lesson.hasActivitiesAggregate?.count} <MessageCircleQuestion size={16} />
                        </Badge>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-full h-full bg-accent opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="text-sm flex items-center gap-2 ">
                        <Play size={16} />
                        Start Lesson
                    </div>
                </div>
            </Link>
        </AdvancementBarCard>
    )
}