"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendHorizontal } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn, sendErrorToast } from "@/lib/utils"
import { useTransitionContext } from "../loading-store"
import { processUserInput } from "@/lib/processUserInput"
import { motion } from "framer-motion"
import { useLazyQuery, useMutation } from "@apollo/client"
import { CREATE_TOPIC, GET_TOPIC_BY_NAME, GET_TOPIC_TITLES } from "@/lib/gqls/topicGQLs"
import { SupportedLanguage } from "@/app/types"
import { transformInputIntoData } from "@/lib/processTextInput"
import { useCreateLesson } from "@/lib/mutations/useCreateLesson"
import { routes } from "@/lib/routes"
import { useRouter } from 'next/navigation'
import { Topic } from "@/ogm-types"

type Option = {
    topic: string;
    subtopic: string;
}

type Message = {
    type: 'user' | 'options' | 'loading' | 'assistant',
    content: string,
    options?: Option[]
}

type ActionOption = {
    label: string;
    description: string;
    action: 'create-lesson' | 'advanced-options';
}

export const LearnInput2 = () => {
    const [message, setMessage] = useState("")
    const [isActive, setIsActive] = useState(false)
    const [error, setError] = useState<string>("")
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [messages, setMessages] = useState<Message[]>([])
    const [level, setLevel] = useState<number>(1)
    const [language, setLanguage] = useState<SupportedLanguage>("en-us")
    const [activitiesNumber, setActivitiesNumber] = useState<number>(7)
    const [createTopic] = useMutation(CREATE_TOPIC)
    const [getTopicByName] = useLazyQuery(GET_TOPIC_BY_NAME)
    const { startTransition } = useTransitionContext()
    const createLesson = useCreateLesson()
    const router = useRouter()

    const handleCreateNewTopic = (topicTitle: string) => {
        createTopic({
            variables: { input: { title: topicTitle } },
            refetchQueries: [GET_TOPIC_TITLES]
        })
    }

    const onCreateLesson = async (topic: Topic, subtopic: Topic) => {
        if(!topic.id || !subtopic.id) {
            return
        }
        const apiData = await transformInputIntoData(
            topic.title,
            subtopic.title,
            level,
            language as SupportedLanguage,
            activitiesNumber,
            sendErrorToast
        )

        if (apiData) {
            const lessonData = await createLesson(apiData, topic.id, subtopic?.id)
            console.log("lessonData", lessonData)
            if (lessonData?.id) {
                router.push(routes.lesson(lessonData.id))
            }
        }
    }

    const handleMoreOptions = async (message: Message | undefined) => {
            if (!message?.options) return
            setMessages(prev => [...prev, { type: 'loading', content: '' }])

            try {
                const result = await processUserInput(
                    `I want more options similar to these topics: ${message.options.map(opt =>
                        `${opt.topic} (${opt.subtopic})`
                    ).join(', ')}`,
                    setError
                )
                if (result) {
                    setMessages(prev => [
                        ...prev.slice(0, -1),
                        { type: 'assistant', content: 'Here are some more options:' },
                        { type: 'options', content: '', options: result },
                        { type: 'assistant', content: 'Choose one of the options or ask for more.' }
                    ])
                }
            } catch (err) {
                setMessages(prev => prev.slice(0, -1))
                setError("Failed to get more options. Please try again.")
            }
        }

        const handleSubmit = async () => {
            if (!message.trim()) return

            const userMessage = message
            setMessages(prev => [...prev,
            { type: 'user', content: userMessage },
            { type: 'loading', content: '' }
            ])
            setMessage('')

            try {
                const result = await processUserInput(userMessage, setError)
                if (result) {
                    setMessages(prev => [
                        ...prev.slice(0, -1),
                        { type: 'assistant', content: 'Choose one of the options or ask for more.' },
                        { type: 'options', content: '', options: result }
                    ])
                }
            } catch (err) {
                setMessages(prev => prev.slice(0, -1))
                setError("Failed to process your request. Please try again.")
            }
        }

        const handleKeyPress = (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSubmit()
            }
        }

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                    setIsActive(false)
                }
            }

            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }, [])

        const handleContainerClick = () => {
            inputRef.current?.focus()
        }

        const handleOptionSelect = async (option: Option) => {
            const selectedText = `${option.topic} → ${option.subtopic}`

            if (option.topic === 'Create my customized lesson') {
                // Get the last selected topic/subtopic from messages
                const lastTopicSelection = messages.findLast(msg => 
                    msg.type === 'user' && msg.content.includes('→')
                )?.content

                if (lastTopicSelection) {
                    const [topicTitle, subtopicTitle] = lastTopicSelection.split(' → ')
                    
                    setMessages(prev => [...prev,
                        { type: 'user', content: selectedText },
                        { type: 'loading', content: '' }
                    ])

                    try {
                        let topic: Topic
                        // check if topic already exists
                        const currentTopicResult = await getTopicByName({
                            variables: { title: topicTitle }
                        })
                        if (currentTopicResult.data?.topics.length > 0) {
                            // Topic already exists, use the existing topic
                            topic = currentTopicResult.data.topics[0]
                        } else {
                            // Create topic
                            const topicResult = await createTopic({
                                variables: { input: { title: topicTitle } },
                                refetchQueries: [GET_TOPIC_TITLES]
                            })
                            topic = topicResult.data?.createTopics?.topics[0]
                        }
                        let subtopic: Topic
                        // check if subtopic already exists
                        const currentSubtopicResult = await getTopicByName({
                            variables: { title: subtopicTitle }
                        })
                        if (currentSubtopicResult.data?.topics.length > 0) {
                            // Subtopic already exists, use the existing subtopic
                            subtopic = currentSubtopicResult.data.topics[0]
                        } else {
                            // Create subtopic
                            const subtopicResult = await createTopic({
                                variables: { input: { title: subtopicTitle } },
                                refetchQueries: [GET_TOPIC_TITLES]
                            })
                            subtopic = subtopicResult.data?.createTopics?.topics[0]
                        }

                        console.log(topic, subtopic)
                        if (topic && subtopic) {
                            // Set the states needed for lesson creation
                            
                            // Create the lesson
                            setMessages(prev => [
                                ...prev.slice(0, -1), // Remove loading
                                { type: 'assistant', content: 'Creating your customized lesson...' }
                            ])
                            await onCreateLesson(topic, subtopic)
                            console.log("topic, subtopic", topic, subtopic)
                            
                        }
                    } catch (err) {
                        console.log('in error xongas')
                        console.log("in handleOptionSelect", err)
                        setMessages(prev => [
                            ...prev.slice(0, -1), // Remove loading
                            { type: 'assistant', content: 'Failed to create lesson. Please try again.' }
                        ])
                        setError("Failed to create lesson. Please try again.")
                    }
                }
            } else if (option.topic === 'See advanced options') {
                setMessages(prev => [...prev,
                    { type: 'user', content: selectedText },
                    { type: 'assistant', content: 'Here are the advanced options for your topic:' },
                    // Add advanced options here
                ])
            } else {
                // Regular topic selection
                setMessages(prev => [...prev,
                    { type: 'user', content: selectedText },
                    { type: 'assistant', content: 'Great choice! What would you like to do next?' },
                    { 
                        type: 'options', 
                        content: '', 
                        options: [
                            { 
                                topic: 'Create my customized lesson', 
                                subtopic: 'Get a personalized learning experience' 
                            },
                            { 
                                topic: 'See advanced options', 
                                subtopic: 'Explore more ways to learn this topic' 
                            }
                        ]
                    }
                ])
            }
        }

        const MessageBubble = ({ content, isUser }: { content: string, isUser: boolean }) => (
            <div className={cn(
                "rounded-lg p-3 max-w-[80%] break-words",
                isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
            )}>
                {content}
            </div>
        )

        const OptionsDisplay = ({ options }: { options: Option[] }) => (
            <div className="grid gap-2 w-full max-w-[80%]">
                {options.map((option, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start text-left hover:bg-muted"
                        onClick={() => handleOptionSelect(option)}
                    >
                        <span className="font-medium">{option.topic}</span>
                        <span className="mx-2">→</span>
                        <span className="text-muted-foreground">{option.subtopic}</span>
                    </Button>
                ))}
            </div>
        )

        const LoadingBubble = () => (
            <div className="flex gap-2 items-center rounded-lg p-4 max-w-[80%] bg-muted w-fit">
                <motion.span
                    className="w-2 h-2 bg-foreground/50 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
                />
                <motion.span
                    className="w-2 h-2 bg-foreground/50 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
                />
                <motion.span
                    className="w-2 h-2 bg-foreground/50 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
                />
            </div>
        )

        return (
            <div className={cn(
                "flex flex-col gap-4 items-center justify-center min-h-screen text-foreground p-4 transition-all duration-1000",
                isActive ? "fixed inset-0 z-50" : "relative"
            )}>
                <div className={cn(
                    "absolute inset-0 bg-background opacity-0 scale-0 origin-center transition-all duration-500",
                    isActive && "opacity-95 scale-100 backdrop-blur"
                )} />

                <div className={cn(
                    "w-full max-w-3xl space-y-6 relative transition-all duration-500",
                    isActive && "z-20 scale-95"
                )}>
                    <h1 className={cn(
                        "text-4xl font-bold text-center mb-12 transition-transform duration-500",
                        isActive && "-translate-y-10"
                    )}>
                        What do you want to learn?
                    </h1>

                    <div ref={containerRef} className="flex flex-col gap-4">
                        <div className="flex-1 overflow-y-auto space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className="space-y-2">
                                    {msg.type === 'user' ? (
                                        <MessageBubble content={msg.content} isUser={true} />
                                    ) : msg.type === 'loading' ? (
                                        <LoadingBubble />
                                    ) : msg.type === 'assistant' ? (
                                        <MessageBubble content={msg.content} isUser={false} />
                                    ) : (
                                        <OptionsDisplay options={msg.options!} />
                                    )}
                                </div>
                            ))}
                            {messages.some(message =>
                                message.type === 'options' &&
                                !message.options?.some(opt =>
                                    opt.topic === 'Create my customized lesson' ||
                                    opt.topic === 'See advanced options'
                                )
                            ) && (
                                    <div className="relative mt-2 before:absolute before:left-0 before:right-0 before:top-1/2 before:h-px before:bg-muted">
                                        <Button
                                            variant="ghost"
                                            className="relative justify-center text-center hover:bg-muted/50 border border-dashed border-muted-foreground/50"
                                            onClick={() => handleMoreOptions(messages.find(msg =>
                                                msg.type === 'options' &&
                                                !msg.options?.some(opt =>
                                                    opt.topic === 'Create my customized lesson' ||
                                                    opt.topic === 'See advanced options'
                                                )
                                            ))}
                                        >
                                            <span className="font-medium text-muted-foreground">
                                                Show me more options...
                                            </span>
                                        </Button>
                                    </div>
                                )}
                        </div>
                        <div className="relative w-full px-4 sm:px-0">

                            {error && (
                                <div className="text-red-500 text-sm">{error}</div>
                            )}
                            <div
                                className={cn(
                                    "flex flex-col gap-4 p-6 rounded-lg border bg-background/60 transition-all duration-500",
                                    "w-full max-w-2xl mx-auto",
                                    isActive && "shadow-lg "
                                )}
                                onClick={handleContainerClick}
                            >
                                <div className="flex gap-2 items-center w-full">
                                    <Input
                                        ref={inputRef}
                                        placeholder="I want to learn"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onFocus={() => setIsActive(true)}
                                        onKeyDown={handleKeyPress}
                                        className="flex-1 h-full text-lg border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                    <Button
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
                    </div>
                </div>
            </div>
        )
    }
