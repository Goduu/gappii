import React, { FC, useState } from 'react'
import { Button } from '../ui/button'
import { Copy, BookMarked, Languages } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { LanguageSelector } from '../learn-input/language-selector'
import { Card, CardContent, CardDescription } from '../ui/card'
import { redirect } from "next/navigation"
import { routes } from "@/lib/routes"
import { userHasLesson } from "@/lib/mutations/userHasLesson"
import { toast } from "@/hooks/use-toast"
import { ToastAction } from "../ui/toast"
import { Lesson } from "../../ogm-types"
import { SupportedLanguage } from "@/app/types"
import { translateLesson } from "@/lib/translateLesson"
import { getLessonByIdToTranslate } from '@/lib/queries/getLessonByIdToTranslate'
import { useSaveTranslatedLesson } from '@/lib/mutations/useSaveTranslatedLesson'
import { useTransitionContext } from '../loading-store'
import { useUser } from '@/lib/useUser'

type AddLessonToLibraryContentProps = {
    lesson: Lesson
}

export const AddLessonToLibraryContent: FC<AddLessonToLibraryContentProps> = ({ lesson }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>()
    const userData = useUser()
    const saveTranslatedLesson = useSaveTranslatedLesson()
    const { startTransition } = useTransitionContext()

    const handleGoToLibrary = () => {
        startTransition(() => redirect(routes.dashboard))
    }

    const handleAdd = () => {
        startTransition(async () => {
            if (userData?.email) await userHasLesson(userData?.email, lesson.id!, "ADDED")
            toast({
                title: "Lesson added",
                description: "The lesson has been added to your library (just reading)",
                action: <ToastAction altText="See" onClick={handleGoToLibrary}>See</ToastAction>
            })
        })
    }

    const handleCopy = () => {
        startTransition(async () => {
            if (userData?.email) await userHasLesson(userData?.email, lesson.id!, "COPIED")
            toast({
                title: "Lesson copied",
                description: "The lesson has been copied to your library"
            })
        })
    }

    const handleError = (error: string) => {
        toast({
            title: "Error",
            description: error,
            variant: "destructive"
        })
    }

    const handleTranslate = () => {
        if (!selectedLanguage) return

        startTransition(async () => {
            const lessonToTranslate = await getLessonByIdToTranslate(lesson.id!)

            if (userData?.email) {
                const translatedLesson = await translateLesson(lessonToTranslate, selectedLanguage, handleError)

                if (translatedLesson) {
                    await saveTranslatedLesson(translatedLesson)

                    toast({
                        title: "Lesson translated",
                        description: "The lesson has been translated to your library",
                        action: <ToastAction altText="See" onClick={handleGoToLibrary}>See</ToastAction>
                    })
                }
            }
        })
    }

    return (
        <div className="flex flex-col gap-6 py-4">
            <Tabs defaultValue="copy" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="copy">Copy</TabsTrigger>
                    <TabsTrigger value="add">Add to Library</TabsTrigger>
                    <TabsTrigger value="translate">Translate</TabsTrigger>
                </TabsList>

                <TabsContent value="copy">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col gap-4">
                                <CardDescription className="h-12">
                                    Create a copy of this lesson to edit and customize it as you want
                                </CardDescription>
                                <Button className="w-full sm:w-auto" onClick={handleCopy}>
                                    <Copy className="mr-2 h-4 w-4" />
                                    Create a copy
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="add">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col gap-4">
                                <CardDescription className="h-12">
                                    Add this lesson to your library as a copy and get the updates if the owner changes the lesson
                                </CardDescription>
                                <Button className="w-auto sm:w-auto" onClick={handleAdd}>
                                    <BookMarked className="mr-2 h-4 w-4" />
                                    Add to library
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="translate">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col gap-4">
                                <CardDescription className="h-12">
                                    Translate this lesson to another language and add it to your library
                                </CardDescription>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <LanguageSelector
                                        language={selectedLanguage}
                                        onLanguageChange={setSelectedLanguage}
                                    />
                                    <Button
                                        className="w-full sm:w-auto"
                                        disabled={!selectedLanguage}
                                        onClick={handleTranslate}
                                    >
                                        <Languages className="mr-2 h-4 w-4" />
                                        Translate and add
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
