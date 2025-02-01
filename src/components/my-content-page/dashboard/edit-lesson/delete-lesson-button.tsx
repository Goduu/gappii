"use client"
import { useTransitionContext } from '@/components/loading-store'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DELETE_LESSON } from '@/lib/gqls/lessonGQLs'
import { routes } from '@/lib/routes'
import { MutationDeleteLessonCompletionRecordsArgs } from '@/ogm-types'
import { useMutation } from '@apollo/client'
import { Trash } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { FC } from 'react'

type DeleteLessonButtonProps = {
    lessonId?: string,
}

export const DeleteLessonButton: FC<DeleteLessonButtonProps> = ({ lessonId }) => {
    const [deleteLesson] = useMutation(DELETE_LESSON)
    const { startTransition } = useTransitionContext()

    const handleDeleteLesson = () => {
        if (!lessonId) return
        startTransition(async () => {
            await deleteLesson({ variables: { where: { id: lessonId } } satisfies MutationDeleteLessonCompletionRecordsArgs })
            redirect(routes.dashboard())
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' className='flex gap-2'>
                    <Trash className='w-4 h-4' />
                    <div className='hidden md:block'>
                        Delete Lesson
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className='w-full'>
                <DialogHeader>
                    <DialogTitle className='flex gap-2'>
                        <Trash className='w-4 h-4' />
                        Delete Lesson
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Are you sure you want to delete this lesson? It cannot be undone.
                </DialogDescription>
                <DialogFooter>
                    <Button variant="destructive" onClick={handleDeleteLesson}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
