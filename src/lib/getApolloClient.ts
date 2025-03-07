import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";
import { LESSON_FRAGMENT } from "./gqls/lessonGQLs";
import { ACTIVITY_FRAGMENT } from "./gqls/activityGQLs";

export const getApolloClient = () =>
  new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.GRAPHQL_ENDPOINT}`, // Your GraphQL endpoint
    cache: new InMemoryCache({
      fragments: createFragmentRegistry(LESSON_FRAGMENT, ACTIVITY_FRAGMENT)
    }),
    ssrMode: typeof window === 'undefined', // Important for Server Components
    connectToDevTools: true,
  });

// export const createApolloClient = (headers?: IncomingHttpHeaders) => {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined', // Enables SSR
//     link: new HttpLink({
//       uri: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.GRAPHQL_ENDPOINT}`, // Your GraphQL endpoint
//       headers: headers as Record<string, string>,
//     }),
//     cache: new InMemoryCache({
//       fragments: createFragmentRegistry(LESSON_FRAGMENT, ACTIVITY_FRAGMENT)
//     }),
//   });
// };

