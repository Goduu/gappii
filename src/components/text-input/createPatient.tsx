import { useMutation } from "@apollo/client";
import { PatientData } from "../patient/types";
import { CREATE_PATIENT } from "@/lib/gqls/patientGQLs";

export const useCreatePatient = () => {

    const [createPatientMutation] = useMutation(CREATE_PATIENT)

    const createPatient = async (data: PatientData) => {
        const dateNow = new Date().toISOString().split(".")[0]

        await createPatientMutation({
            variables: {
                input: [
                    {
                        name: data.basicInfo.name,
                        age: data.basicInfo.age,
                        allergies: data.basicInfo.allergies,
                        takenMedication: {
                            connectOrCreate: {
                                where: {
                                    node: { name: data.medications[0].name }
                                },
                                onCreate: {
                                    node: { name: data.medications[0].name, },
                                    edge: {
                                        at: data.medications[0].lastDose,
                                    }
                                }
                            }
                        },
                        hasObservation: {
                            create: {
                                node: {
                                    temperature: data.vitals.temperature,
                                    bloodPressure: data.vitals.bloodPressure,
                                    heartRate: data.vitals.heartRate,
                                    respiratoryRate: data.vitals.respiratoryRate,
                                    mentalStatus: data.vitals.mentalStatus,
                                    painLevel: data.vitals.painLevel,
                                    painLocation: data.vitals.painLocation,
                                    painResponse: data.vitals.painResponse,
                                    observationDate: dateNow
                                }
                            }
                        },
                        hasShiftSummary: {
                            create: {
                                node: {
                                    note: data.shiftNotes.summary,
                                    date: dateNow
                                }
                            }
                        },
                        hasNextShift: {
                            create: {
                                node: {
                                    note: data.shiftNotes.nextShift,
                                    date: dateNow
                                }
                            }
                        }
                    }
                ]
            }
        }
        )
    }

    return createPatient

}