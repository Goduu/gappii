"use client";

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { translatePrompt, translatePromptCommand, translatePromptJson } from '../translatePrompt';
import { Loader2, RefreshCw, AlertCircle, Bug } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Import the test lessons
import lessonLists from './translationTestLessons';

// Define the lesson type
interface Lesson {
  topic: string;
  subtopic: string;
  keywords: string[];
  language: string;
  level: number;
  activities: {
    description: string;
    order: number;
    options: string[];
    answer: string;
    comment: string;
  }[];
}

// Define supported languages for translation
const supportedLanguages = [
  { value: "es-es", label: "Spanish" },
  { value: "fr-fr", label: "French" },
  { value: "de-de", label: "German" },
  { value: "it-it", label: "Italian" },
  { value: "pt-br", label: "Portuguese (Brazil)" },
  { value: "ja-jp", label: "Japanese" },
  { value: "zh-cn", label: "Chinese (Simplified)" },
  { value: "ru-ru", label: "Russian" },
];

// Define the prompt types
const promptTypes = [
  { value: "standard", label: "Standard Prompt", prompt: translatePrompt },
  { value: "command", label: "Command Prompt", prompt: translatePromptCommand },
  { value: "json", label: "JSON Prompt", prompt: translatePromptJson },
];

// Maximum number of retry attempts
const MAX_RETRIES = 3;

