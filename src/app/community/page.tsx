import { CommunityPage, CommunitySearchParams } from '@/components/community-page/community-page'
import React from 'react'


const Community = async (props: {
    searchParams?: Promise<CommunitySearchParams>;
}) => {
    return (
        <CommunityPage searchParams={await props.searchParams} />
    )
}

export default Community