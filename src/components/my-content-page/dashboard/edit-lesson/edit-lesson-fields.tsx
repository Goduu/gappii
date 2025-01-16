import React, { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { LessonFormValues } from './useLessonForm';
import { Languages, List, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageSelector } from '@/components/learn-input/language-selector';
import { Switch } from '@/components/ui/switch';
import { SupportedLanguage } from '@/app/types';
import { FormField, FormItem, FormControl, FormLabel } from '@/components/ui/form';
import { TopicSelection } from '@/components/learn-input/topic-selection';

type EditLessonFieldsProps = {
  form: UseFormReturn<LessonFormValues>
}

export const EditLessonFields: FC<EditLessonFieldsProps> = ({ form }) => {

  return (
    <Card className="w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-gray-700">
          <List className="w-5 h-5" />
          Fields
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            {/* @ts-expect-error @FIXIT TODO */}
            <TopicSelection form={form} />
          </div>

          <div className='flex justify-between gap-2'>
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

            <div className="flex justify-between items-center gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-gray-700">
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
