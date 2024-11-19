import React, { FC } from 'react'
import { User } from 'lucide-react';
import { Patient } from '@/ogm-resolver/ogm-types';

export const PatientBasicInformation: FC<Patient> = ({ age, allergies }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div>
                <h3 className="text-xl font-medium flex items-center gap-2"><User /> Basic Information</h3>
                <div className="flex flex-col gap-2 mt-2">
                    <div className="flex justify-between">
                        <span className="font-medium">Age:</span>
                        <span>{age}</span>
                    </div>
                    {/* Allergies */}
                    <div className="flex justify-between">
                        <span className="font-medium">Allergies</span>
                        <div className='flex flex-col gap-2'>
                            {allergies.map((allergy) => (
                                <div key={allergy} className="flex items-center">
                                    <span>{allergy}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
