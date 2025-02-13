import { gql } from "@apollo/client";


export const UPDATE_PATH = gql`
  mutation UpdatePath($where: PathWhere!, $update: PathUpdateInput!) {
    updatePaths(where: $where, update: $update) {
    paths {
      id
      title
      color
      icon
      withLessons {
        id
        title
        hasActivities {
          id
        }
      }
    }
  }
}
`
