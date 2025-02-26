import { CommunityPage } from '@/components/community-page/community-page'
import React from 'react'
import { CommunitySearchParams } from '../types';

const Community = async (props: {
    searchParams?: Promise<CommunitySearchParams>;
}) => {
    return (
        <CommunityPage searchParams={await props.searchParams || {}} />
    )
}

export default Community