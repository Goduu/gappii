"use client"
import React, { FC, useEffect, useState, useRef } from 'react'
import { Button } from "@/components/ui/button";
import {
    Card, CardHeader, CardTitle,
    CardFooter
} from "@/components/ui/card";
import { GapInput } from './gap-input';
import { Activity } from '@/ogm-resolver/ogm-types';
import { ActivityReactions } from './activity-reactions';
import { motion } from 'framer-motion';
import { GappiiBehindElement } from '../ui/gappii-behind-element';

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

// Activity Card Component
type ActivityCardProps = {
    activity: Activity;
    reported: boolean;
    onNext: (isCorrect: boolean) => void;
    direction: 'next' | 'prev';
};

export const ActivityCard: FC<ActivityCardProps> = ({
    activity,
    reported,
    onNext,
    direction
}) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [activityDone, setActivityDone] = useState<boolean>(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [message, setMessage] = useState<string>('');
    const messageTimeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        setSelectedOption('');
        setActivityDone(false);
        // Clear any existing timeout when component unmounts or activity changes
        return () => {
            if (messageTimeoutRef.current) {
                clearTimeout(messageTimeoutRef.current);
            }
        };
    }, [activity]);

    const handleSelect = (selected: string) => {
        setSelectedOption(selected);
        
        // Clear any existing timeout
        if (messageTimeoutRef.current) {
            clearTimeout(messageTimeoutRef.current);
        }

        if (selected === activity.answer) {
            setActivityDone(true);
            if (isAnswerCorrect === null) setIsAnswerCorrect(true);
            setMessage(activity.comment);

            messageTimeoutRef.current = setTimeout(() => setMessage(''), 8000);
        } else {
            if (isAnswerCorrect === null) setIsAnswerCorrect(false);
            setMessage("Try again! You will eventually get it right!");
            messageTimeoutRef.current = setTimeout(() => setMessage(''), 3000);
        }
    };

    const showComment = message !== "";

    const activitySortedOptions = activity.options
        ? [...activity.options].sort((a: string, b: string) => (a < b ? -1 : 1))
        : [];

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
            className=" w-full"
        >
            <GappiiBehindElement
                message={message}
                showMessage={showComment}
            >
                <Card className="w-96 relative">
                    <CardHeader>
                        <div className='absolute right-1 top-1'>
                            {activity.id && (
                                <ActivityReactions
                                    activityId={activity.id}
                                    reported={reported}
                                />
                            )}
                        </div>
                        <CardTitle className="flex justify-center items-baseline">
                            <GapInput
                                text={activity.description}
                                value={selectedOption}
                                options={activity.options}
                            />
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex justify-center gap-0 w-full">
                        {activityDone ? (
                            <Button size="lg" onClick={() => onNext(isAnswerCorrect ?? false)}>Go to Next</Button>
                        ) : (
                            activitySortedOptions.map(option => (
                                <Button
                                    key={option}
                                    size="lg"
                                    variant="outline"
                                    className='w-1/2'
                                    onClick={() => handleSelect(option)}
                                >
                                    {option}
                                </Button>
                            ))
                        )}
                    </CardFooter>
                </Card>
            </GappiiBehindElement>
        </motion.div>
    );
};