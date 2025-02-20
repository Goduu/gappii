import { Message } from "./types";

export const aiMessages: { [key: string]: Message } = {
    optionSelected: { id: "optionSelected", type: "assistant", content: "Great choice! What would you like to do next?" },
    failedToCreateLesson: { id: "failedToCreateLesson", type: "assistant", content: "Failed to create lesson. Please try again." },
    createLesson: { id: "createLesson", type: "assistant", content: "All right, I'll take care of creating your lesson..." },
    createOrAdvancedOptions: {
        id: "createOrAdvancedOptions",
        type: 'options',
        content: 'xongas',
        options: [
            { topic: 'Create my customized lesson' },
            { topic: 'See advanced options' }]
    },
    hereAreMoreOptions: { id: "hereAreMoreOptions", type: 'assistant', content: 'Here are some more options:' },
    moreOptions: { id: "moreOptions", type: 'assistant', content: 'Choose one of the options or ask for more.' },

    // advanced options
    advancedOptions: { id: "advancedOptions", type: "assistant", content: "Here are the advanced options for your topic:" },
    levelOptionsMessage: { id: "levelOptionsMessage", type: 'assistant', content: 'Choose a level for your lesson:' },
    levelOptions: {
        id: "levelOptions",
        type: 'options',
        options: [
            { topic: 'I want it easy' },
            { topic: 'I want it challenging' },
            { topic: 'I want it as hard as possible' },
        ]
    },
    numberOfQuestionsOptionsMessage: { id: "numberOfQuestionsOptionsMessage", type: 'assistant', content: 'Choose the number of questions for your lesson:' },
    numberOfQuestionsOptions: {
        id: "numberOfQuestionsOptions",
        type: 'options',
        options: [
            { topic: '5 questions' },
            { topic: '10 questions' },
            { topic: '20 questions' },
        ]
    },
}
