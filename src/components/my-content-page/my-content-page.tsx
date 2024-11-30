"use client"
import React from 'react'
import { PageTitle } from '../page-title/page-title'
import { MyLessons } from './my-lessons/my-lessons'
import { MyGroups } from './my-groups/my-groups'

export const MyContentPage = () => {

    return (
        <div className='flex flex-col gap-10 px-4 w-full'>
            <PageTitle title='My Collections' />
            <MyGroups />
            <PageTitle title='My Lessons' />
            <MyLessons />
        </div>
    )
}
