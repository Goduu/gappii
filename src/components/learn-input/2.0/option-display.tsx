import { Button } from "@/components/ui/button";
import { Message, TopicsOption } from "./types";
import { useLazyQuery } from "@apollo/client";
import { CREATE_TOPIC, GET_TOPIC_TITLES } from "@/lib/gqls/topicGQLs";
import { GET_TOPIC_BY_NAME } from "@/lib/gqls/topicGQLs";
import { useMutation } from "@apollo/client";
import { Topic } from "@/ogm-types";
import { useGenerateLesson } from "./createLesson";
import { aiMessages } from "./aiMessages";

type OptionDisplayProps = {
    message: Message
    messages: Message[]
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
    setError: React.Dispatch<React.SetStateAction<string>>
}

export const OptionsDisplay = ({ message, messages, setMessages, setError }: OptionDisplayProps) => {
    const [createTopic] = useMutation(CREATE_TOPIC)
    const [getTopicByName] = useLazyQuery(GET_TOPIC_BY_NAME)
    const { generateLesson } = useGenerateLesson()

    const options = message.options

    const handleOptionSelect = async (option: TopicsOption) => {
        const selectedText = `${option.topic}${option.subtopic ? ` → ${option.subtopic}` : ""}`

        if (option.topic === 'Create my customized lesson') {
            // Get the last selected topic/subtopic from messages
            const lastTopicSelection = messages.findLast(msg =>
                msg.type === 'user' && msg.content?.includes('→')
            )?.content

            if (lastTopicSelection) {
                const [topicTitle, subtopicTitle] = lastTopicSelection.split(' → ')

                setMessages(prev => [...prev,
                { id: 'user', type: 'user', content: selectedText },
                { id: 'loading', type: 'loading', content: '' }
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

                    if (topic && subtopic) {
                        // Set the states needed for lesson creation

                        // Create the lesson
                        setMessages(prev => [
                            ...prev.slice(0, -1), // Remove loading
                            aiMessages.createLesson,
                            { id: 'loading', type: 'loading', content: '' }
                        ])
                        await generateLesson(topic, subtopic, 1, "en-us", 7)

                    }
                } catch (err) {
                    setMessages(prev => [
                        ...prev.slice(0, -1), // Remove loading
                        aiMessages.failedToCreateLesson
                    ])
                    setError("Failed to create lesson. Please try again.")
                }
            }
        } else if (message.id === "createOrAdvancedOptions") {
            setMessages(prev => [...prev,
            { id: 'user', type: 'user', content: selectedText },
            aiMessages.advancedOptions,
            aiMessages.levelOptionsMessage,
            aiMessages.levelOptions,
            ])
        } else if (message.id == "levelOptionsMessage") {
            setMessages(prev => [...prev,
            { id: 'user', type: 'user', content: selectedText },
            aiMessages.numberOfQuestionsOptionsMessage,
            aiMessages.numberOfQuestionsOptions,
            ])
        } else {
            // Regular topic selection
            setMessages(prev => [...prev,
            { id: 'user', type: 'user', content: selectedText },
            aiMessages.optionSelected,
            aiMessages.createOrAdvancedOptions
            ])
        }
    }

    return (
        <div className="grid gap-2 w-full max-w-[80%]" >
            {
                options?.map((option, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start text-left hover:bg-muted"
                        onClick={() => handleOptionSelect(option)}
                    >
                        <span className="font-medium">{option.topic}</span>
                        {option.subtopic && <span className="mx-2">→</span>}
                        {option.subtopic && <span className="text-muted-foreground">{option.subtopic}</span>}
                    </Button>
                ))
            }
        </div >
    )
}