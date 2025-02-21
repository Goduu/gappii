import { Message } from "./types";

export const aiMessages: { [key: string]: Message } = {
    optionSelected: { id: "optionSelected", type: "assistant", content: "Great choice! What would you like to do next?" },
    failedToCreateLesson: { id: "failedToCreateLesson", type: "assistant", content: "Failed to create lesson. Please try again." },
    createLesson: { id: "createLesson", type: "assistant", content: "All right, I'll take care of creating your lesson..." },
    createOrAdvancedOptions: {
        id: "createOrAdvancedOptions",
        type: 'options',
        options: [
            { topic: 'Create my customized lesson', value: "createCustomizedLesson" },
            { topic: 'See advanced options', value: "seeAdvancedOptions" }]
    },
    createLessonsMessage: { id: "createLessonsMessage", type: 'assistant', content: 'Now we are ready!' },
    createLessons: {
        id: "createLessons",
        type: 'options',
        options: [
            { topic: 'Create my customized lesson', value: "createCustomizedLesson" },
        ]
    },
    hereAreMoreOptions: { id: "hereAreMoreOptions", type: 'assistant', content: 'Here are some more options:' },
    moreOptions: { id: "moreOptions", type: 'assistant', content: 'Choose one of the options or ask for more.' },

    // advanced options
    levelOptionsMessage: { id: "levelOptionsMessage", type: 'assistant', content: 'Choose a level for your lesson:' },
    levelOptions: {
        id: "levelOptions",
        type: 'options',
        options: [
            { topic: 'I want it easy', value: "1" },
            { topic: 'I want it challenging', value: "2" },
            { topic: 'I want it as hard as possible', value: "3" },
        ]
    },
    numberOfQuestionsOptionsMessage: {
        id: "numberOfQuestionsOptionsMessage",
        type: 'assistant',
        content: 'How many questions do you want to generate for your lesson?'
    },
    numberOfQuestionsOptions: {
        id: "numberOfQuestionsOptions",
        type: 'options',
        options: [
            { topic: '5 questions', value: "5" },
            { topic: '10 questions', value: "10" },
            { topic: '20 questions', value: "20" },
        ]
    },
}
