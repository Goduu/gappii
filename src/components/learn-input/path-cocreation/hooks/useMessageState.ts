import { useState, useRef, useEffect, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ExtendedMessage } from '../types'
import { createLearningGoals } from '@/lib/createLearningGoals'
import { createDetailedLearningPlan } from '@/lib/createDetailedLearningPlan'
import { modifyDetailedLearningPlan } from '@/lib/modifyDetailedLearningPlan'
import { ApiCreateLearningGoalsResponse } from '@/lib/validateCreateLearningGoalsApiResponse'
import { ApiCreateDetailedLearningPlanResponse } from '@/lib/validateCreateDetailedLearningPlanApiResponse'
import { SupportedLanguage } from '@/app/types'

export const useMessageState = (isOpen: boolean) => {
    const [isActive, setIsActive] = useState(isOpen)
    const [error, setError] = useState<string>("")
    const [messages, setMessages] = useState<ExtendedMessage[]>([
        {
            id: uuidv4(),
            type: 'assistant',
            content: "What topic or skill would you like to learn about today? Feel free to be as specific or general as you'd like."
        }
    ])
    const [hasSubmittedPrompt, setHasSubmittedPrompt] = useState(false)
    const [level, ] = useState("1")
    const [language, ] = useState<SupportedLanguage>("en-us")
    const [numberOfQuestions, ] = useState("7")
    const [learningGoals, setLearningGoals] = useState<ApiCreateLearningGoalsResponse>([])
    const [selectedTheme, setSelectedTheme] = useState<string>("")
    const [selectedGoals, setSelectedGoals] = useState<string[]>([])
    const [detailedPlanItems, setDetailedPlanItems] = useState<ApiCreateDetailedLearningPlanResponse>([])
    const [planModificationState, setPlanModificationState] = useState<'none' | 'selecting' | 'describing'>('none')
    const [selectedModification, setSelectedModification] = useState<{topic: string, subtopic?: string} | null>(null)

    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    // Scroll to bottom when messages change
    useEffect(() => {
        if (messages.length > 0 && isActive) {
            scrollToBottom()
        }
    }, [messages, isActive, scrollToBottom])

    // Update isActive when isOpen changes
    useEffect(() => {
        setIsActive(isOpen)
    }, [isOpen])

    // Check if user has submitted a prompt when messages change
    useEffect(() => {
        if (messages.length > 1) {
            setHasSubmittedPrompt(true)
        }
    }, [messages])

    const handleUserInput = useCallback(async (input: string) => {
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
                const learningGoals = await createLearningGoals(input, () => {
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
                    () => {
                        setMessages(prev => [...prev.slice(0, -1), {
                            id: uuidv4(),
                            type: 'assistant',
                            content: "I'm sorry, I encountered an error while generating the detailed plan. Please try again."
                        }])
                    })

                setDetailedPlanItems(detailedPlan || [])

                // Format the detailed plan for display
                let formattedPlan = `Great choice! Here's a detailed plan for learning about **${selectedLearningGoal.theme}**:\n\n`
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
    }, [learningGoals, selectedTheme, planModificationState, selectedModification, selectedGoals, detailedPlanItems, language])

    const handleThemeSelection = useCallback(async (theme: string) => {
        // Add user message showing selection

        // Process the selection
        await handleUserInput(theme);
    }, [handleUserInput])

    const startPlanModification = useCallback(() => {
        setPlanModificationState('selecting');

        setMessages(prev => [...prev, {
            id: uuidv4(),
            type: 'assistant',
            content: `Please click on a topic or subtopic that you'd like to modify.`
        }])
    }, [])

    const handleTopicOnlyClick = useCallback((topic: string) => {
        if (planModificationState === 'selecting') {
            setSelectedModification({ topic });
            setPlanModificationState('describing');

            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `Please describe what changes you'd like to make to all subtopics in "${topic}".`
            }])
        }
    }, [planModificationState])

    const handleModificationSelection = useCallback((topic: string, subtopic: string) => {
        if (planModificationState === 'selecting') {
            setSelectedModification({ topic, subtopic });
            setPlanModificationState('describing');

            setMessages(prev => [...prev, {
                id: uuidv4(),
                type: 'assistant',
                content: `Please describe what changes you'd like to make to "${topic}: ${subtopic}".`
            }])
        }
    }, [planModificationState])

    return {
        isActive,
        setIsActive,
        error,
        setError,
        messages,
        setMessages,
        level,
        language,
        numberOfQuestions,
        learningGoals,
        selectedTheme,
        selectedGoals,
        detailedPlanItems,
        planModificationState,
        setPlanModificationState,
        messagesEndRef,
        handleUserInput,
        handleThemeSelection,
        startPlanModification,
        handleTopicOnlyClick,
        handleModificationSelection,
        hasSubmittedPrompt
    }
} 