"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { X, SendHorizontal, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDetectEsc } from "@/lib/utilitary-hooks/useDetectEsc"
import { MessageBubble } from "../message-bubble"
import { LoadingBubble } from "../loading-bubble"
import { SupportedLanguage } from "@/app/types"
import { useGenerateLesson } from "../createLesson"
import { createLearningGoals } from "@/lib/createLearningGoals"
import { v4 as uuidv4 } from 'uuid'
import { createDetailedLearningPlan } from "@/lib/createDetailedLearningPlan"
import { DetailedPlanItem, ExtendedMessage, PathInputBoxProps, Topic } from "./types"
import { ApiCreateLearningGoalsResponse } from "@/lib/validateCreateLearningGoalsApiResponse"
import { ApiCreateDetailedLearningPlanResponse } from "@/lib/validateCreateDetailedLearningPlanApiResponse"
import { Whisper } from "@/components/ui/tooltip"
import { modifyDetailedLearningPlan } from "@/lib/modifyDetailedLearningPlan"
import { useCreatePath } from "@/lib/mutations/useCreatePath"
import { useUpdatePath } from "@/lib/mutations/useUpdatePath"
import { Path } from "@/ogm-types"
import { transformInputIntoData } from "@/lib/processTextInput"
import { sendErrorToast } from "@/lib/utils"

type PathCocreationProps = {
    isOpen?: boolean
    onCreate?: (lessonId: string) => void
    onClose?: () => void
}


