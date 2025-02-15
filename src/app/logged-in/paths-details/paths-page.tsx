"use client"
import React, { useState } from 'react'
import { PathCircle } from './path-circle'
import { PathDetails } from './path-details'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { CardContent } from '@/components/ui/card'
import { AdvancementBarCard } from '@/components/ui/advancementbar'
import { Separator } from '@/components/ui/separator'
import { PageTitle } from '@/components/ui/page-title'
import { PathEditFormDialog } from './path-edit-form-dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { PathItemSkeleton } from './path-item-skeleton'
import { useUserPathsAndLessons } from '@/lib/queries/useUserPaths'

export const PathsPage = () => {
    const [selected, setSelected] = useState<string | null>(null)
    const [api, setApi] = React.useState<CarouselApi>()
    const [, setCurrent] = React.useState(0)

    const { userPaths, userLessons, loading } = useUserPathsAndLessons()

    React.useEffect(() => {
        if (!api) {
            return
        }
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    if (loading) return <PathItemSkeleton />

    return (
        <div className='w-full md:px-5 lg:px-10 xl:px-20 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <PageTitle title="Paths" />
                <PathEditFormDialog>
                    <Button variant="outline">
                        <Plus size={16} className="mr-2" />
                        Add Path
                    </Button>
                </PathEditFormDialog>
            </div>
            <div className='w-full items-center justify-center flex flex-col gap-10 overflow-visible px-10'>
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "center",
                    }}
                    className='w-full'
                >
                    <CarouselContent className='-ml-1'>
                        {userPaths?.map((path) => (
                            <CarouselItem key={path.id} className="pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 w-full justify-center items-center flex">
                                    <AdvancementBarCard progress={path.title?.length || 0 * 4} variant="status" size="medium" className='w-56 h-60'>
                                        <CardContent className="relative flex aspect-square items-center justify-center p-2">
                                            <div onMouseOver={() => setSelected(path.id)} onClick={() => setSelected(path.id)}>
                                                <PathCircle path={path} isSelected={selected === path.id} size="md" />
                                            </div>
                                        </CardContent>
                                    </AdvancementBarCard>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <Separator />

            </div>
            <PathDetails path={selected && userPaths?.find((path) => path.id === selected) || null} lessons={userLessons || []} />
        </div>
    )
}
