import { gql } from "@apollo/client"

export const GET_TOPIC_AND_SUBTOPICS = gql`
  query GetTopicTitles {
  topics {
    id
    title
    hasSubtopics {
        id
        title
    }
  }
}
`
export const GET_TOPICS = gql`
  query GetTopics {
  topics {
    id
    title
    hasSubtopics{
        id 
        title
    }
  }
}
`
export const GET_TOPICS_ACTIVITIES = gql`
  query GetTopicActivities($topicId: ID!, $subtopicId: ID!) {
    topics(
      where: {
        id: $topicId
        hasSubtopics_SOME: { id: $subtopicId }
      }
    ) {
      id
      title
      hasSubtopics(where: { id: $subtopicId }) {
        id
        title
        hasActivities {
          id
          description
          options
          answer
          comment
        }
      }
    }
  }
`;

export const CREATE_TOPIC = gql`
  mutation CreateTopic($input: [TopicCreateInput!]!) {
  createTopics(input: $input) {
    topics {
        id
        title
        hasSubtopics{
            id 
            title
            hasActivities{
                id
                description
                options
                answer
                comment
            }
        }
    }
  }
}
`
