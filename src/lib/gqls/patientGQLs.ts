import { gql } from "@apollo/client"

export const GET_PATIENTS_ID_NAME = gql`
  query GetPatientIdName {
  patients {
    id
    name
  }
}
`

export const GET_PATIENT = gql`
  query GetPatient($id: ID!) {
  patients(where: { id: $id },limit: 1) {
    id
    name
    age
    allergies
    takenMedication {
      name
    }
    takenMedicationConnection{
      edges{
        node{
          id
          name
        }
        properties{
          at
        }
      }
    }
    hasObservation {
      temperature
      bloodPressure
      heartRate
      respiratoryRate
      mentalStatus
      painLevel
      painLocation
      painResponse
      observationDate
    }
    hasShiftSummary {
      note
      date
    }
    hasNextShift {
      note
      date
    }
  }
}
`

export const CREATE_PATIENT = gql`
  mutation CreatePatient($input: [PatientCreateInput!]!) {
  createPatients(input: $input) {
    patients {
      id
  }
  }
}
`

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient(
  $id: ID!,
  $name: String,
  $age: Date,
  $allergies: [String!],
  $takenMedication: [MedicationUpdateInput!]!,
  $hasObservation: [VitalsObservationUpdateInput!]!,
  $hasShiftSummary: [ShiftSummaryUpdateInput!]!,
  $hasNextShift: [NextShiftUpdateInput!]!
) {
  updatePatients(
    where: { id: $id },
    update: {
      name: $name,
      age: $age,
      allergies: $allergies,
      takenMedication: { update: $takenMedication },
      hasObservation: { update: $hasObservation },
      hasShiftSummary: { update: $hasShiftSummary },
      hasNextShift: { update: $hasNextShift }
    }
  ) {
    patients {
      id
      name
      age
      allergies
      takenMedication {
        name
      }
      hasObservation {
        temperature
        bloodPressure
        heartRate
        respiratoryRate
        mentalStatus
        painLevel
        painLocation
        painResponse
        observationDate
      }
      hasShiftSummary {
        note
        date
      }
      hasNextShift {
        note
        date
      }
    }
  }
}
`

export const DELETE_TAG = gql`
  mutation DeleteTag($where: TagWhere) {
    deleteTags(where: $where) {
      nodesDeleted
    }
  }
`


