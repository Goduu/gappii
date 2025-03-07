import { CommunityPage } from '@/components/community-page/community-page'
import React from 'react'
import { CommunitySearchParams } from '../types';
import { HomeButtons } from '@/components/home/home-buttons';

const Community = async (props: {
    searchParams?: Promise<CommunitySearchParams>;
}) => {
    return (
        <div className='flex flex-col gap-0'>
            <div className='absolute top-4 right-4'>
                <HomeButtons />
            </div>
            <CommunityPage searchParams={await props.searchParams || {}} />
        </div>
    )
}

export default Community