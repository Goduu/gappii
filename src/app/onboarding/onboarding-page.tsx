"use client"
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LearnInput } from '@/components/learn-input/learn-input';
import { getLesson } from '@/lib/queries/getLesson';
import { Lesson } from '@/ogm-types';
import { TermsCard } from './terms-card';
import { LoadingAnimation } from '@/components/loading-animation';
import { OnboardingLesson } from './onboarding-lesson';
import { LessonProvider } from '@/components/lesson-page/lesson-context';

const OnboardingFlow = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
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
                    <TermsCard
                        acceptedTerms={acceptedTerms}
                        setAcceptedTerms={setAcceptedTerms}
                        handleNextStep={handleNextStep} />
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
                            <LearnInput onCreate={handleAfterLessonCreation} hideAdvancedParams hideCreateYourself />
                        </CardContent>
                    </Card>
                );

            case 3:
                return lesson ? (
                    <LessonProvider lesson={lesson}>
                        <OnboardingLesson
                            lesson={lesson}
                        />
                    </LessonProvider>
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