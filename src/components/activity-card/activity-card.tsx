"use client"
import React, { FC, useEffect, useState, useRef, useCallback } from 'react'
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
import { Input } from "@/components/ui/input";
import { LessonMode } from '../lesson-page/type';
import { useDebouncedCallback } from 'use-debounce';
import { ArrowRightIcon } from 'lucide-react';

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
    mode?: LessonMode
};

export const ActivityCard: FC<ActivityCardProps> = ({
    activity,
    reported,
    onNext,
    direction,
    mode = 'normal'
}) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [activityDone, setActivityDone] = useState<boolean>(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [message, setMessage] = useState<string>('');
    const messageTimeoutRef = useRef<NodeJS.Timeout>();

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter' && activityDone) {
            onNext(isAnswerCorrect ?? false);
        }
    }, [activityDone, isAnswerCorrect, onNext]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            if (messageTimeoutRef.current) {
                clearTimeout(messageTimeoutRef.current);
            }
        };
    }, [handleKeyPress]);

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

        if (selected.toLocaleLowerCase() === activity.answer.toLocaleLowerCase()) {
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

        

    const onUserAnswerChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const userAnswer = e.target.value.toLocaleLowerCase()
        setSelectedOption(userAnswer)
        if (userAnswer === activity.answer.toLocaleLowerCase()) {
            setActivityDone(true);
            if (isAnswerCorrect === null) setIsAnswerCorrect(true);
            setMessage(activity.comment);
            messageTimeoutRef.current = setTimeout(() => setMessage(''), 8000);
        }
    }, 200)

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
                                answer={activity.answer}
                            />
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex justify-center gap-2 w-full">
                        {activityDone ? (
                            <Button 
                                size="lg"
                                onClick={() => onNext(isAnswerCorrect ?? false)}
                                className="relative group"
                            >
                                Go to Next
                                <span className="absolute right-1 top-1 text-xs text-muted-foreground group-hover:opacity-100 transition-opacity">
                                    ↵
                                </span>
                            </Button>
                        ) : mode === 'hard' ? (
                            <>
                                <Input
                                    onChange={onUserAnswerChange}
                                    placeholder="Type your answer..."
                                    className="flex-1"
                                    autoFocus
                                />
                                <Button onClick={() => onNext(false)} type="submit" className='flex items-center gap-1'>Skip <ArrowRightIcon /></Button>
                            </>
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