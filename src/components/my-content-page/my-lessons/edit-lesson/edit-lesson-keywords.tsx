import React, { FC } from 'react';
import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { LessonFormValues } from './useLessonForm';
import { KeyRound, Minus, Plus } from 'lucide-react';
import { EditLessonKeyword } from './edit-lesson-keyword';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type EditLessonKeyWordsProps = {
  form: UseFormReturn<LessonFormValues>
}

export const EditLessonKeywords: FC<EditLessonKeyWordsProps> = ({ form }) => {
  const { fields: keywords, append: appendKeyword, remove } = useFieldArray({
    control: form.control,
    name: "keywords"
  });

  return (
    <Card className="w-full bg-white shadow-xs hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-gray-700">
          <KeyRound className="w-5 h-5" />
          Keywords
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 items-center max-w-(--breakpoint-sm) md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) xl:max-w-(--breakpoint-xl)">
          {keywords.map((keyword, index) => (
            <EditLessonKeyword
              key={keyword.id}
              form={form}
              index={index}
              removeKeyword={() => remove(index)}
            />
          ))}

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => remove(keywords.length - 1)}
            className="h-8 w-8 rounded-full border-dashed border-gray-300 hover:border-gray-400 
                     hover:bg-gray-50 transition-all duration-200"
          >
            <Minus className="h-4 w-4 text-gray-500" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => appendKeyword({ id: crypto.randomUUID(), name: "" })}
            className="h-8 w-8 rounded-full border-dashed border-gray-300 hover:border-gray-400 
                     hover:bg-gray-50 transition-all duration-200"
          >
            <Plus className="h-4 w-4 text-gray-500" />
          </Button>
        </div>

        {keywords.length === 0 && (
          <p className="text-sm text-gray-500 mt-2">
            Add keywords to help categorize and search for this lesson
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default EditLessonKeywords;