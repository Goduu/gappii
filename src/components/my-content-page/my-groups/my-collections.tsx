"use client"
import { Collections } from '@/components/my-content-page/my-groups/collections'
import React, { FC } from 'react'
import { CreateGroup } from './create-group'
import { useQuery } from '@apollo/client'
import { QueryUsersArgs, User } from '@/ogm-resolver/ogm-types'
import { useUser } from '@clerk/nextjs'
import { GET_USER_COLLECTIONS } from '@/lib/gqls/userGQLs'

type MyGroupsProps = {
  isDragging: boolean
}


export const MyCollections: FC<MyGroupsProps> = ({ isDragging }) => {
  const userData = useUser()
  const { data } = useQuery<{ users: Array<User> }>(GET_USER_COLLECTIONS, {
    variables: {
      where: {
        clerkId: userData.user?.id
      }
    } satisfies QueryUsersArgs,
    skip: !userData.user
  }
  )
  const collections = data?.users[0].hasCollections

  return (
    <div className='h-96 overflow-visible z-20 flex flex-row gap-4'>
      <CreateGroup />
      <div className="flex gap-4 absolute pt-12 ">
        {collections?.map(collection => (
          <Collections key={collection.id} collection={collection} cards={collection.hasLessons} isDragging={isDragging} />
        ))}
      </div>
    </div>
  )
}
