'use client'

import React, { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { LessonFormValues } from './useLessonForm';
import { Languages, List, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageSelector } from '@/components/learn-input/language-selector';
import { Switch } from '@/components/ui/switch';
import { SupportedLanguage } from '@/app/types';
import { FormField, FormItem, FormControl, FormLabel, FormMessage } from '@/components/ui/form';
import { TopicAutoComplete } from '@/components/learn-input/topic-autocomplete';
import { Option } from '@/components/ui/autocomplete';

type EditLessonFieldsProps = {
  form: UseFormReturn<LessonFormValues>
}

export const EditLessonFields: FC<EditLessonFieldsProps> = ({ form }) => {

  return (
    <Card className="w-full bg-white shadow-xs hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-gray-700">
          <List className="w-5 h-5" />
          Fields
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
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
                          onSelectTopic={(topic: Option | null) => field.onChange({ id: topic?.value || "", title: topic?.label || "" })}
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
                        onSelectTopic={(subtopic: Option | null) => field.onChange({ id: subtopic?.value || "", title: subtopic?.label || "" })}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-2 md:gap-4'>
            <div className='flex flex-col gap-2'>
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <Languages className="w-5 h-5" />
                <FormLabel className="text-sm font-medium mb-2 block">Language</FormLabel>
              </div>
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <LanguageSelector
                        language={field.value as SupportedLanguage}
                        onLanguageChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-2 text-gray-700 mb-1">
                  <Users className="w-5 h-5" />
                  <FormLabel className="text-sm font-medium mb-2 block">Public Lesson</FormLabel>
                </div>
                <div className="text-sm text-muted-foreground">
                  Make this lesson visible to other users
                </div>
              </div>
              <FormField
                control={form.control}
                name="isPublic"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
