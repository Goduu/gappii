import { gql } from "@apollo/client";

export const CHECK_USER = gql`
  query CheckUser($where: UserWhere!) {
    users(where: $where) {
      id
    }
  }
`;


export const CREATE_USER = gql`
  mutation CreateUser($input: [UserCreateInput!]!) {
    createUsers(input: $input) {
    users {
      id
    }
  }
}
`

export const GET_USER_LESSONS = gql`
  query GetUserLessons($where: UserWhere!) {
    users(where: $where) {
      id
      hasLessons{
        id
        title
        hasTopic {
            id
            title
        }
        hasSubtopic {
            id
            title
        }
      }
      reactedToLessonsConnection {
        edges{
            node{
                id
            }
            properties{
                type
            }
      }
      }
    }
  }
`
export const GET_USER_COLLECTIONS = gql`
  query GetUserCollections($where: UserWhere!) {
    users(where: $where) {
      id
      hasCollections {
        id
        title
        icon
        color
        hasLessons {
          id
          title
          hasTopic {
            id
            title
          }
          hasSubtopic {
            id
            title
          }
          hasKeywords {
            id
            name
          }
        }
      }
    }
  }
`

export const GET_USER_REPORTED_ACTIVITIES = gql`
  query GetUserLessons($where: UserWhere!) {
    users(where: $where) {
      id
      reportedActivities {
        id
      }
    }
  }
`

export const UPDATE_USER = gql`
    mutation UpdateUser($where: UserWhere!, $update: UserUpdateInput!) {
        updateUsers(
        where: $where,
        update: $update
        ) {
        users {
            id
            reactedToLessons {
                id
                wasReactedConnection {
                    edges {
                        node {
                            id
                            clerkId
                        }
                        properties{
                            type
                        }
                    }
                }
            }
        }
        }
    }
`
