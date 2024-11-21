import { gql } from "@apollo/client";

export const CHECK_USER = gql`
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