export default function TranslationsTest() {
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(supportedLanguages[0].value);
  const [translations, setTranslations] = useState<Record<string, string | null>>({
    standard: null,
    command: null,
    json: null,
  });
  const [loading, setLoading] = useState<Record<string, boolean>>({
    standard: false,
    command: false,
    json: false,
  });
  const [retryCount, setRetryCount] = useState<Record<string, number>>({
    standard: 0,
    command: 0,
    json: 0,
  });
  const [errors, setErrors] = useState<Record<string, string | null>>({
    standard: null,
    command: null,
    json: null,
  });
  const [activeTab, setActiveTab] = useState("standard");

  // Function to translate a lesson using the API
  const translateLesson = async (promptType: string, isRetry = false) => {
    // Reset error for this prompt type if not a retry
    if (!isRetry) {
      setErrors(prev => ({ ...prev, [promptType]: null }));
      setRetryCount(prev => ({ ...prev, [promptType]: 0 }));
    }

    setLoading(prev => ({ ...prev, [promptType]: true }));

    try {
      const response = await fetch('/api/translate-lesson/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lesson: lessonLists[selectedLesson],
          language: selectedLanguage,
          promptType: promptType,
        }),
      });

      if (!response.ok) {
        throw new Error(`Translation failed with status: ${response.status}`);
      }

      const data = await response.text();

      // Check if the response contains an error message
      if (data.includes("error") || data.includes("Error")) {
        throw new Error(data);
      }

      setTranslations(prev => ({ ...prev, [promptType]: data }));
      setErrors(prev => ({ ...prev, [promptType]: null }));
    } catch (error) {
      console.error('Error translating lesson:', error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setErrors(prev => ({ ...prev, [promptType]: errorMessage }));
      setTranslations(prev => ({ ...prev, [promptType]: null }));
    } finally {
      setLoading(prev => ({ ...prev, [promptType]: false }));
    }
  };

  // Function to retry a failed translation
  const retryTranslation = async (promptType: string) => {
    // Increment retry count
    const newRetryCount = retryCount[promptType] + 1;
    setRetryCount(prev => ({ ...prev, [promptType]: newRetryCount }));

    // Attempt the translation again
    await translateLesson(promptType, true);
  };

  // Function to translate with all prompt types
  const translateWithAllPrompts = () => {
    promptTypes.forEach(type => translateLesson(type.value));
  };

  // Reset translations when lesson or language changes
  useEffect(() => {
    setTranslations({
      standard: null,
      command: null,
      json: null,
    });
    setErrors({
      standard: null,
      command: null,
      json: null,
    });
    setRetryCount({
      standard: 0,
      command: 0,
      json: 0,
    });
  }, [selectedLesson, selectedLanguage]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Bug />
        Translation Prompt Testing
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Test Configuration</CardTitle>
              <CardDescription>Select a lesson and target language</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Lesson</label>
                <Select
                  value={selectedLesson.toString()}
                  onValueChange={(value) => setSelectedLesson(parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lesson" />
                  </SelectTrigger>
                  <SelectContent>
                    {lessonLists.map((lesson: Lesson, index: number) => (
                      <SelectItem key={index} value={index.toString()}>
                        {lesson.topic}: {lesson.subtopic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Target Language</label>
                <Select
                  value={selectedLanguage}
                  onValueChange={setSelectedLanguage}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    {supportedLanguages.map((language) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full mt-4"
                onClick={translateWithAllPrompts}
                disabled={Object.values(loading).some(Boolean)}
              >
                {Object.values(loading).some(Boolean) ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Translating...
                  </>
                ) : (
                  "Translate with All Prompts"
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Original Lesson</CardTitle>
              <CardDescription>
                {lessonLists[selectedLesson].topic}: {lessonLists[selectedLesson].subtopic}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-auto max-h-[400px] text-sm">
                {JSON.stringify(lessonLists[selectedLesson], null, 2)}
              </pre>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Translation Results</CardTitle>
              <CardDescription>Compare results from different prompts</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-4">
                  {promptTypes.map((type) => (
                    <TabsTrigger key={type.value} value={type.value} className="relative">
                      {type.label}
                      {loading[type.value] && (
                        <Loader2 className="ml-2 h-4 w-4 animate-spin inline" />
                      )}
                      {errors[type.value] && !loading[type.value] && (
                        <AlertCircle className="ml-2 h-4 w-4 text-destructive inline" />
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {promptTypes.map((type) => (
                  <TabsContent key={type.value} value={type.value} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">{type.label}</h3>
                      <div className="flex gap-2">
                        {errors[type.value] && retryCount[type.value] < MAX_RETRIES && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => retryTranslation(type.value)}
                            disabled={loading[type.value]}
                            className="flex items-center gap-1 text-amber-500 border-amber-500 hover:bg-amber-500/10"
                          >
                            <RefreshCw className="h-4 w-4" />
                            Retry ({retryCount[type.value]}/{MAX_RETRIES})
                          </Button>
                        )}
                        <Button
                          size="sm"
                          onClick={() => translateLesson(type.value)}
                          disabled={loading[type.value]}
                        >
                          {loading[type.value] ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Translating...
                            </>
                          ) : (
                            "Translate"
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted p-2 rounded-md">
                      <h4 className="text-sm font-medium mb-2">Prompt Used:</h4>
                      <pre className="text-xs overflow-auto max-h-[100px] p-2 bg-background rounded">
                        {type.prompt
                          .replace("<lesson_json>", "...")
                          .replace("<target_language>", selectedLanguage)}
                      </pre>
                    </div>

                    {errors[type.value] && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Translation Failed</AlertTitle>
                        <AlertDescription className="text-sm">
                          {errors[type.value]}
                          {retryCount[type.value] >= MAX_RETRIES && (
                            <div className="mt-2 font-semibold">
                              Maximum retry attempts reached ({MAX_RETRIES}).
                            </div>
                          )}
                        </AlertDescription>
                      </Alert>
                    )}

                    <div>
                      <h4 className="text-sm font-medium mb-2">Translation Result:</h4>
                      {translations[type.value] ? (
                        <pre className="bg-background p-4 rounded-md overflow-auto max-h-[400px] text-sm">
                          {translations[type.value]}
                        </pre>
                      ) : (
                        <div className="bg-background p-4 rounded-md text-center text-muted-foreground">
                          {loading[type.value] ? (
                            <div className="flex items-center justify-center">
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Translating...
                            </div>
                          ) : (
                            errors[type.value] ? (
                              <div className="flex flex-col items-center justify-center text-destructive">
                                <AlertCircle className="h-6 w-6 mb-2" />
                                Translation failed
                              </div>
                            ) : (
                              "Click 'Translate' to see results"
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
