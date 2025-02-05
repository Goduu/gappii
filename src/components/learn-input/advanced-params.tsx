import { FC } from 'react'
import { LevelSelector } from './level-selector'
import { LanguageSelector } from './language-selector'
import { SupportedLanguage } from '@/app/types'
import { UseFormReturn } from 'react-hook-form'
import { CreateLessonFormValues } from './useCreateLessonForm'
import { FormField, FormMessage } from '../ui/form'
import { FormItem } from '../ui/form'
import { QuestionNumberSlider } from './question-number-slider'

interface AdvancedParamsProps {
    form: UseFormReturn<CreateLessonFormValues>
}

export const AdvancedParams: FC<AdvancedParamsProps> = ({
    form
}) => {

    return (
        <div id="ob-advanced-params" className='flex flex-col md:flex-row gap-2 w-full'>
            <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                    <FormItem>
                        <LevelSelector
                            level={field.value.toString()}
                            onLevelChange={(level) => field.onChange(parseInt(level))}
                        />
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                    <FormItem>
                        <LanguageSelector
                            language={field.value as SupportedLanguage}
                            onLanguageChange={field.onChange}
                        />
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="activitiesNumber"
                render={({ field }) => (
                    <FormItem>
                        <QuestionNumberSlider
                            activitiesNumber={field.value}
                            onActivitiesNumberChange={field.onChange}
                        />
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
} 