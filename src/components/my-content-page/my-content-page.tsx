"use client"
import React, { useState } from 'react'
import { PageTitle } from '../page-title/page-title'
import { MyLessons } from './my-lessons/my-lessons'
import { MyCollections } from './my-groups/my-collections'
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useMutation } from '@apollo/client'
import { UPDATE_COLLECTION } from '@/lib/gqls/colectionGQLs'
import { GET_USER_COLLECTIONS } from '@/lib/gqls/userGQLs'
import { MutationUpdateCollectionsArgs } from '@/ogm-resolver/ogm-types'

export const MyContentPage = () => {
    const [isDragging, setIsDragging] = useState(false)
    const [updateCollection] = useMutation(UPDATE_COLLECTION, {refetchQueries: [GET_USER_COLLECTIONS]})

    const handleDragEnd = (event: any) => {
        const {active: lesson, over: collection} = event
        if(lesson.id && collection.id) {
            updateCollection({
                variables: {
                    where: {
                        id: collection.id
                    },
                    update: {
                        hasLessons: [{
                            connect: [{
                                where: {
                                    node: {
                                        id: lesson.id
                                    }
                                }
                            }]
                        }]
                    }
                } satisfies MutationUpdateCollectionsArgs
            })
        }   
        setIsDragging(false)
    }

    const handleDragStart = (event: any) => {
        console.log("handleDragStart", event)
        setIsDragging(true)
    }
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            delay: 150,
            tolerance: 5,
        },
    });
    const sensors = useSensors(mouseSensor);

    return (
        <div className='flex flex-col gap-10 px-4 w-full'>
            <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
                <PageTitle title='My Collections' />
                <MyCollections isDragging={isDragging}/>
                <PageTitle title='My Lessons' />
                <MyLessons />
            </DndContext>
        </div>
    )
}
