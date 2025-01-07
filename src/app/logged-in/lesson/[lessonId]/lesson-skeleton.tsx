import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export const LessonSkeleton = () => {
  return (
    <div className="flex flex-col px-4 py-4 gap-2 sm:py-10 items-center">
      <div className="flex flex-col gap-2 sm:gap-4 w-full">
        <div className="px-4 sm:px-0 flex items-center justify-between">
          <div className="text-base sm:text-lg font-bold flex items-center gap-2 text-ellipsis overflow-hidden">
            <Skeleton className="h-6 w-32" />
            <span className="text-muted-foreground">/</span>
            <Skeleton className="h-6 w-24" />
          </div>
          <CircleX className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" />
          <div className="relative flex items-center justify-center flex-1">
            <span className="text-xs text-muted-foreground whitespace-nowrap absolute z-10">
              <Skeleton className="h-4 w-12" />
            </span>
            <Progress value={0} className="h-4 flex-1" />
          </div>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center min-h-0">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-4 p-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-32 w-full" />
            <div className="flex justify-end gap-2">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
