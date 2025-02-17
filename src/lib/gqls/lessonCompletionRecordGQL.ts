import { gql } from "@apollo/client";

export const UPDATE_SESSION_COMPLETION_RECORD = gql`
  mutation UpdateSessionCompletionRecords($where: SessionCompletionRecordWhere, $update: SessionCompletionRecordUpdateInput) {
    updateSessionCompletionRecords(where: $where, update: $update) {
      sessionCompletionRecords {
        id
      }
    }
  }
`
