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
                  email
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
      mistakenActivities {
        id
        description
        options
        answer
        comment
        mermaid
        sessionCompletionRecordId
      }
    }
  }
`

export const GET_USER_MISTAKES_COUNT = gql`
  query GetUserMistakesCount($where: UserWhere) {
    users(where: $where) {
      id
      mistakenActivitiesCount
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

export const GET_USER_PATHS_AND_LESSONS = gql`
  query GetUserPathsAndLessons($email: String!) {
    users(where: {email: $email}) {
      id
      hasLessons {
        id
        title
        hasActivities {
          id
        }
      }
      hasPaths {
        id
        title
        color
        icon
        withLessons {
          id
          title
          attempts(email: $email)
          completionPercentage(email: $email)
          hasActivitiesAggregate {
            count
          }
        }
      }
    }
  }
`;