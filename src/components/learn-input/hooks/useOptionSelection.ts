import { Message, MessageHandlerProps, TopicsOption } from "../types";
import { aiMessages } from "../aiMessages";
import { useGenerateLesson } from "../createLesson";
import { useMutation, useLazyQuery } from "@apollo/client";
import { CREATE_TOPIC, GET_TOPIC_BY_NAME } from "@/lib/gqls/topicGQLs";

type OptionSelectionProps = MessageHandlerProps & {
    level: string;
    setLevel: (level: string) => void;
    numberOfQuestions: string;
    setNumberOfQuestions: (numberOfQuestions: string) => void;
    onCreate?: (lessonId: string) => void
}

export const useOptionSelection = ({
    messages,
    setMessages,
    setError,
    level,
    setLevel,
    numberOfQuestions,
    setNumberOfQuestions,
    onCreate,
}: OptionSelectionProps) => {
    const [createTopic] = useMutation(CREATE_TOPIC);
    const [getTopicByName] = useLazyQuery(GET_TOPIC_BY_NAME);
    const { generateLesson } = useGenerateLesson();

    const handleLessonCreation = async (selectedText: string) => {
        const lastTopicSelection = messages.findLast(msg =>
            msg.type === 'user' && msg.content?.includes('→')
        )?.content;

        if (!lastTopicSelection) return;

        const [topicTitle, subtopicTitle] = lastTopicSelection.split(' → ');

        setMessages(prev => [...prev,
        { id: 'user', type: 'user', content: selectedText },
        { id: 'loading', type: 'loading', content: '' }
        ]);

        try {
            const { data: topicData } = await getTopicByName({
                variables: { title: topicTitle }
            });

            const topic = topicData?.topics[0] ?? (await createTopic({
                variables: { input: { title: topicTitle } }
            })).data?.createTopics?.topics[0];

            const { data: subtopicData } = await getTopicByName({
                variables: { title: subtopicTitle }
            });

            const subtopic = subtopicData?.topics[0] ?? (await createTopic({
                variables: { input: { title: subtopicTitle } }
            })).data?.createTopics?.topics[0];

            if (topic && subtopic) {
                setMessages(prev => [
                    ...prev.slice(0, -1),
                    aiMessages.createLesson,
                    { id: 'loading', type: 'loading', content: '' }
                ]);
                await generateLesson(topic, subtopic, level, "en-us", numberOfQuestions, onCreate);
            }
        } catch {
            setMessages(prev => [
                ...prev.slice(0, -1),
                aiMessages.failedToCreateLesson
            ]);
            setError("Failed to create lesson. Please try again.");
        }
    };

    const handleAdvancedOptions = (selectedText: string) => {
        setMessages(prev => [...prev,
        { id: 'user', type: 'user', content: selectedText },
        aiMessages.levelOptionsMessage,
        aiMessages.levelOptions,
        ]);
    };

    const handleRegularSelection = (selectedText: string) => {
        setMessages(prev => [...prev,
        { id: 'user', type: 'user', content: selectedText },
        aiMessages.optionSelected,
        aiMessages.createOrAdvancedOptions
        ]);
    };

    const handleLevelOptions = (selectedOption: TopicsOption) => {
        if (selectedOption.value) {
            setLevel(selectedOption.value);
            setMessages(prev => [...prev,
            { id: 'user', type: 'user', content: formatTopicSubtopic(selectedOption.topic, selectedOption.subtopic) },
            aiMessages.numberOfQuestionsOptionsMessage,
            aiMessages.numberOfQuestionsOptions,
            ]);
        }
    };

    const handleNumberOfQuestionsOptions = (selectedOption: TopicsOption) => {
        if (selectedOption.value) {
            setNumberOfQuestions(selectedOption.value);
            setMessages(prev => [...prev,
            { id: 'user', type: 'user', content: formatTopicSubtopic(selectedOption.topic, selectedOption.subtopic) },
            aiMessages.createLessonsMessage,
            aiMessages.createLessons,
            ]);
        }
    };

    const handleOptionSelect = async (message: Message, option: TopicsOption) => {
        const selectedText = formatTopicSubtopic(option.topic, option.subtopic);
        if (option.value === 'createCustomizedLesson') {
            await handleLessonCreation(selectedText);
        } else if (option.value === 'seeAdvancedOptions') {
            handleAdvancedOptions(selectedText);
        } else if (message.id === "levelOptions") {
            handleLevelOptions(option);
        } else if (message.id === "numberOfQuestionsOptions") {
            handleNumberOfQuestionsOptions(option);
        } else {
            handleRegularSelection(selectedText);
        }
    };

    return { handleOptionSelect };
};

const formatTopicSubtopic = (topic: string, subtopic?: string) => {
    return `${topic}${subtopic ? ` → ${subtopic}` : ""}`;
};