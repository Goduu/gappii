import React from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { CommunityCardReactions } from './community-card-reactions'
import { ImageUp } from 'lucide-react'

export const CommunityCard = () => {
    return (
        <Card className="w-96 relative">
            <CardHeader>
                <div className='absolute right-2 top-2'>
                    <CommunityCardReactions />
                </div>
                <CardTitle className="flex justify-between items-start w-full gap-4">
                    <div className='bg-orange-500 rounded-full h-20 aspect-square items-center flex justify-center'>
                        <ImageUp className='w-12 h-12' />
                    </div>
                    <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full'>
                        <div className='flex justify-between items-start w-full gap-1'>
                            <div className="text-lg font-black cursor-pointer" >{"topic"}</div>
                        </div>
                        <span className="text-md cursor-pointer" >{"subtopic"}</span>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center gap-4">
                <Button > Check</Button>
                <Button > Add</Button>
            </CardFooter>
            {/* <div className='absolute bottom-2 right-2'>
                <DiamondPlus className='h-16 w-16 cursor-pointer hover:bg-gray-50 dark:bg-gray-900 rounded-xl p-1' />
            </div> */}
        </Card>
    )
}
