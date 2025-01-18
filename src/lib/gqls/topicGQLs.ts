import { gql } from "@apollo/client"

export const GET_TOPIC_AND_SUBTOPICS = gql`
  query GetTopicsAndSubtopics {
  topics {
    id
    title
  }
}
`

export const GET_TOPIC_TITLES = gql`
  query GetTopicsTitle($phrase: String) {
    topics(
      where: { title_CONTAINS: $phrase }
      sort: [{ title: ASC }]
    ) {
      id
      title
  }
}
`

export const GET_TOPICS = gql`
  query GetTopics {
  topics {
    id
    title
  }
}
`

export const CREATE_TOPIC = gql`
  mutation CreateTopic($input: [TopicCreateInput!]!) {
  createTopics(input: $input) {
    topics {
        id
        title
    }
  }
}
`

export const UPDATE_TOPIC = gql`
  mutation UpdateTopic(
    $where: TopicWhere!, 
    $update: TopicUpdateInput!, 
) {
  updateTopics(
    where: $where, 
    update: $update, 
  ) {
    topics {
      id
    }
  }
}
`

export const INTROSPECT = gql`
  query IntrospectMutation {
  __type(name: "Mutation") {
    name
    fields {
      name
      args {
        name
        type {
          name
          kind
        }
      }
    }
  }
}
`
