"use client"
import React, { FC } from 'react'
import { Slider } from '../ui/slider'

type QuestionNumberSliderProps = {
    activitiesNumber: number
    onActivitiesNumberChange: (value: number) => void
}

export const QuestionNumberSlider: FC<QuestionNumberSliderProps> = ({ activitiesNumber, onActivitiesNumberChange }) => {

    const handleActivityNumberChange = (value: number[]) => {
        onActivitiesNumberChange(value[0])
    }

    return (
        <div className='flex flex-col w-full p-2 gap-4'>
            <div className='flex gap-4 items-center'>
                <div className='text-sm font-semibold'>Number of questions:</div>
                {activitiesNumber}
            </div>
            <div onPointerDown={(e) => e.stopPropagation()}>
                <Slider defaultValue={[7]} max={20} min={3} step={1} onValueChange={handleActivityNumberChange} />
            </div>
        </div>
    )
}
