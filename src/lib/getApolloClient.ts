import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getApolloClient = () =>
  new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.GRAPHQL_ENDPOINT}`, // Your GraphQL endpoint
    cache: new InMemoryCache(),
    ssrMode: true, // Important for Server Components
  });