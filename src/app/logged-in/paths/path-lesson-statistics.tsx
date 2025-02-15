import { Badge } from "@/components/ui/badge"
import { Lesson } from "@/ogm-types"
import { cn } from "@/lib/utils"
import { CalendarCheck, MessageCircleQuestion, Play, Target } from "lucide-react"
import { AdvancementBarCard } from "@/components/ui/advancementbar"
import Link from "next/link"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"

type PathLessonStatisticsProps = {
    lesson: Lesson
}
export const PathLessonStatistics = ({ lesson }: PathLessonStatisticsProps) => {

    return (
        <AdvancementBarCard
            variant="status"
            progress={lesson.completionPercentage || 1}
            className="relative group flex flex-col border p-4 w-full rounded-lg hover:bg-slate-50"
        >
            <div className='flex flex-col gap-2'>
                <div>
                    {lesson.title}
                </div>
                <div className='flex gap-2'>
                    <div className='mr-auto flex items-center gap-2'>
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
                    <div className='ml-auto flex items-center gap-2'>
                        <Link href={routes.lesson(lesson?.id || '')}>
                            <Button variant="default" size="icon" title="Start Lesson">
                                <Play size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AdvancementBarCard>
    )
}