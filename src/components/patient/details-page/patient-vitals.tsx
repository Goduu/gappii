import React, { FC } from 'react'
import { Activity } from 'lucide-react';
import { VitalsObservation } from '@/ogm-resolver/ogm-types';

type PatientBasicInformationProps = {
    vitals: VitalsObservation[]

}

export const PatientVitals: FC<PatientBasicInformationProps> = ({ vitals }) => {
    const lastVital = vitals.reduce((latest, current) => {
        return new Date(latest.observationDate) > new Date(current.observationDate) ? latest : current;
    });

    return (
        < div >
            <h3 className="text-xl font-medium flex items-center gap-2"><Activity /> Vitals & Key Observations </h3>
            <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between">
                    <span className="font-medium">Temperature:</span>
                    <span>{lastVital.temperature}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Blood Pressure:</span>
                    <span>{lastVital.bloodPressure}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Heart Rate:</span>
                    <span>{lastVital.heartRate}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Respiratory Rate:</span>
                    <span>{lastVital.respiratoryRate}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Pain Level:</span>
                    <span>{lastVital.painLevel} / 10</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Pain Location:</span>
                    <span>{lastVital.painLocation}</span>
                </div>
                <div className="flex justify-between gap-1">
                    <span className="font-medium">Pain Response:</span>
                    <span>{lastVital.painResponse}</span>
                </div>
                <div>
                    <div className='flex gap-2'>
                        <span className="font-medium">Mental Status:</span>

                        <div className="flex flex-col items-start gap-1">
                            {lastVital.mentalStatus}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
