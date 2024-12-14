"use client"
import React from 'react';
import { LearnInput } from '../learn-input/learn-input';

export const CreateTopic = () => {

    return (
        <div className='flex flex-col gap-4 w-96 md:w-[30rem] lg:w-[40rem] items-center border rounded-lg p-10'>
            <div className='text-xl sm:text-3xl'>
                Create your custom lesson
            </div>
            <LearnInput hideLevel={true}/>
            
        </div>

    );
};
