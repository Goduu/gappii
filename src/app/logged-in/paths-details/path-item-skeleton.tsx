import { Button } from "@/components/ui/button"
import { PageTitle } from "@/components/ui/page-title"
import { Skeleton } from "@/components/ui/skeleton"
import { Plus } from "lucide-react"

export const PathItemSkeleton = () => {
    return (
        <div className='w-full md:px-5 lg:px-10 xl:px-20 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <PageTitle title="Paths" />
                <Button disabled variant="outline">
                    <Plus size={16} className="mr-2" />
                    Add Path
                </Button>
            </div>
            <div className='w-full items-center justify-center flex flex-col gap-10 overflow-visible px-10'>
                <div
                    className='w-full'
                >
                    <div className='ml-5 flex gap-7'>
                        <Skeleton className='w-56 h-60 rounded-lg' />
                        <Skeleton className='w-56 h-60 rounded-lg hidden md:block' />
                    </div>
                </div>
            </div>
        </div>
    )
}
