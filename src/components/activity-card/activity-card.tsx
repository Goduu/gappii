"use client"
import React, { FC, useState } from 'react'
import {
    Card, CardHeader, CardTitle,
    CardFooter
} from "@/components/ui/card";
import { GapInput } from './gap-input';
import { Activity } from '@/ogm-types';
import { ActivityReactions } from './activity-reactions';
import { motion } from 'framer-motion';
import { GappiiBehindElement } from '../ui/gappii-behind-element';
import { SessionMode, SessionModes } from "../session/types";
import { PulppiiBehindElement } from '../ui/pulppii-behind-element';
import { ActivityImage } from './activity-image';
import { ActivityAnswerInput } from './activity-answer-input';

const cardVariants = {
    initial: (direction: 'next' | 'prev') => ({
        x: direction === 'next' ? '100%' : '-50%',
        opacity: 0
    }),
    animate: {
        x: 0,
        opacity: 1
    },
    exit: (direction: 'next' | 'prev') => ({
        x: direction === 'next' ? '-50%' : '100%',
        opacity: 0
    })
};

type ActivityCardProps = {
    activity: Activity;
    reported: boolean;
    onNext: (isCorrect: boolean, answer?: string) => void;
    direction: 'next' | 'prev';
    isCorrectingMistakes?: boolean;
    mode?: SessionMode
};

export const ActivityCard: FC<ActivityCardProps> = ({
    activity,
    reported,
    onNext,
    direction,
    isCorrectingMistakes = false,
    mode = SessionModes.EitherOr
}) => {
    const [message, setMessage] = useState<string>('');
    const [userAnswer, setUserAnswer] = useState<string>('');
    const BehindElement = isCorrectingMistakes ? PulppiiBehindElement : GappiiBehindElement;

    return (
        <motion.div
            key={`activity-${activity.id}`}
            custom={direction}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                type: 'tween',
                duration: 0.25
            }}
            className="w-full"
        >
            <BehindElement
                message={message}
                showMessage={message !== ""}
            >
                <Card className="w-96 relative">
                    <CardHeader>
                        <ActivityImage diagram={activity.mermaid ?? undefined} />
                        <div className='absolute right-1 top-1 z-10'>
                            {activity.id && (
                                <ActivityReactions
                                    activityId={activity.id}
                                    reported={reported}
                                />
                            )}
                        </div>
                        <CardTitle className="pt-3 flex justify-center items-baseline">
                            <GapInput
                                text={activity.description}
                                value={userAnswer}
                                options={activity.options}
                                answer={activity.answer}
                            />
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex justify-center gap-2 w-full">
                        <ActivityAnswerInput
                            mode={mode}
                            options={activity.options || []}
                            answer={activity.answer}
                            comment={activity.comment}
                            userAnswer={userAnswer}
                            onNext={onNext}
                            onMessageChange={setMessage}
                            onUserAnswerChange={setUserAnswer}
                        />
                    </CardFooter>
                </Card>
            </BehindElement>
        </motion.div>
    );
};