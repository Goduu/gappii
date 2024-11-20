import { gql } from "@apollo/client"

export const GET_ACTIVITIES = gql`
  query GetActivities($topicId: ID!, $subtopicId: ID!) {
    activities(where: { topic: { id: $topicId }, subtopic: { id: $subtopicId } }) {
      id
      description
      options
      answer
      comment
    }
  }
`
