"use client"
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getLesson } from '@/lib/queries/getLesson';
import { Lesson } from '@/ogm-types';
import { TermsCard } from './terms-card';
import { LoadingAnimation } from '@/components/loading-animation';
import { SessionProgressManager } from '@/components/session/session-progress-manager';
import { LessonSessionData } from '@/components/session/types';
import { LearnInput } from '@/components/learn-input/learn-input';

const OnboardingFlow = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [lesson, setLesson] = useState<Lesson | null>(null);

    const handleNextStep = () => {
        setCurrentStep(prev => prev + 1);
    };

    const handleAfterLessonCreation = async (lessonId: string) => {
        const lesson = await getLesson(lessonId);
        setLesson(lesson)
        handleNextStep()

    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <TermsCard handleNextStep={handleNextStep} />
                );

            case 2:
                return (
                    <Card className="w-full max-w-lg mx-auto">
                        <CardHeader>
                            <CardTitle>Get Started</CardTitle>
                            <CardDescription>
                                Tell us what you&apos;d like to learn
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LearnInput onCreate={handleAfterLessonCreation} />
                        </CardContent>
                    </Card>
                );

            case 3:
                const sessionData: LessonSessionData = {
                    type: 'lesson',
                    lessonId: lesson?.id || "",
                    activities: lesson?.hasActivities.map(
                        (activity) => ({
                            ...activity,
                            title: lesson.hasTopic.title,
                            subtitle: lesson.hasSubtopic.title,
                        })
                    ) || []
                }
                return lesson ? (
                    <SessionProgressManager sessionData={sessionData} isOnboarding/>
                ) : <LoadingAnimation />

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen w-full">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-2">
                        {[1, 2, 3].map((step) => (
                            <React.Fragment key={step}>
                                <div
                                    className={`w-8 h-8 rounded-full text-white flex items-center justify-center shadow ${step === currentStep
                                        ? 'bg-blue-500 '
                                        : step < currentStep
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-500'
                                        }`}
                                >
                                    {step < currentStep ? '✓' : step}
                                </div>
                                {step < 3 && (
                                    <div
                                        className={`w-16 h-1 rounded-md shadow-sm ${step < currentStep ? 'bg-green-500' : 'bg-gray-500'}`}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                {renderStep()}
            </div>
        </div>
    );
};

export default OnboardingFlow;