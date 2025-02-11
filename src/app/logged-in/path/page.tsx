"use client"
import React, { FC, useState } from 'react'
import { Activity } from '@/ogm-types'
import { PathCircle } from './path-circle'
import { PathStone } from './types'
import { PathDetails } from './path-details'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { CardContent } from '@/components/ui/card'
import { AdvancementBarCard } from '@/components/ui/advancementbar'
import { Separator } from '@/components/ui/separator'
import { PageTitle } from '@/components/ui/page-title'
import { PathCreationDialog } from './path-creation.dialog'

const activity: Activity = {
    order: 1,
    description: 'What is the sum of the first 10 natural numbers?',
    options: ['10', '20', '30', '40'],
    answer: '10',
    comment: 'This is a comment',
}

const paths: PathStone[] = [
    {
        id: 'Path1',
        title: 'Mathematic A1 Calculus',
        lessons: [
            { id: 'lesson14', title: 'Lesson about something nice', level: 1, isPublic: true, createdAt: new Date(), language: 'en', hasActivities: [activity, activity, activity, activity, activity] },
            { id: 'lesson21', title: 'Lesson that I need', level: 1, isPublic: true, createdAt: new Date(), language: 'en', hasActivities: [activity, activity, activity, activity] },
        ],
    }
]

const Cards: FC = () => {
    const [selected, setSelected] = useState<string | null>(null)
    const [clicked, setClicked] = useState<string | null>(null)
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className='w-full px-6 md:px-10 lg:px-20 xl:px-40 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <PageTitle title="Paths" />
                <PathCreationDialog />
            </div>
            <div className='w-full items-center justify-center flex flex-col gap-10 overflow-visible'>
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "center",
                    }}
                    className='w-full'
                >
                    <CarouselContent className='-ml-1'>
                        {paths.map((path) => (
                            <CarouselItem key={path.id} className="pl-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1 w-full justify-center items-center flex">
                                    <AdvancementBarCard progress={path.title.length * 4} variant="status" size="medium" className='w-56 h-60'>
                                        <CardContent className="relative flex aspect-square items-center justify-center p-2">
                                            <div onMouseOver={() => setSelected(path.id)} onClick={() => setSelected(path.id)}>
                                                <PathCircle path={path} isSelected={selected === path.id} />
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
            <PathDetails path={selected && paths.find((path) => path.id === selected)} />
        </div>
    )
}

export default Cards

