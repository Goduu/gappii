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

export const GET_PATH_RANDOM_ACTIVITIES = gql`
  query GetPathRandomActivities($where: PathWhere!, $count: Int!) {
    paths(where: $where) {
      id
      title
      randomActivities(count: $count) {
        ...ActivityFragment
      }
    }
  }
`

export const DELETE_PATH = gql`
  mutation DeletePath($where: PathWhere!) {
    deletePaths(where: $where) {
      nodesDeleted
      relationshipsDeleted
    }
  }
`