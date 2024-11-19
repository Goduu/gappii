import React, { FC } from 'react'
import { Tablets } from 'lucide-react';
import { Patient } from '@/ogm-resolver/ogm-types';

type PatientMedicationProps = {
    medicationsConnection: Patient["takenMedicationConnection"]

}

export const PatientMedication: FC<PatientMedicationProps> = ({ medicationsConnection }) => {
    console.log(medicationsConnection.edges)
    return (
        <div className="mt-6">
            <h3 className="text-xl font-medium flex items-center gap-2"><Tablets /> Medications</h3>

            <div className="flex flex-col gap-4 mt-2">
                {/* Medications */}
                {medicationsConnection.edges.map((med) => (
                    <div key={med.node.id} className="flex gap-2 items-center">
                        {med.node.name}
                        <span>Taken at: {med.properties.at}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}
