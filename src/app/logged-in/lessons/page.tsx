import { MyContentPage } from '@/components/my-content-page/my-content-page'
import React from 'react'

const MyLessons = async (props: {
    searchParams?: Promise<{
        topic?: string;
        subtopic?: string;
        reaction?: string;
        endCursor?: string;
    }>;
}) => {

    return (
        <MyContentPage searchParams={await props.searchParams} />
    )
}

export default MyLessons