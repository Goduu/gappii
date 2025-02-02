import React, { useCallback, useEffect, useRef, useState } from 'react'
import { LessonMode, LessonModes } from '../lesson-page/type';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDebouncedCallback } from 'use-debounce';

type ActivityAnswerInputProps = {
    mode: LessonMode;
    options: string[];
    answer: string;
    comment: string;
    userAnswer: string;
    onNext: (isCorrect: boolean, answer?: string) => void;
    onMessageChange: (message: string) => void;
    onUserAnswerChange: (answer: string) => void;
}

export const ActivityAnswerInput = ({
    mode,
    options,
    answer,
    comment,
    userAnswer,
    onNext,
    onMessageChange,
    onUserAnswerChange
}: ActivityAnswerInputProps) => {
    const [activityDone, setActivityDone] = useState<boolean>(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const messageTimeoutRef = useRef<NodeJS.Timeout>();
    const sortedOptions = options.sort((a: string, b: string) => (a < b ? -1 : 1));

    const handleSelect = (selected: string) => {
        onUserAnswerChange(selected);

        if (messageTimeoutRef.current) {
            clearTimeout(messageTimeoutRef.current);
        }

        if (selected.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
            setActivityDone(true);
            if (isAnswerCorrect === null) setIsAnswerCorrect(true);
            onMessageChange(comment);
            messageTimeoutRef.current = setTimeout(() => onMessageChange(''), 8000);
        } else {
            if (isAnswerCorrect === null) setIsAnswerCorrect(false);
            if (mode === LessonModes.EitherOr) {
                onMessageChange("Try again! You will eventually get it right!");
                messageTimeoutRef.current = setTimeout(() => onMessageChange(''), 3000);
            }
        }
    };

    const handleKeyPress = useCallback((event: KeyboardEvent) => {

        if (event.key === 'Enter' && activityDone) {
            onNext(isAnswerCorrect ?? false, userAnswer);
        }
        if (mode !== LessonModes.EitherOr) return

        if (!isAnswerCorrect) {
            if (event.key === 'ArrowLeft') {
                handleSelect(sortedOptions[0]);
            }
            if (event.key === 'ArrowRight') {
                handleSelect(sortedOptions[1]);
            }
        }
    }, [activityDone, isAnswerCorrect, onNext, handleSelect, userAnswer]);

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
        onUserAnswerChange('');
        setActivityDone(false);
        setIsAnswerCorrect(null);

        return () => {
            if (messageTimeoutRef.current) {
                clearTimeout(messageTimeoutRef.current);
            }
        };
    }, [options, answer, onUserAnswerChange]);

    const onUserInputChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const userAnswer = e.target.value.toLocaleLowerCase();
        handleSelect(userAnswer);
    }, 200);

    if (activityDone) {
        return (
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
        );
    }

    switch (mode) {
        case LessonModes.TypeIn:
            return (
                <div className="flex gap-2 w-full">
                    <Input
                        onChange={onUserInputChange}
                        placeholder="Type your answer..."
                        className="flex-1"
                        autoFocus
                    />
                    <Button
                        onClick={() => onNext(false, userAnswer)}
                        type="submit"
                        className='flex items-center gap-1'
                    >
                        Skip <ArrowRightIcon />
                    </Button>
                </div>
            );

        case LessonModes.EitherOr:
            return (
                <div className="flex gap-2 w-full">
                    {sortedOptions.map(option => (
                        <Button
                            key={option}
                            size="lg"
                            variant="outline"
                            className='w-1/2 relative group'
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                            <span className={cn(
                                "absolute top-1 text-xs text-muted-foreground/30 group-hover:text-muted-foreground/100 transition-colors",
                                option === sortedOptions[0] && 'left-1',
                                option === sortedOptions[1] && 'right-1'
                            )}>
                                {option === sortedOptions[0] ? '←' : '→'}
                            </span>
                        </Button>
                    ))}
                </div>
            );

        case LessonModes.PickNMatch:
            // TODO: Implement Pick and Match mode
            return null;

        default:
            return null;
    }
}