const PathInputBox = ({ error, isActive, disabled, onSubmit, setIsActive, setError }: PathInputBoxProps) => {
    const [input, setInput] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async () => {
        if (!input.trim() || disabled) return

        const userInput = input
        setInput("")
        await onSubmit(userInput)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    return (
        <div className="relative w-full flex flex-col items-center">
            {error && isActive && (
                <div className="text-red-500 text-sm text-center mb-2">
                    {error}
                </div>
            )}
            <div
                className={cn(
                    "flex flex-col gap-4 p-6 rounded-lg border bg-background transition-all duration-500",
                    "w-full max-w-4xl relative",
                    isActive && "shadow-lg"
                )}
            >
                <div className="flex gap-2 items-center">
                    <Input
                        ref={inputRef}
                        disabled={disabled}
                        placeholder="Type your response..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={() => setIsActive(true)}
                        onKeyDown={handleKeyPress}
                        className="flex-1 h-full text-lg border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                        disabled={disabled}
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                        onClick={handleSubmit}
                    >
                        <SendHorizontal className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

// Add new types for plan modification
type PlanModificationState = 'none' | 'selecting' | 'describing';
type SelectedModification = {
    topic: string;
    subtopic?: string;
};

export const PathCocreation = ({ isOpen = false, onCreate, onClose }: PathCocreationProps) => {
    const [isActive, setIsActive] = useState(isOpen)
    const [error, setError] = useState<string>("")
    const [messages, setMessages] = useState<ExtendedMessage[]>([
        {
            id: uuidv4(),
            type: 'assistant',
            content: "What topic or skill would you like to learn about today? Feel free to be as specific or general as you'd like."
        }
    ])
    const [level, setLevel] = useState("1")
    const [language, setLanguage] = useState<SupportedLanguage>("en-us")
    const [numberOfQuestions, setNumberOfQuestions] = useState("7")
    const [learningGoals, setLearningGoals] = useState<ApiCreateLearningGoalsResponse>([])
    const [selectedTheme, setSelectedTheme] = useState<string>("")
    const [selectedGoals, setSelectedGoals] = useState<string[]>([])
    const [detailedPlanItems, setDetailedPlanItems] = useState<ApiCreateDetailedLearningPlanResponse>([])
    const [processingTopics, setProcessingTopics] = useState<string[]>([])
    const [planModificationState, setPlanModificationState] = useState<PlanModificationState>('none')
    const [selectedModification, setSelectedModification] = useState<SelectedModification | null>(null)
    const [autoCreationInProgress, setAutoCreationInProgress] = useState(false)
    const [failedTopics, setFailedTopics] = useState<string[]>([])
    const [createdPath, setCreatedPath] = useState<Pick<Path, "id" | "title" | "color" | "icon"> | null>(null)
    const [createdLessons, setCreatedLessons] = useState<{id: string, topic: string, subtopic: string}[]>([])

    const { generateLesson } = useGenerateLesson()
    const createPath = useCreatePath()
    const updatePath = useUpdatePath()

    useDetectEsc(onClose || (() => { }))

    const containerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // Prevent body scrolling when component is active
    useEffect(() => {
        if (isActive) {
            // Save the current overflow style
            const originalStyle = window.getComputedStyle(document.body).overflow;
            // Prevent scrolling on the body
            document.body.style.overflow = 'hidden';

            // Restore original overflow on cleanup
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [isActive]);

    useEffect(() => {
        if (messages.length > 0 && isActive) {
            scrollToBottom()
        }
    }, [messages, isActive])

    useEffect(() => {
        setIsActive(isOpen)
    }, [isOpen])

    const handleClose = () => {
        setIsActive(false)
        onClose?.()
    }

    const handleUserInput = async (input: string) => {
        // Add user message
        setMessages(prev => [...prev, {
            id: uuidv4(),
            type: 'user',
            content: input
        }])

        // Add loading message
        setMessages(prev => [...prev, {
            id: uuidv4(),
            type: 'loading'
        }])

        // If no learning goals yet, get them from AI
        if (learningGoals.length === 0) {
            try {
                // Simulate AI response with learning goals
                // In a real implementation, you would call your AI service here
                const learningGoals = await createLearningGoals(input, (error) => {
                    setMessages(prev => [...prev.slice(0, -1), {
                        id: uuidv4(),
                        type: 'assistant',
                        content: "I'm sorry, I encountered an error while generating learning goals. Please try again."
                    }])
                })

                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 2000))

                setLearningGoals(learningGoals || [])

                // Format the learning goals for display with clickable options
                const responseMessage = "Here are some learning paths based on your interests. Click on a theme to select it:"

                // Remove loading message and add AI response with learning goals
                setMessages(prev => [...prev.slice(0, -1), {
                    id: uuidv4(),
                    type: 'assistant',
                    content: responseMessage,
                    learningGoals: learningGoals || []
                }])
            } catch (error) {
                console.error("Error generating learning goals:", error)
                setMessages(prev => [...prev.slice(0, -1), {
                    id: uuidv4(),
                    type: 'assistant',
                    content: "I'm sorry, I encountered an error while generating learning goals. Please try again."
                }])
            }
        }
        // If learning goals exist but no detailed plan yet, process the user's selection
        else if (learningGoals.length > 0 && !selectedTheme) {
            try {
                // Find the selected theme
                const selectedLearningGoal = learningGoals.find(goal => goal.theme === input)

                if (!selectedLearningGoal) {
                    setMessages(prev => [...prev.slice(0, -1), {
                        id: uuidv4(),
                        type: 'assistant',
                        content: "I couldn't understand your selection. Please try clicking on one of the themes."
                    }])
                    return
                }

                // Select the theme and the first learning goal
                setSelectedTheme(selectedLearningGoal.theme)
                setSelectedGoals([selectedLearningGoal.learning_goals[0]])

                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 2000))

                const detailedPlan = await createDetailedLearningPlan(
                    { selectedTheme: selectedLearningGoal.theme, selectedGoals: JSON.stringify(selectedLearningGoal.learning_goals) },
                    (error) => {
                        setMessages(prev => [...prev.slice(0, -1), {
                            id: uuidv4(),
                            type: 'assistant',
                            content: "I'm sorry, I encountered an error while generating the detailed plan. Please try again."
                        }])
                    })


                setDetailedPlanItems(detailedPlan || [])

                // Format the detailed plan for display
                let formattedPlan = `Great choice! Here's a detailed plan for learning about **${selectedLearningGoal.theme}**:\n\n`

                // Group by topic
                const topicGroups: Record<string, DetailedPlanItem[]> = {}
                detailedPlan?.forEach(item => {
                    if (!topicGroups[item.topic]) {
                        topicGroups[item.topic] = []
                    }
                    topicGroups[item.topic].push(item)
                })

                const mockDetailedPlan: DetailedPlanItem[] = [
                    {
                        topic: "Variables",
                        subtopic: "Declaration Methods",
                        learning_points: ["var", "let", "const"]
                    },
                    {
                        topic: "Variables",
                        subtopic: "Data Types",
                        learning_points: ["Primitives", "Objects", "Type Conversion"]
                    },
                    {
                        topic: "Functions",
                        subtopic: "Function Declarations",
                        learning_points: ["Named Functions", "Anonymous Functions", "Arrow Functions"]
                    },
                    {
                        topic: "Functions",
                        subtopic: "Scope",
                        learning_points: ["Global Scope", "Function Scope", "Block Scope"]
                    },
                    {
                        topic: "Control Flow",
                        subtopic: "Conditionals",
                        learning_points: ["If/Else", "Switch", "Ternary Operators"]
                    },
                    {
                        topic: "Control Flow",
                        subtopic: "Loops",
                        learning_points: ["For Loop", "While Loop", "ForEach"]
                    }
                ]
                formattedPlan += "What would you like to do with this plan?"

                // Remove loading message and add AI response
                setMessages(prev => [...prev.slice(0, -1), {
                    id: uuidv4(),
                    type: 'assistant',
                    content: formattedPlan,
                    detailedPlan: detailedPlan || [],
                    showPlanOptions: true
                }])
            } catch (error) {
                console.error("Error processing selection:", error)
                setMessages(prev => [...prev.slice(0, -1), {
                    id: uuidv4(),
                    type: 'assistant',
                    content: "I'm sorry, I encountered an error while processing your selection. Please try again."
                }])
            }
        }
        // Handle modification description
        else if (planModificationState === 'describing' && selectedModification) {
            try {
                // Call the modifyDetailedLearningPlan function with the user's input
                const modifiedPlan = await modifyDetailedLearningPlan({
                    selectedTheme,
                    selectedGoals,
                    topic: selectedModification.topic,
                    subtopic: selectedModification.subtopic,
                    plan: detailedPlanItems,
                    userModifications: input,
                    language
                }, (error: string) => {
                    console.error("Error modifying plan:", error);
                    setMessages(prev => [...prev.slice(0, -1), {
                        id: uuidv4(),
                        type: 'assistant',
                        content: `I'm sorry, I encountered an error while modifying the plan: ${error}. Please try again.`
                    }]);
                });

                if (modifiedPlan) {
                    // Update the detailed plan items
                    setDetailedPlanItems(modifiedPlan);

                    // Format the updated plan for display
                    let formattedPlan = `I've updated the plan based on your feedback. Here's the revised plan for learning about **${selectedTheme}**:\n\n`;

                    // Group by topic
                    const topicGroups: Record<string, DetailedPlanItem[]> = {};
                    modifiedPlan.forEach(item => {
                        if (!topicGroups[item.topic]) {
                            topicGroups[item.topic] = [];
                        }
                        topicGroups[item.topic].push(item);
                    });


                    formattedPlan += "What would you like to do with this updated plan?";

                    // Reset modification state
                    setPlanModificationState('none');
                    setSelectedModification(null);

                    // Remove loading message and add AI response
                    setMessages(prev => [...prev.slice(0, -1), {
                        id: uuidv4(),
                        type: 'assistant',
                        content: formattedPlan,
                        detailedPlan: modifiedPlan,
                        showPlanOptions: true
                    }]);
                } else {
                    // Handle error case
                    setMessages(prev => [...prev.slice(0, -1), {
                        id: uuidv4(),
                        type: 'assistant',
                        content: "I'm sorry, I couldn't modify the plan. Please try again with different instructions."
                    }]);

                    // Reset modification state
                    setPlanModificationState('none');
                    setSelectedModification(null);
                }
            } catch (error) {
                console.error("Error in modification process:", error);
                setMessages(prev => [...prev.slice(0, -1), {
                    id: uuidv4(),
                    type: 'assistant',
                    content: "I'm sorry, I encountered an error while processing your modification request. Please try again."
                }]);

                // Reset modification state
                setPlanModificationState('none');
                setSelectedModification(null);
            }
        }
    }

    const getRandomIcon = () => {
        const icons = [
            "Brain", "Graduation Cap", "Book", "Lightbulb", "Target", "Clock", "Compass",
            "Notebook", "Puzzle", "Users", "Message Square", "Medal", "Calculator", "Globe",
            "Microscope", "Palette", "Code", "Library", "Rocket", "Flag"
        ];
        return icons[Math.floor(Math.random() * icons.length)];
    }

    const getRandomColor = () => {
        const colors = [
            "red", "orange", "yellow", "lime", "green", "emerald", "teal", "cyan",
            "blue", "indigo", "violet", "fuchsia", "pink", "slate", "zinc", "stone"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const handleTopicClick = async (topic: string, subtopic: string) => {
        // If in modification selection mode
        if (planModificationState === 'selecting') {
            setSelectedModification({ topic, subtopic });
            setPlanModificationState('describing');

            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `Please describe what changes you'd like to make to "${topic}: ${subtopic}".`
            }])
            return;
        }

        // Check if already processing this topic
        if (processingTopics.includes(`${topic}-${subtopic}`)) {
            return
        }

        // Check if this lesson has already been created
        if (createdLessons.some(lesson => lesson.topic === topic && lesson.subtopic === subtopic)) {
            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `Lesson for "${topic}: ${subtopic}" has already been created and added to your path.`
            }]);
            return;
        }

        // Add to processing list
        setProcessingTopics(prev => [...prev, `${topic}-${subtopic}`])

        // Add message about creating lesson
        setMessages(prev => [...prev, {
            id: uuidv4(),
            type: 'assistant',
            content: `Creating a lesson on "${topic}: ${subtopic}"...`
        }])

        try {
            // Create a lesson using the generateLesson function
            await generateLesson(
                { id: topic, title: topic } as Topic,
                { id: subtopic, title: subtopic } as Topic,
                level,
                language,
                numberOfQuestions,
                async (lessonId) => {
                    // If we have a created path and a lesson ID, add the lesson to the path
                    if (createdPath && lessonId) {
                        try {
                            await updatePath({
                                id: createdPath.id,
                                title: createdPath.title,
                                color: createdPath.color,
                                icon: createdPath.icon
                            }, lessonId);
                            
                            console.log(`Added lesson ${lessonId} to path ${createdPath.id}`);
                            
                            // Add to created lessons
                            setCreatedLessons(prev => [...prev, {
                                id: lessonId,
                                topic,
                                subtopic
                            }]);
                        } catch (error) {
                            console.error("Error updating path with lesson:", error);
                        }
                    }
                    
                    // Call the original onCreate if provided
                    if (onCreate) onCreate(lessonId);
                }
            );

            // Update message to show success
            setMessages(prev => {
                const newMessages = [...prev]
                const lastIndex = newMessages.length - 1
                newMessages[lastIndex] = {
                    id: uuidv4(),
                    type: 'assistant',
                    content: `✅ Lesson created successfully for "${topic}: ${subtopic}"! ${createdPath ? `It has been added to your "${createdPath.title}" learning path.` : 'You can access it in your lessons.'}`
                }
                return newMessages
            })

            // Remove from failed topics if it was there
            setFailedTopics(prev => prev.filter(item => item !== `${topic}-${subtopic}`))
        } catch (error) {
            console.error("Error creating lesson:", error)

            // Update message to show error
            setMessages(prev => {
                const newMessages = [...prev]
                const lastIndex = newMessages.length - 1
                newMessages[lastIndex] = {
                    id: uuidv4(),
                    type: 'assistant',
                    content: `❌ Failed to create lesson for "${topic}: ${subtopic}". Please try again later.`
                }
                return newMessages
            })

            // Add to failed topics
            setFailedTopics(prev => [...prev, `${topic}-${subtopic}`])
        } finally {
            // Remove from processing list
            setProcessingTopics(prev => prev.filter(item => item !== `${topic}-${subtopic}`))

            // If auto-creation was in progress, continue with next topic
            if (autoCreationInProgress) {
                continueAutoCreation();
            }
        }
    }

    const handleTopicOnlyClick = (topic: string) => {
        if (planModificationState === 'selecting') {
            setSelectedModification({ topic });
            setPlanModificationState('describing');

            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `Please describe what changes you'd like to make to all subtopics in "${topic}".`
            }])
        }
    }

    const startAutoCreation = async () => {
        setAutoCreationInProgress(true);
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

            // Generate a temporary path ID
            const tempPathId = uuidv4();

            // Store the created path for later use
            setCreatedPath({
                id: tempPathId,
                ...newPath
            });

            // Create the path
            await createPath(newPath);
            
            // Add message about path creation
            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `✅ Created learning path "${selectedTheme}". Now creating lessons for all topics...`
            }]);

            // Start processing multiple lessons in parallel (up to 3 at a time)
            const maxParallelProcessing = Math.min(3, detailedPlanItems.length);
            const initialItems = detailedPlanItems.slice(0, maxParallelProcessing);
            
            // Start with the first batch of topics/subtopics
            initialItems.forEach(item => {
                handleTopicClick(item.topic, item.subtopic);
            });
        } catch (error) {
            console.error("Error creating path:", error);
            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `❌ Failed to create learning path. Please try again later.`
            }]);
            setAutoCreationInProgress(false);
        }
    }

    const continueAutoCreation = () => {
        // If there are no detailed plan items, stop
        if (!detailedPlanItems.length) {
            setAutoCreationInProgress(false);
            return;
        }

        // Find the next topic/subtopic that isn't being processed and hasn't failed
        const nextItem = detailedPlanItems.find(item => {
            const key = `${item.topic}-${item.subtopic}`;
            return !processingTopics.includes(key) && 
                   !failedTopics.includes(key) && 
                   !createdLessons.some(lesson => lesson.topic === item.topic && lesson.subtopic === item.subtopic);
        });

        // If there's a next item, process it
        if (nextItem) {
            handleTopicClick(nextItem.topic, nextItem.subtopic);
        } else if (processingTopics.length === 0) {
            // If all items are processed and none are currently processing
            setAutoCreationInProgress(false);

            // Calculate total lessons and successful lessons
            const totalLessons = detailedPlanItems.length;
            const successfulLessons = createdLessons.length;

            // If there were any failed topics, show a message
            if (failedTopics.length > 0) {
                setMessages(prev => [...prev, {
                    id: uuidv4(),
                    type: 'assistant',
                    content: `Learning path creation complete! ${successfulLessons} out of ${totalLessons} lessons were created successfully and added to your "${selectedTheme}" path. ${failedTopics.length} lessons failed to create. You can retry creating the failed lessons individually by clicking on them.`
                }])
            } else {
                setMessages(prev => [...prev, {
                    id: uuidv4(),
                    type: 'assistant',
                    content: `🎉 Success! All ${totalLessons} lessons have been created and added to your "${selectedTheme}" learning path! You can access your complete path in the "My Paths" section.`
                }])
            }
        }
        // If there are still topics being processed, we'll wait for them to finish
    }

    const startPlanModification = () => {
        setPlanModificationState('selecting');

        setMessages(prev => [...prev, {
            id: uuidv4(),
            type: 'assistant',
            content: `Please click on a topic or subtopic that you'd like to modify.`
        }])
    }

    const renderPlanOptions = () => {
        return (
            <div className="flex w-full gap-3 items-end justify-end">
                <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                        variant="default"
                        className="flex-1 py-2"
                        onClick={startAutoCreation}
                        disabled={autoCreationInProgress || planModificationState !== 'none'}
                    >
                        <div className="flex flex-col items-center p-2 w-full">
                            <span className="text-md font-medium break-words">It looks nice!</span>
                            <span className="text-xs text-muted-foreground break-words">Start creating my learning path</span>
                        </div>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 py-2"
                        onClick={startPlanModification}
                        disabled={autoCreationInProgress || planModificationState !== 'none'}
                    >
                        <div className="flex flex-col items-center p-2 w-full">
                            <span className="text-md font-medium break-words">I want to change something</span>
                            <span className="text-xs text-muted-foreground break-words">Modify topics or subtopics</span>
                        </div>
                    </Button>
                </div>
                {autoCreationInProgress && (
                    <div className="mt-4 w-full">
                        <div className="text-sm text-center mb-2">
                            Creating lessons: {createdLessons.length} of {detailedPlanItems.length} complete
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                            <div 
                                className="bg-primary h-2.5 rounded-full" 
                                style={{ width: `${(createdLessons.length / detailedPlanItems.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    const renderLearningGoalOptions = (message: ExtendedMessage) => {
        if (!message.learningGoals) return null

        return (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {message.learningGoals.map((goal, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-start text-left hover:bg-accent/50 transition-colors break-words whitespace-normal"
                        onClick={() => handleThemeSelection(goal.theme)}
                    >
                        <h3 className="text-md font-semibold mb-1">{goal.theme}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{goal.description}</p>
                        <div className="w-full">
                            <h4 className="text-xs font-medium text-muted-foreground mb-1">Learning goals:</h4>
                            <ul className="text-xs list-disc pl-4 space-y-1">
                                {goal.learning_goals.map((lg, lgIndex) => (
                                    <li key={lgIndex}>{lg}</li>
                                ))}
                            </ul>
                        </div>
                    </Button>
                ))}
            </div>
        )
    }

    const handleThemeSelection = async (theme: string) => {
        // Add user message showing selection
        setMessages(prev => [...prev, {
            id: uuidv4(),
            type: 'user',
            content: theme
        }])

        // Process the selection
        await handleUserInput(theme);
    }

    const renderClickableTopics = (message: ExtendedMessage) => {
        if (!message.detailedPlan) return null

        // Group by topic
        const topicGroups: Record<string, DetailedPlanItem[]> = {}
        message.detailedPlan.forEach(item => {
            if (!topicGroups[item.topic]) {
                topicGroups[item.topic] = []
            }
            topicGroups[item.topic].push(item)
        })

        const isSelectingPlanModification = planModificationState === 'selecting'

        return (
            <div className="mt-4 space-y-4">
                {Object.entries(topicGroups).map(([topic, items], topicIndex) => (
                    <div key={topicIndex} className="space-y-2">
                        {isSelectingPlanModification ? (
                            <Button
                                variant="secondary"
                                className="w-fit justify-start font-semibold break-words"
                                onClick={() => handleTopicOnlyClick(topic)}
                            >
                                <span className="break-words">{topic}</span>
                            </Button>
                        ) : (
                            <h3 className="font-semibold break-words">{topic}</h3>
                        )}
                        <div className="flex flex-col gap-2">
                            {items.map((item, itemIndex) => {
                                const topicKey = `${topic}-${item.subtopic}`;
                                const isProcessing = processingTopics.includes(topicKey);
                                const hasFailed = failedTopics.includes(topicKey);
                                const isCreated = createdLessons.some(lesson => 
                                    lesson.topic === topic && lesson.subtopic === item.subtopic
                                );

                                return (
                                    <div key={itemIndex} className="flex items-center gap-2">
                                        <Button
                                            variant={hasFailed ? "destructive" : isCreated ? "default" : "outline"}
                                            className="flex flex-wrap justify-start h-auto py-2 px-3 w-fit max-w-full"
                                            disabled={isProcessing || (planModificationState === 'none' && autoCreationInProgress) || isCreated}
                                            onClick={() => handleTopicClick(topic, item.subtopic)}
                                        >
                                            <div className="flex items-start gap-2 w-full">
                                                <span className="break-words flex-1">{item.subtopic} </span>
                                                {isProcessing && (
                                                    <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full flex-shrink-0" />
                                                )}
                                                {hasFailed && !isProcessing && (
                                                    <span className="text-xs whitespace-nowrap flex-shrink-0">Click to retry</span>
                                                )}
                                                {isCreated && !isProcessing && (
                                                    <span className="text-xs whitespace-nowrap flex-shrink-0">✓ Created</span>
                                                )}
                                            </div>
                                        </Button>
                                        <Whisper text={item.learning_points.join(", ")} asChild>
                                            <Info className="text-muted-foreground size-6" />
                                        </Whisper>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
                {message.showPlanOptions && planModificationState === 'none' && renderPlanOptions()}
            </div>
        )
    }

    return (
        <div className={cn(
            "flex flex-col gap-4 items-center justify-center text-foreground p-4 transition-all duration-1000",
            isActive ? "fixed inset-0 z-40" : "relative"
        )}>
            <div className={cn(
                "absolute inset-0 bg-background opacity-0 scale-0 origin-center transition-all duration-500",
                isActive && "opacity-95 scale-100 backdrop-blur"
            )} />

            {/* Close button */}
            {isActive && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-50"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    <X className="size-6" />
                </Button>
            )}

            <div className={cn(
                "w-full max-w-3xl mx-auto space-y-6 relative transition-all duration-500",
                isActive && "z-20 scale-95"
            )}>
                <h1 className={cn(
                    "text-4xl font-bold text-center mb-12 transition-transform duration-500",
                    isActive && "-translate-y-10"
                )}>
                    Create Your Learning Path
                </h1>

                <div ref={containerRef} className="flex flex-col gap-2 items-center w-full">
                    {isActive && (
                        <div className="flex-1 overflow-y-auto space-y-4 max-h-96 w-full">
                            {messages.map((msg, index) => (
                                <div key={index} className="space-y-2">
                                    {msg.type === 'user' ? (
                                        <MessageBubble content={msg.content ?? ""} isUser={true} />
                                    ) : msg.type === 'loading' ? (
                                        <LoadingBubble />
                                    ) : msg.type === 'assistant' ? (
                                        <div>
                                            <MessageBubble content={msg.content ?? ""} isUser={false} />
                                            {msg.learningGoals && renderLearningGoalOptions(msg)}
                                            {msg.detailedPlan && renderClickableTopics(msg)}
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                    <PathInputBox
                        error={error}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        setError={setError}
                        onSubmit={handleUserInput}
                        disabled={autoCreationInProgress || processingTopics.length > 0}
                    />
                </div>
            </div>
        </div>
    )
}
