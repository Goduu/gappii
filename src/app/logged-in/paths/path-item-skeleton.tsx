import { Skeleton } from "@/components/ui/skeleton"

export const PathItemSkeleton = () => {
    return (
        <div className="pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1 w-full justify-center items-center flex gap-8">
                <Skeleton className='w-56 h-60' />
                <Skeleton className='w-56 h-60' />
            </div>
        </div>
    )
}
