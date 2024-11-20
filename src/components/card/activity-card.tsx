"use client"
import React, { FC, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import {
    Card, CardHeader, CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";
import { GapInput } from './gap-input';
import { useToast } from '@/hooks/use-toast';
import { VotingIcons, VotingIconsProps } from './voting-icons';
import { Activity } from '@/ogm-resolver/ogm-types';

type ActivityCardProps = {
    topic: string;
    subtopic: string;
    activity: Activity
    voting?: VotingIconsProps
    onNext?: () => void
}

export const ActivityCard: FC<ActivityCardProps> = ({ topic, subtopic, activity, voting, onNext }) => {
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [activityDone, setActivityDone] = useState<boolean>(false)

    const { toast } = useToast()

    useEffect(() => {
        setSelectedOption('')
        setActivityDone(false)
    }, [activity])

    const handleSelect = (selected: string) => {
        setSelectedOption(selected)
        if (selected === activity.answer) {
            setActivityDone(true)
            toast({
                title: `Nice! It's ${selected}`,
                description: activity.comment,
                variant: "default",
                duration: 10000,
            })
        } else {
            toast({
                title: "Try again!",
                description: "You will eventually get it right!",
                variant: "destructive"
            }
            )
        }
    }

    return (
        <Card className="w-96">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    {topic} / {subtopic}
                    <VotingIcons {...voting} />
                </CardTitle>
                <CardDescription>
                    <GapInput text={activity.description} value={selectedOption} options={activity.options} />
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center gap-4">
                {activityDone ?
                    <Button size="sm" onClick={onNext}>Go to Next</Button>
                    : activity.options.map(option => {
                        return (
                            <Button key={option} size="sm" onClick={() => handleSelect(option)}>{option}</Button>
                        )
                    })}
            </CardFooter>
        </Card>
    )
}

