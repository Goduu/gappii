import { PatientDataCardSkeleton } from '@/components/patient/details-page/patient-data-card-skeleton'
import { PatientDetailsPage } from '@/components/patient/details-page/patient-details-page'
import React, { Suspense, use } from 'react'

type PatientDetailsProps = {
    params: Promise<{
        patientId: string
    }>
}

const PatientDetails = ({ params }: PatientDetailsProps) => {
    const { patientId } = use(params)

    return (
        <Suspense fallback={<PatientDataCardSkeleton />}>
            <PatientDetailsPage patientId={patientId} />
        </Suspense>
    )
}

export default PatientDetails