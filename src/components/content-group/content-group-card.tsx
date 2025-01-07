import React, { FC } from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ImageUp } from 'lucide-react'
import { ContentGroupActions } from './content-group-actions'
import { Badge } from '../ui/badge'
import { Lesson } from '@/ogm-resolver/ogm-types'

type ContentGroupCardProps = {
    isNew: boolean
    title: string
    lessons: Lesson[]
}

export const ContentGroupCard: FC<ContentGroupCardProps> = ({isNew, title, lessons }) => {
    return (
        <Card className="w-96 relative">
            <CardHeader>
                <div className='absolute right-2 top-2'>
                    <ContentGroupActions />
                </div>
                <CardTitle className="flex justify-between items-start w-full gap-4">
                    <div className='bg-orange-500 rounded-full h-20 aspect-square items-center flex justify-center'>
                        <ImageUp className='w-12 h-12' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        {title}
                        <div className='flex flex-wrap gap-1'>
                            {lessons.map((lesson) => (
                                <Badge className='flex gap-1' variant="outline" key={lesson.id}>
                                    <div className="text-s font-black cursor-pointer" >{lesson.hasTopic.title}</div> /
                                    <div className="text-xs cursor-pointer" >{lesson.hasSubtopic.title}</div>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center gap-4">
                <Button>Start</Button>
            </CardFooter>
        </Card>
    )
}
