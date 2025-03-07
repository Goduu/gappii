"use client"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createFragmentRegistry } from "@apollo/client/cache"
import { ACTIVITY_FRAGMENT } from "./gqls/activityGQLs"
import { LESSON_FRAGMENT } from "./gqls/lessonGQLs"
import { FC } from "react"

export const client = new ApolloClient({
  uri: `/api/graphql`,
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(LESSON_FRAGMENT, ACTIVITY_FRAGMENT)
  }),
  connectToDevTools: true,
  ssrMode: typeof window === 'undefined',
})

export const ApolloWrapper: FC<React.PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}


