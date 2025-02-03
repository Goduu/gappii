"use client"
import React, { FC, useState } from 'react'
import { Flower2, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SubtopicsPie } from './circular-chart'
import { Lesson, Topic } from '@/ogm-types'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

type PathStone = {
    id: string
    title: string
    lessons: Partial<Lesson>[]
}

const topics: PathStone[] = [
    {
        id: 'topic1',
        title: 'Topic 1',
        lessons: [
            { id: 'lesson1', title: 'Lesson 1', level: 1, isPublic: true, createdAt: new Date(), language: 'en', },
            { id: 'lesson2', title: 'Lesson 2', level: 1, isPublic: true, createdAt: new Date(), language: 'en', },
        ],
    },
    {
        id: 'topic2',
        title: 'Topic 2',
        lessons: [
            { id: 'lesson2', title: 'Lesson 1', level: 1, isPublic: true, createdAt: new Date(), language: 'en', },
            { id: 'lesson2', title: 'Lesson 2', level: 1, isPublic: true, createdAt: new Date(), language: 'en', },
        ],
    },
]

const Cards: FC = () => {
    const [selected, setSelected] = useState<string | null>(null)
    const [clicked, setClicked] = useState<string | null>(null)

    const handleClose = () => {
        setClicked(null)
        setSelected(null)
    }

    return (
        <>
            <div className='w-full items-center justify-center flex flex-col gap-10 h-full overflow-visible'>
                {topics.map((topic) => (
                    <div
                        onMouseOver={() => setSelected(topic.id)}
                        key={topic.id} className='flex relative flex-col items-center justify-center w-full gap-2 group h-72'>
                        <div

                            onClick={() => setClicked(topic.id)}
                            className={cn('flex flex-col items-center justify-center w-20 mt-8',
                                'bg-green-500 rounded-full aspect-square text-white',
                                'border-b-8 border-green-600 cursor-pointer',
                                'transition-all duration-1000 ease-in-out z-20',
                                selected === topic.id && 'border-green-600 scale-105 border-b-2'
                            )}
                        >
                            <Flower2 size={40} />
                        </div>
                        <Badge variant="outline" className={cn(
                            selected === topic.id && 'mt-8',
                            'transition-all duration-1000 ease-in-out')}>
                            {topic.title}
                        </Badge>
                        {selected === topic.id && !clicked && <SubtopicsPie />}
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {clicked && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                            onClick={handleClose}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className={cn(
                                "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
                                "bg-white rounded-xl shadow-lg",
                                "w-screen md:w-[80vw] md:max-w-4xl",
                                "p-2 md:p-6",
                                "flex flex-col items-center"
                            )}
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 z-10"
                                onClick={handleClose}
                            >
                                <X className="h-4 w-4" />
                            </Button>

                            <div className="flex flex-col items-center w-full">
                                <div className="relative w-full aspect-square md:max-w-2xl">
                                    <div className="absolute inset-0 mt-8">
                                        <SubtopicsPie outerRadius={90} innerRadius={67} />
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

                                <h2 className="text-xl md:text-2xl font-bold mt-4">
                                    {topics.find(t => t.id === clicked)?.title}
                                </h2>

                                <div className="w-full space-y-4 mt-6">
                                    <h3 className="text-lg font-semibold px-4">Available Lessons</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4">
                                        {topics.find(t => t.id === clicked)?.lessons.map((lesson) => (
                                            <div
                                                key={'details' + lesson.id}
                                                className="p-3 md:p-4 border rounded-lg hover:bg-slate-50 cursor-pointer"
                                            >
                                                {lesson.title}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Cards
