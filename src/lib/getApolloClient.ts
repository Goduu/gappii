import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getApolloClient = () =>
  new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT, // Your GraphQL endpoint
    cache: new InMemoryCache(),
    ssrMode: true, // Important for Server Components
  });