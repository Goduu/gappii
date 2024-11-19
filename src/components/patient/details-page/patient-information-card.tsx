"use client"
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { PatientBasicInformation } from './patient-basic-information';
import { PatientMedication } from './patient-medication';
import { PatientShiftNotes } from './patient-shift-notes';
import { PatientVitals } from './patient-vitals';
import { Patient } from '@/ogm-resolver/ogm-types';
import { useQuery } from '@apollo/client';
import { GET_PATIENT } from '@/lib/gqls/patientGQLs';
import { PatientDataCardSkeleton } from './patient-data-card-skeleton';

interface PatientDataCardProps {
    patientId: string;
}

const PatientDataCard: React.FC<PatientDataCardProps> = ({ patientId }) => {
    const { loading, error, data } = useQuery<{ patients: Patient[] }>(GET_PATIENT, {
        variables: {
            id: patientId
        }
    })

    if (loading) return <PatientDataCardSkeleton />
    if (!data) return <div>No data for this patient</div>

    const patientData = data.patients[0]

    return (
        <Card className="">
            <CardHeader>
                <CardTitle className='text-xl'>{patientData.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <>
                    <div className="flex flex-col sm:flex-row justify-between gap-8">
                        {/* Basic Patient Info */}
                        <PatientBasicInformation {...patientData} />
                        {/* Vitals & Key Observations */}
                        <PatientVitals vitals={patientData.hasObservation} />
                    </div>

                    {/* Medications & Treatments */}
                    <PatientMedication medicationsConnection={patientData.takenMedicationConnection} />

                    {/* Shift Notes & Handover */}
                    <PatientShiftNotes nextShift={patientData.hasNextShift} shiftSummary={patientData.hasShiftSummary} />

                    {/* Alerts & Flags */}
                </>
            </CardContent>
        </Card >
    );
};

export default PatientDataCard;