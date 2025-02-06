import { CalendarCheck, CircleFadingArrowUp, MessageCircleQuestion, Plus, SearchCheck, Target } from "lucide-react"

import { cn } from "@/lib/utils"
import { SubtopicsPie } from "./circular-chart"
import { Flower2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PathStone } from "./types"
import { PathLessonStatistics } from "./path-lesson-statistics"
import { Button } from "@/components/ui/button"

type PathDetailsProps = {
    path: PathStone
}

export const PathDetails = ({ path }: PathDetailsProps) => {
    return (
        <div className="flex flex-col items-center w-full gap-4">
            <div className="relative w-full aspect-square md:max-w-2xl">
                <div className="absolute inset-0 mt-8">
                    <SubtopicsPie
                        outerRadius={90}
                        innerRadius={67}
                        lessons={path.lessons || []}
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={cn(
                        "bg-green-500 rounded-full flex items-center justify-center",
                        "w-20 h-20 md:w-32 md:h-32",
                        "border-b-8 border-green-600"
                    )}>
                        <Flower2 className="text-white w-10 h-10 md:w-16 md:h-16" />
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-start w-full">
                <Button variant="outline">
                    <CircleFadingArrowUp size={16} />
                    Improve Path
                </Button>
                <Button variant="outline">
                    <SearchCheck size={16} />
                    Correct Mistakes
                </Button>
            </div>
            <div className="w-full space-y-4">
                <h3 className="text-lg font-semibold px-4">Lessons Statistics</h3>
                <div className="flex flex-wrap gap-3 px-4">
                    {path.lessons.map((lesson) => (
                        <PathLessonStatistics key={lesson.id} lesson={lesson} />
                    ))}
                    <div title="Add Lesson" className="flex flex-col border p-4 border-dashed justify-center items-center w-full rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Plus size={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}