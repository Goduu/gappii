"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Pencil } from 'lucide-react'

export const ContentGroupActions = () => {
    return (
        <div className='flex gap-1'>
            <Button size="icon" variant="ghost" onClick={() => { }} className='flex flex-col gap-0 justify-center'>
                <Pencil />
            </Button>
        </div>
    )
}
