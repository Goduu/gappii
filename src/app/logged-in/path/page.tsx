"use client"
import React, { FC, useState } from 'react'
import { Activity } from '@/ogm-types'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PathCircle } from './path-circle'
import { PathStone } from './types'
import { PathDetails } from './path-details'

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
    },
    {
        id: 'topic2',
        title: 'Topic 2',
        lessons: [
            { id: 'lesson98', title: 'Geography from the world / Oceans and Beaches', level: 1, isPublic: true, createdAt: new Date(), language: 'en', hasActivities: [activity, activity, activity, activity, activity, activity, activity] },
            { id: 'lesson233', title: 'Lesson 2', level: 1, isPublic: true, createdAt: new Date(), language: 'en', hasActivities: [activity, activity, activity, activity, activity] },
            { id: 'lesson22', title: 'Lesson 22 para ver', level: 1, isPublic: true, createdAt: new Date(), language: 'en', hasActivities: [activity, activity, activity, activity, activity, activity, activity] },
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
        <div className='w-full items-center justify-center flex flex-col gap-10 h-full overflow-visible'>
            {paths.map((path) => (
                <Dialog key={path.id} onOpenChange={(open) => !open && handleClose()}>
                    <DialogTrigger asChild className='flex relative flex-col items-center justify-center w-full gap-2 group h-72' >
                        <div onMouseOver={() => setSelected(path.id)}>
                            <PathCircle path={path} isSelected={selected === path.id} />
                        </div>
                    </DialogTrigger>
                    <DialogContent className='overflow-scroll max-h-screen'>
                        <DialogHeader>
                            <DialogTitle>{path.title}</DialogTitle>
                        </DialogHeader>
                        <DialogDescription className='overflow-scroll h-full'>
                            <PathDetails path={path} />
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    )
}

export default Cards

