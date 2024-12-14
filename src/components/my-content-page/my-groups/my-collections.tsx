"use client"
import { Collections } from '@/components/my-content-page/my-groups/collections'
import React, { FC, useState } from 'react'
import { CreateCollection } from './create-collection'
import { useQuery } from '@apollo/client'
import { QueryUsersArgs, User } from '@/ogm-resolver/ogm-types'
import { useUser } from '@clerk/nextjs'
import { GET_USER_COLLECTIONS } from '@/lib/gqls/userGQLs'
import { Edit } from 'lucide-react'
import { CollectionPageMode } from './types'
import { Toggle } from '@/components/ui/toggle'
import { CollectionProvider } from './collection-context'

type MyGroupsProps = {
  isDragging: boolean
}

export const MyCollections: FC<MyGroupsProps> = ({ isDragging }) => {
  const userData = useUser()
  const [mode, setMode] = useState<CollectionPageMode>("create")
  const [collectionFormOpen, setCollectionFormOpen] = React.useState(false)
  const { data } = useQuery<{ users: Array<User> }>(GET_USER_COLLECTIONS, {
    variables: {
      where: {
        clerkId: userData.user?.id
      }
    } satisfies QueryUsersArgs,
    skip: !userData.user
  }
  )
  const collections = data?.users[0]?.hasCollections

  return (
    <div className='h-96 z-20 flex flex-row gap-4'>
      <CollectionProvider >
        <CreateCollection mode={mode} open={collectionFormOpen} setOpen={setCollectionFormOpen} />
        <Toggle variant="outline" className='z-30' onClick={() => setMode(mode === "edit" ? "create" : "edit")}>
          <Edit size={24} />
          Edit
        </Toggle>
        <div className="flex gap-4 absolute pt-12 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl overflow-y-visible overflow-x-scroll">
          {collections?.map(collection => (
            <Collections
              key={collection.id}
              collection={collection}
              cards={collection.hasLessons}
              isDragging={isDragging}
              mode={mode}
              setCollectionFormOpen={setCollectionFormOpen}
            />
          ))}
        </div>
      </CollectionProvider>
    </div>
  )
}
