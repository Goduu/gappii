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
      hasKeywords {
        id
        name
      }
    }
  }
`
export const GET_HOT_LESSON = gql`
  query GetHotLessons {
    hotLessons: lessons(limit: 10, sort: [{ reactedCount: DESC }]) {
      id
      hasTopic {
        id
        title
      }
      hasSubtopic {
        id
        title
      }
      reactedCount 
    } ,
    newLessons: lessons(limit: 10, sort: [{ createdAt: DESC }]) {
      id
      hasTopic {
        id
        title
      }
      hasSubtopic {
        id
        title
      }
    } 
  }
`



export const GET_LESSON_FILTERED = gql`
  query GetLessonActivities($where: LessonWhere!, $limit: Int!) {
    lessons(where: $where, limit: $limit, sort:[{title: ASC}]) {
      id
      level
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

