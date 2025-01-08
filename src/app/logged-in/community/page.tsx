import { CommunityPage } from '@/components/community-page/community-page'
import React from 'react'

const Community = async (props: {
    searchParams?: Promise<{
        search?: string;
        toggle?: string;
        level?: string;
    }>;
}) => {
    return (
        <CommunityPage searchParams={await props.searchParams} />
    )
}

export default Community