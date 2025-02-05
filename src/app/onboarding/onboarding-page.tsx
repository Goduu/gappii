"use client"
import React from 'react';
import { TermsCard } from './terms-card';

const OnboardingFlow = () => {
    return (

        <div className="min-h-screen w-full">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-2">
                        <div className='first-step'>
                            <TermsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingFlow;