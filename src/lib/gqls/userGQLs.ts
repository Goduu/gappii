import { gql } from "@apollo/client";

export const GET_USER = gql`
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
query GetUserLessons($where: UserWhere!, $first: Int!,$after: String, $lessonWhere: UserHasLessonsConnectionWhere) {
  users(where: $where) {
    id
    hasLessonsConnection(
      first: $first
      after: $after
      sort: [{ node: { title: ASC } }]
      where: $lessonWhere
    ) {
      edges{
          node{
            ...LessonFragment,
            wasReactedConnection(where: {node: $where}) {
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
      totalCount
      pageInfo{
        hasNextPage
        endCursor
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
    }
  }
}
`

export const GET_USER_MISTAKES = gql`
  query GetUserMistakes($where: UserWhere) {
    users(where: $where) {
      id
      completedLessons {
        id
        forLesson {
          id
          title
        }
        attemptedActivitiesConnection(where: {edge: {isCorrect: false}}) {
          edges {
            node {
              id
              description
              options
              answer
              comment
            }
            properties{ 
              isCorrect
            }
          }
        }
      }
    }
  }
`

export const GET_USER_STATISTICS = gql`
  query GetUserStatistics($where: UserWhere) {
    users(where: $where) {
      hasStreak {
        id
        streakCount
        lastActivityDate
      }
      hasLessonsConnection {
        edges{
          properties{
            type
          }
        }
      }
      createdLessonsInteractionsCount
    }
  }
`

export const GET_USER_DAILY_ACTIVITY = gql`
    query GetUserDailyActivity($where: UserWhere) {
        users(where: $where) {
            dailyActivity {
                date
                count
            }
        }
    }
`;
