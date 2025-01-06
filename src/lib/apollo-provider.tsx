"use client"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { FC } from "react"

export const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
})

export const ApolloWrapper: FC<React.PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}


