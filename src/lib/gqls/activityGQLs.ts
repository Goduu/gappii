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

export const CREATE_ACTIVITIES = gql`
  mutation CreateActivities($input: [ActivityCreateInput!]!) {
  createActivities(input: $input) {
    activities {
        id
    }
  }
}
`

export const UPDATE_ACTIVITY = gql`
  mutation UpdateActivity(
    $where: ActivityWhere!, 
    $update: ActivityUpdateInput!, 
) {
  updateActivities(
    where: $where, 
    update: $update, 
  ) {
    activities {
      id
    }
  }
}
`

export const DELETE_ACTIVITY = gql`
  mutation DeleteActivity($where: ActivityWhere!) {
    deleteActivities(where: $where){
      nodesDeleted
      relationshipsDeleted
    }
  }
`
