"use client"
import React, { FC, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import {
    Card, CardHeader, CardTitle,
    CardFooter
} from "@/components/ui/card";
import { GapInput } from './gap-input';
import { useToast } from '@/hooks/use-toast';
import { Activity } from '@/ogm-resolver/ogm-types';
import { ActivityReactions } from './activity-reactions';
import { motion } from 'framer-motion';
// Card Variants for Transition
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
    topic: string;
    subtopic: string;
    activity: Activity;
    reported: boolean;
    onNext?: () => void;
    direction: 'next' | 'prev';
};

export const ActivityCard: React.FC<ActivityCardProps> = ({ 
    topic, 
    subtopic, 
    activity, 
    reported, 
    onNext, 
    direction 
}) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [activityDone, setActivityDone] = useState<boolean>(false);
    const { toast } = useToast();

    useEffect(() => {
        setSelectedOption('');
        setActivityDone(false);
    }, [activity]);

    const handleSelect = (selected: string) => {
        setSelectedOption(selected);
        if (selected === activity.answer) {
            setActivityDone(true);
            toast({
                title: `Nice! It's ${selected}`,
                description: activity.comment,
                variant: "default",
                duration: 10000,
            });
        } else {
            toast({
                title: "Try again!",
                description: "You will eventually get it right!",
                variant: "destructive"
            });
        }
    };

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
            className="absolute w-full"
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
                    <CardTitle className="flex justify-end items-baseline">
                        <GapInput 
                            text={activity.description} 
                            value={selectedOption} 
                            options={activity.options} 
                        />
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex justify-center gap-0 w-full">
                    {activityDone ? (
                        <Button size="lg" onClick={onNext}>Go to Next</Button>
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
        </motion.div>
    );
};