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
      title
      isPublic
      language
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
    hotLessons: lessons(limit: 10) {
      id
      hasTopic {
        id
        title
      }
      hasSubtopic {
        id
        title
      }
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

export const GET_LESSON_BY_ID = gql`
  query GetLessonById($id: ID!) {
    lessons(where: { id: $id }) {
      title
      level
      language
      createdAt
      hasKeywords {
        id
        name
      }
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
        order
      }
    }
  }
`

// newestSort: createdAr: DESC, topRatedSort: wasReactedAggregate: {count: DESC}
export const GET_COMMUNITY_LESSONS = gql`
  query GetCommunityLessons($level: Int, $newestSort: SortDirection, $topRatedSort: SortDirection, $language: String) {
    lessons(
      where: {
        isPublic: true
        level: $level
        language: $language
        hasActivitiesAggregate: {count_GT: 3}
      }
      options: {
        sort: [
             { 
              createdAt: $newestSort
             }
             { 
              wasReactedCount: $topRatedSort
             }
        ]
        limit: 12
      }
    ) {
      id
      title
      level
      language
      createdAt
      hasKeywords {
        id
        name
      }
      hasTopic {
        title
      }
      hasSubtopic {
        title
      }
      wasReactedConnection {
        edges {
          properties {
            type
            reactedAt
          }
          node {
            clerkId
          }
        }
      }
    }
  }
`

export const GET_COMMUNITY_LESSONS_FULLTEXT = gql`
  query GetCommunityLessons(
    $phrase: String!, 
    $level: Int, 
    $newestSort: SortDirection, 
    $topRatedSort: SortDirection, 
    $language: String
  ) {
    lessonsFulltextLessonTitle(
      phrase: $phrase
      where: {
        lesson: {
          isPublic: true
          level: $level
          language: $language
          hasActivitiesAggregate: {count_GT: 3}
        }
      }
      sort: [
        { score: ASC }
        { lesson: { createdAt: $newestSort } }
        { lesson: { wasReactedCount: $topRatedSort } }
      ]
      limit: 12
    ) {
      score
      lesson {
        id
        title
        level
        language
        createdAt
        hasKeywords {
          id
          name
        }
        hasTopic {
          title
        }
        hasSubtopic {
          title
        }
        wasReactedConnection {
          edges {
            properties {
              type
              reactedAt
            }
            node {
              clerkId
            }
          }
        }
      }
    }
  }
`;

export const DELETE_LESSON = gql`
  mutation DeleteLesson($where: LessonWhere!) {
    deleteLessons(where: $where, delete: {wasReacted: {}, hasActivities: {}}) {
      nodesDeleted
      relationshipsDeleted
    }
  }
`

