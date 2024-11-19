import { PatientData } from "@/components/patient/types";


const defaultPatientData: PatientData = {
    basicInfo: {
        name: "Unknown Person",
        age: -1,
        patientId: "",
        roomNumber: "",
        allergies: []
    },
    vitals: {
        temperature: "",
        bloodPressure: "",
        heartRate: -1,
        respiratoryRate: -1,
        mentalStatus: 'Alert',
        painLevel: -1,
        painLocation: "",
        painResponse: ""
    },
    medications: [
        {
            name: "",
            lastDose: "",
            prn: false
        }
    ],
    shiftNotes: {
        summary: "",
        nextShift: ""
    }
};

export const validateApiReturnObject =  (response: object | null) => {
    if (!response) {
        throw new Error("No response from API");
    }

    const data = response as PatientData;
    console.log("data", data);

    const validatedData: PatientData = {
        basicInfo: {
            name: data.basicInfo.name || defaultPatientData.basicInfo.name,
            age: data.basicInfo.age || defaultPatientData.basicInfo.age,
            patientId: data.basicInfo.patientId || defaultPatientData.basicInfo.patientId,
            roomNumber: data.basicInfo.roomNumber || defaultPatientData.basicInfo.roomNumber,
            allergies: data.basicInfo.allergies || defaultPatientData.basicInfo.allergies
        },
        vitals: {
            temperature: data.vitals.temperature || defaultPatientData.vitals.temperature,
            bloodPressure: data.vitals.bloodPressure || defaultPatientData.vitals.bloodPressure,
            heartRate: data.vitals.heartRate || defaultPatientData.vitals.heartRate,
            respiratoryRate: data.vitals.respiratoryRate || defaultPatientData.vitals.respiratoryRate,
            mentalStatus: data.vitals.mentalStatus || defaultPatientData.vitals.mentalStatus,
            painLevel: data.vitals.painLevel || defaultPatientData.vitals.painLevel,
            painLocation: data.vitals.painLocation || defaultPatientData.vitals.painLocation,
            painResponse: data.vitals.painResponse || defaultPatientData.vitals.painResponse
        },
        medications: data.medications.length ? data.medications.map(med => ({
            name: med.name || defaultPatientData.medications[0].name,
            lastDose: med.lastDose || defaultPatientData.medications[0].lastDose,
            prn: med.prn || defaultPatientData.medications[0].prn
        })) : [],
        shiftNotes: {
            summary: data.shiftNotes.summary || defaultPatientData.shiftNotes.summary,
            nextShift: data.shiftNotes.nextShift || defaultPatientData.shiftNotes.nextShift
        }
    };

    return validatedData;
};
