import { Skeleton } from "@/components/ui/skeleton"
import { CircleX } from "lucide-react"

export const NavigationSkeleton = () => {
    return (
        <div className="px-4 sm:px-0 flex items-center justify-between">
            <div className="text-base sm:text-lg font-bold flex items-center gap-2 text-ellipsis overflow-hidden">
                <Skeleton className="h-6 w-32" /> 
                <span className="text-muted-foreground">/</span> 
                <Skeleton className="h-6 w-24" />
            </div>
            <CircleX className="h-5 w-5 text-muted-foreground" />
        </div>
    )
} 