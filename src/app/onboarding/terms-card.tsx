import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import React, { FC, useState } from 'react'
import { TermsOfUseDialog } from './terms-of-use'
import { completeOnboarding } from './actions'
import { useUser } from '@clerk/nextjs'
import { routes } from '@/lib/routes'
import { redirect } from 'next/navigation'

export const TermsCard: FC = () => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const { user } = useUser();

    const handleContinue = async () => {
        const res = await completeOnboarding();

        if (res?.message) {
            await user?.reload();
            redirect(routes.dashboard);
        }
    }

    return (
        <Card className="w-full max-w-lg mx-auto ob-terms-of-use">
            <CardHeader>
                <CardTitle>Welcome to Gappi!</CardTitle>
                <CardDescription>
                    Please accept our terms to continue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="terms"
                        checked={acceptedTerms}
                        onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                    />
                    <label htmlFor="terms" className="text-sm">
                        I accept the{' '}
                        <TermsOfUseDialog />
                    </label>
                </div>
                <Button
                    onClick={handleContinue}
                    disabled={!acceptedTerms}
                    className="w-full mt-4 ob-button"
                >
                    Continue
                </Button>
            </CardContent>
        </Card>
    )
}
