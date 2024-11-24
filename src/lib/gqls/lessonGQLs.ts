import { gql } from "@apollo/client";


export const CREATE_LESSONS = gql`
  mutation CreateLessons($input: [LessonCreateInput!]!) {
  createLessons(input: $input) {
    lessons {
        id
    }
  }
}
`

export const GET_LESSON_ACTIVITIES = gql`
  query GetLessonActivities($where: LessonWhere!) {
    lessons(where: $where) {
      id
      hasTopic {
        id
        title
      }
      hasSubtopic {
        id
        title
      }
      hasActivities {
        id
        description
        options
        answer
        comment
      }
    }
  }
`


export const GET_LESSON_FILTERED = gql`
  query GetLessonActivities($where: LessonWhere!) {
    lessons(where: $where) {
      id
      hasTopic {
        id
        title
      }
      hasSubtopic {
        id
        title
      }
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
`

