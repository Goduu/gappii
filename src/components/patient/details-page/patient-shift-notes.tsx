import React, { FC } from 'react'
import { Textarea } from '../../ui/textarea';
import { NotebookPen } from 'lucide-react';
import { Patient } from '@/ogm-resolver/ogm-types';

type PatientShiftNotesProps = {
    shiftSummary: Patient["hasShiftSummary"];
    nextShift: Patient["hasNextShift"];
}

export const PatientShiftNotes: FC<PatientShiftNotesProps> = ({ shiftSummary, nextShift }) => {
    const lastShiftSummary = shiftSummary.reduce((prev, current) => (prev.date > current.date) ? prev : current);
    const lastNextShift = nextShift.reduce((prev, current) => (prev.date > current.date) ? prev : current);

    return (
        <div className="mt-6">
            <h3 className="text-xl font-medium flex gap-2 items-center"> <NotebookPen /> Notes & Handover</h3>
            <div className="flex flex-col gap-4 mt-2">
                {/* Shift Summary */}
                <div>
                    <h4 className="text-lg font-medium">Last Shift Summary</h4>
                    <Textarea
                        disabled
                        value={lastShiftSummary.note}
                        placeholder="Enter shift summary"
                    />
                </div>

                {/* Next Shift Notes */}
                <div>
                    <h4 className="text-lg font-medium">Next Shift Notes</h4>
                    <Textarea
                        disabled
                        value={lastNextShift.note}
                        placeholder="Enter notes for next shift"
                    />
                </div>
            </div>
        </div>
    )
}
