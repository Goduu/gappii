import { FC } from 'react'
import { TopicAutoComplete } from './topic-autocomplete'
import { UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { AutocompleteOption } from '../ui/autocomplete'

interface TopicSelectionProps {
    form: UseFormReturn<{
        topic: { id: string; title: string };
        subtopic: { id: string; title: string };
    }>
}

export const TopicSelection: FC<TopicSelectionProps> = ({ form }) => {

    return (
        <>
            <div className='flex gap-2 w-full'>
                <div className='flex-col flex gap-1 w-1/2'>
                    <p className='text-sm'>Topic:</p>
                    <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <TopicAutoComplete
                                        selectedTopic={field.value}
                                        onSelectTopic={(topic: AutocompleteOption | null) => field.onChange({ id: topic?.value || "", title: topic?.label || "" })}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='flex-col flex gap-1 w-1/2'>
                    <p className='text-sm'>Subtopic:</p>
                    <FormField
                        control={form.control}
                        name="subtopic"
                        render={({ field }) => (
                            <FormItem>
                                <TopicAutoComplete
                                    selectedTopic={field.value}
                                    onSelectTopic={(subtopic: AutocompleteOption | null) => field.onChange({ id: subtopic?.value || "", title: subtopic?.label || "" })}
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </>
    )
} 