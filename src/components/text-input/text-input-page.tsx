"use client"
import React, { FC, useState, useTransition } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { PatientData } from '../patient/types'
import { transformInputIntoData } from './processTextInput'
import { useCreatePatient } from './createPatient'
import { Spline } from 'lucide-react'

export const TextInputPage: FC = () => {
    const [text, setText] = useState('')
    const createPatient = useCreatePatient()
    const [isPending, startTransition] = useTransition()



    const handlePatientData = async () => {
        // const apiResult = callApi(text)
        const patientData = await transformInputIntoData(text)
        createPatient(patientData)
    }

    return (
        <>
            <div className='text-3xl font-bold'>
                Data Input
            </div>
            <div className='min-w-[360px] md:min-w-[580px] flex flex-col gap-4 items-center'>
                <Textarea value={text} onChange={(e) => { setText(e.target.value) }} className='h-96 w-ful rounded-xl' />
                <Button className='w-2/3 flex gap-2' onClick={() => startTransition(handlePatientData)}>
                    {isPending && <Spline className="animate-spin h-5 w-5 mr-3 " />}
                    Submit
                </Button>
            </div>
        </>
    )
}


const patientData: PatientData = {
    basicInfo: {
        name: "Mrie Alcapaha",
        age: 10,
        patientId: "123456",
        allergies: ["Peanuts", "Latex"],
        roomNumber: "101A"
    },
    vitals: {
        temperature: "37.6°C",
        bloodPressure: "120/80",
        heartRate: 72,
        respiratoryRate: 16,
        painLevel: 4,
        painLocation: "Lower back",
        painResponse: "Improves with rest",
        mentalStatus: "Alert",
    },
    medications: [
        { name: "Ibuprofen", lastDose: "2023-11-07T10:00", prn: true },
        { name: "Metformin", lastDose: "2023-11-07T08:00", prn: false }
    ],
    shiftNotes: {
        summary: "Patient resting, pain managed with medication.",
        nextShift: "Monitor pain level and mobility."
    },
};
