"use client"
import * as React from 'react';
import { Card, CardHeader, CardTitle } from '../../ui/card';
import { useQuery } from '@apollo/client';
import { GET_PATIENTS_ID_NAME } from '@/lib/gqls/patientGQLs';
import { redirect } from 'next/navigation';
import { PatientCardsSkeleton } from './patient-cards-skeleton';


const PatientCardsPage: React.FC = () => {

    const { loading, error, data } = useQuery<{ patients: Array<any> }>(GET_PATIENTS_ID_NAME)

    if (loading) return <PatientCardsSkeleton />

    return (
        <>
            {data?.patients.map((patient) => {
                return (
                    <Card className="w-fit cursor-pointer" key={patient.id} onClick={() => redirect(`/patient-data/${patient.id}`)}>
                        <CardHeader>
                            <CardTitle className='text-xl'>{patient.name}</CardTitle>
                        </CardHeader>
                    </Card >
                )
            }
            )}
        </>
    );
};

export default PatientCardsPage;