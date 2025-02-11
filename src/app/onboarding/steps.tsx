import { routes } from '@/lib/routes'
import { ReactNode } from 'react'

export interface PageSteps {
    [page: string]: {
        selector: string
        instructionContent: ReactNode
        autoPassIfNextSelectorFound?: boolean 
    }[]
}

export const onboardingSteps: PageSteps = {
    [routes.onboarding]: [{
        selector: '.ob-terms-of-use',
        instructionContent: (
            <div >
                <h3 className="font-semibold text-lg">Welcome to Gappii!</h3>
                <p>Before we start, please review and accept our Terms of Use.</p>
                <p className="text-sm text-muted-foreground">
                    This will help you understand how to use our platform effectively.
                </p>
            </div>
        )
    }, {
        selector: '#ob-spotlight-toggle',
        instructionContent: (
            <div className="p-1 w-48">
                <p>We will guide you through the platform. You can toggle the spotlight on and off at any time.</p>
            </div>
        )
    }, {
        selector: '.ob-button',
        instructionContent: (
            <div className="space-y-3">
                <h3 className="font-semibold text-lg">Create Your First Lesson</h3>
                <p>Click here to start creating your first interactive lesson.</p>
                <p className="text-sm text-muted-foreground">
                    You'll be able to add activities, exercises, and more!
                </p>
            </div >
        ),
    }],
    [routes.dashboard]: [{
        selector: '#ob-statistics',
        instructionContent: "Here you can see your statistics and progress."
    }, {
        selector: '#ob-my-lessons',
        instructionContent: "Here you can see the lessons you created.",
    }, {
        selector: '#ob-create-lesson-button',
        instructionContent: "You can create a custom new lesson.",
        autoPassIfNextSelectorFound: true
    }, {
        selector: '#ob-create-yourself-button',
        instructionContent: "You can create the lesson yourself."
    }, {
        selector: '#ob-create-with-ai-button',
        instructionContent: "You can create a lesson with AI."
    }
    ]
} 