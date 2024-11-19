export type PatientData = {
    basicInfo: {
        name: string;
        age: number;
        patientId: string;
        roomNumber: string;
        allergies: string[]
    };
    vitals: {
        temperature: string;
        bloodPressure: string;
        heartRate: number;
        respiratoryRate: number;
        mentalStatus: 'Alert' | 'Drowsy' | 'Confused' | 'Oriented';
        painLevel: number,
        painLocation: string,
        painResponse: string;
    };
    medications: {
        name: string;
        lastDose: string;
        prn: boolean;
    }[];
    shiftNotes: {
        summary: string;
        nextShift: string;
    };
}