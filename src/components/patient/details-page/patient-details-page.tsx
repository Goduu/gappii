import React, { FC } from 'react'
import PatientDataCard from './patient-information-card'

type PatientDetailsPageProps = {
    patientId: string
}

export const PatientDetailsPage: FC<PatientDetailsPageProps> = ({ patientId }) => {

    return (
        <div className='flex flex-col gap-8'>
            <div className='text-3xl font-bold md:min-w-[560px]'>
                Patient Data
            </div>
            <PatientDataCard patientId={patientId} />
        </div>
    )
}
