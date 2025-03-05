import { useState, useCallback, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Path } from "@/ogm-types"
import { useCreatePath } from "@/lib/mutations/useCreatePath"
import { useUpdatePath } from "@/lib/mutations/useUpdatePath"
import { CreatedPath, ExtendedMessage, Topic } from '../types'
import { useGenerateLesson } from '../../createLesson'
import { getRandomColor, getRandomIcon, createTopicKey } from '../utils/helpers'
import { SupportedLanguage } from '@/app/types'
import { ApiCreateDetailedLearningPlanResponse } from '@/lib/validateCreateDetailedLearningPlanApiResponse'

export const usePathCreation = (
    onCreate?: (lessonId: string) => void
) => {
    const [processingTopics, setProcessingTopics] = useState<string[]>([])
    const [failedTopics, setFailedTopics] = useState<string[]>([])
    const [createdPath, setCreatedPath] = useState<Pick<Path, "id" | "title" | "color" | "icon"> | null>(null)
    const [createdLessons, setCreatedLessons] = useState<{ id: string, topic: string, subtopic: string }[]>([])
    const [autoCreationInProgress, setAutoCreationInProgress] = useState(false)

    // Use a ref to track if auto-creation is in progress to avoid race conditions
    const autoCreationInProgressRef = useRef(false);

    const { generateLesson } = useGenerateLesson()
    const createPath = useCreatePath()
    const updatePath = useUpdatePath()

    const handleCreateLesson = useCallback(async (
        topic: string,
        subtopic: string,
        level: string,
        language: SupportedLanguage,
        numberOfQuestions: string,
        setMessages: React.Dispatch<React.SetStateAction<ExtendedMessage[]>>,
        currentCreatedPath?: CreatedPath | null,
    ) => {
        // Create a unique key for this topic-subtopic pair
        const topicKey = createTopicKey(topic, subtopic);
        const path = currentCreatedPath ?? createdPath;
        // Check if already processing this topic
        if (processingTopics.includes(topicKey)) {
            console.log(`Already processing ${topic}: ${subtopic}`);
            return;
        }

        // Check if this lesson has already been created
        if (createdLessons.some(lesson => lesson.topic === topic && lesson.subtopic === subtopic)) {
            console.log(`Lesson for ${topic}: ${subtopic} already created`);
            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `Lesson for "${topic}: ${subtopic}" has already been created and added to your path.`
            }]);
            return;
        }

        // Add to processing list
        setProcessingTopics(prev => {
            const newProcessingTopics = [...prev, topicKey];
            console.log(`Added to processing: ${topic}: ${subtopic}`, newProcessingTopics);
            return newProcessingTopics;
        });

        // Add message about creating lesson
        setMessages(prev => [...prev, {
            id: uuidv4(),
            type: 'assistant',
            content: `Creating a lesson on "${topic}: ${subtopic}"...`
        }]);

        try {
            // Create a lesson using the generateLesson function
            await generateLesson(
                { id: topic, title: topic } as Topic,
                { id: subtopic, title: subtopic } as Topic,
                level,
                language,
                numberOfQuestions,
                async (lessonId) => {
                    if (!lessonId) {
                        console.error(`No lesson ID returned for ${topic}: ${subtopic}`);
                        return;
                    }

                    console.log(`Lesson created with ID: ${lessonId} for ${topic}: ${subtopic}`);

                    // Add to created lessons first to prevent duplicates
                    setCreatedLessons(prev => {
                        // Check if this lesson is already in the list
                        if (prev.some(lesson => lesson.id === lessonId)) {
                            console.log(`Lesson ${lessonId} already in created lessons list`);
                            return prev;
                        }

                        const newLessons = [...prev, {
                            id: lessonId,
                            topic,
                            subtopic
                        }];
                        console.log(`Added to created lessons: ${topic}: ${subtopic}`, newLessons);
                        return newLessons;
                    });

                    // If we have a created path, add the lesson to the path
                    console.log(`Path: ${path}`);
                    if (path) {
                        try {
                            console.log(`Attempting to add lesson ${lessonId} to path ${path.id}`);
                            await updatePath(path, lessonId);

                            console.log(`Successfully added lesson ${lessonId} to path ${path.id}`);
                        } catch (error) {
                            console.error(`Error updating path with lesson: ${error}`);
                        }
                    } else {
                        console.warn(`No path created yet for lesson ${lessonId}`);
                    }

                    // Call the original onCreate if provided
                    if (onCreate) onCreate(lessonId);
                }
            );

            // Update message to show success
            setMessages(prev => {
                const newMessages = [...prev];
                const lastIndex = newMessages.length - 1;
                newMessages[lastIndex] = {
                    id: uuidv4(),
                    type: 'assistant',
                    content: `✅ Lesson created successfully for "${topic}: ${subtopic}"! ${currentCreatedPath ? `It has been added to your "${currentCreatedPath.title}" learning path.` : 'You can access it in your lessons.'}`
                };
                return newMessages;
            });

            // Remove from failed topics if it was there
            setFailedTopics(prev => prev.filter(item => item !== topicKey));
        } catch (error) {
            console.error(`Error creating lesson for ${topic}: ${subtopic}:`, error);

            // Update message to show error
            setMessages(prev => {
                const newMessages = [...prev];
                const lastIndex = newMessages.length - 1;
                newMessages[lastIndex] = {
                    id: uuidv4(),
                    type: 'assistant',
                    content: `❌ Failed to create lesson for "${topic}: ${subtopic}". Please try again later.`
                };
                return newMessages;
            });

            // Add to failed topics
            setFailedTopics(prev => [...prev, topicKey]);
        } finally {
            // Remove from processing list
            setProcessingTopics(prev => {
                const newProcessingTopics = prev.filter(item => item !== topicKey);
                console.log(`Removed from processing: ${topic}: ${subtopic}`, newProcessingTopics);
                return newProcessingTopics;
            });
        }
    }, [createdLessons, createdPath, generateLesson, onCreate, processingTopics, updatePath]);

    const startAutoCreation = useCallback(async (
        selectedTheme: string,
        detailedPlanItems: ApiCreateDetailedLearningPlanResponse,
        level: string,
        language: SupportedLanguage,
        numberOfQuestions: string,
        setMessages: React.Dispatch<React.SetStateAction<ExtendedMessage[]>>
    ) => {
        // Set both the state and the ref
        setAutoCreationInProgress(true);
        autoCreationInProgressRef.current = true;

        setFailedTopics([]);
        setCreatedLessons([]);

        // Add message about starting auto-creation
        setMessages(prev => [...prev, {
            id: uuidv4(),
            type: 'assistant',
            content: `Starting to create your learning path. This may take a few minutes...`
        }]);

        try {
            // First, create a path with the selected theme as title
            const newPath = {
                title: selectedTheme,
                icon: getRandomIcon(),
                color: getRandomColor()
            };

            // Create the path and get the actual path ID from the API
            const createdPathResult = await createPath(newPath);
            if (!createdPathResult) {
                throw new Error("Failed to create path");
            }

            // Store the created path with the actual ID from the API
            setCreatedPath(createdPathResult);

            // Add message about path creation
            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `✅ Created learning path "${selectedTheme}" with ID: ${createdPathResult.id}. Now creating lessons for all topics...`
            }]);

            // Process lessons sequentially to avoid race conditions
            for (let i = 0; i < detailedPlanItems.length; i++) {
                const item = detailedPlanItems[i];

                // Add a small delay between requests to prevent overwhelming the API
                if (i > 0) {
                    await new Promise(resolve => setTimeout(resolve, 800));
                }

                // Check if we should continue (user might have cancelled)
                if (!autoCreationInProgressRef.current) {
                    console.log("Auto-creation was cancelled");
                    break;
                }

                console.log(`Processing item ${i + 1}/${detailedPlanItems.length}: ${item.topic}: ${item.subtopic}`);

                await handleCreateLesson(
                    item.topic,
                    item.subtopic,
                    level,
                    language,
                    numberOfQuestions,
                    setMessages,
                    createdPathResult
                );
            }

            // Mark auto-creation as complete
            setAutoCreationInProgress(false);
            autoCreationInProgressRef.current = false;

            // Calculate total lessons and successful lessons
            const totalLessons = detailedPlanItems.length;
            const successfulLessons = createdLessons.length;

            // Show completion message
            if (failedTopics.length > 0) {
                setMessages(prev => [...prev, {
                    id: uuidv4(),
                    type: 'assistant',
                    content: `Learning path creation complete! ${successfulLessons} out of ${totalLessons} lessons were created successfully and added to your "${createdPathResult.title}" path. ${failedTopics.length} lessons failed to create. You can retry creating the failed lessons individually by clicking on them.`
                }]);
            } else {
                setMessages(prev => [...prev, {
                    id: uuidv4(),
                    type: 'assistant',
                    content: `🎉 Success! All ${totalLessons} lessons have been created and added to your "${createdPathResult.title}" learning path! You can access your complete path in the "My Paths" section.`
                }]);
            }
        } catch (error) {
            console.error("Error creating path:", error);
            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `❌ Failed to create learning path. Please try again later.`
            }]);
            setAutoCreationInProgress(false);
            autoCreationInProgressRef.current = false;
        }
    }, [createPath, handleCreateLesson]);

    return {
        processingTopics,
        failedTopics,
        createdPath,
        createdLessons,
        autoCreationInProgress,
        startAutoCreation,
        setAutoCreationInProgress
    }
} 