import React from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ImageUp } from 'lucide-react'
import { ContentGroupActions } from './content-group-actions'
import { Badge } from '../ui/badge'

export const ContentGroupCard = () => {
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
                        Group Title
                        <div className='flex flex-wrap gap-1'>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <Badge className='flex gap-1' variant="outline" key={i}>
                                    <div className="text-s font-black cursor-pointer" >{"topic" + (Math.random() * 100).toFixed(3)}</div> /
                                    <div className="text-xs cursor-pointer" >{"subtopic"}</div>
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
