import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import React, { FC } from 'react'
import { TermsOfUseDialog } from './terms-of-use'

type TermsCardProps = {
    acceptedTerms: boolean;
    setAcceptedTerms: (accepted: boolean) => void;
    handleNextStep: () => void;
}

export const TermsCard: FC<TermsCardProps> = ({ acceptedTerms, setAcceptedTerms, handleNextStep }) => {
    return (
        <Card className="w-full max-w-lg mx-auto">
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
                    onClick={handleNextStep}
                    disabled={!acceptedTerms}
                    className="w-full mt-4"
                >
                    Continue
                </Button>
            </CardContent>
        </Card>
    )
}
