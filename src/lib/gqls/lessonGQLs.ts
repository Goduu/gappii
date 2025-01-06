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
      hasActivities(sort: [{order: ASC}]) {
        id
        description
        options
        answer
        comment
        order
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
    hotLessons: lessons(limit: 10, sort: [{ likeCount: DESC }]) {
      id
      hasTopic {
        id
        title
      }
      hasSubtopic {
        id
        title
      }
      likeCount 
    },
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


export const UPDATE_LESSON = gql`
  mutation UpdateLesson(
    $where: LessonWhere!, 
    $update: LessonUpdateInput!
  ) {
    updateLessons(
      where: $where,
      update: $update
    ) {
      lessons {
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

