import { gql } from "@apollo/client"

export const CREATE_COLLECTION = gql`
  mutation CreateCollection($input: [CollectionCreateInput!]!) {
  createCollections(input: $input) {
    collections {
        id
        title
    }
  }
}
`

export const UPDATE_COLLECTION = gql`
  mutation UpdateCollection(
    $where: CollectionWhere!, 
    $update: CollectionUpdateInput!, 
) {
  updateCollections(
    where: $where, 
    update: $update, 
  ) {
    collections {
      id
    }
  }
}
`
