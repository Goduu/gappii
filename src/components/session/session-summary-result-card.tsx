
import { formatTime } from '@/lib/utils';
import { XCircle } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import React, { FC } from 'react'
import { ActivityAttempt } from './types';

type SessionSummaryResultCardProps = {
    activityAttempt: ActivityAttempt;
    index: number;
    totalTimeTaken: number;
}

export const SessionSummaryResultCard: FC<SessionSummaryResultCardProps> = ({ activityAttempt, index, totalTimeTaken }) => {
    return (
        <div
            className={`
            relative p-1 rounded-lg border cursor-pointer
            ${activityAttempt.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}
        `}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {activityAttempt.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">
                        Question {index + 1}
                    </span>
                </div>
                <div className="flex items-center">
                    <span className="text-sm text-muted-foreground">
                        {formatTime(activityAttempt.timeTaken)}
                    </span>
                </div>
            </div>
            <div
                className={`
                absolute bottom-0 left-0 h-1 rounded-b-lg
                ${activityAttempt.isCorrect ? 'bg-green-500' : 'bg-red-500'}
            `}
                style={{
                    width: `${(activityAttempt.timeTaken / totalTimeTaken) * 100}%`
                }}
            />
        </div>
    );
}
