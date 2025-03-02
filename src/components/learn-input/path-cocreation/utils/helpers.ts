/**
 * Get a random icon for a learning path
 */
export const getRandomIcon = (): string => {
    const icons = [
        "Brain", "Graduation Cap", "Book", "Lightbulb", "Target", "Clock", "Compass",
        "Notebook", "Puzzle", "Users", "Message Square", "Medal", "Calculator", "Globe",
        "Microscope", "Palette", "Code", "Library", "Rocket", "Flag"
    ];
    return icons[Math.floor(Math.random() * icons.length)];
}

/**
 * Get a random color for a learning path
 */
export const getRandomColor = (): string => {
    const colors = [
        "red", "orange", "yellow", "lime", "green", "emerald", "teal", "cyan",
        "blue", "indigo", "violet", "fuchsia", "pink", "slate", "zinc", "stone"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Create a unique key for a topic-subtopic pair
 */
export const createTopicKey = (topic: string, subtopic: string): string => {
    return `${topic}-${subtopic}`;
}

/**
 * Check if a topic is being processed
 */
export const isTopicProcessing = (processingTopics: string[], topic: string, subtopic: string): boolean => {
    return processingTopics.includes(createTopicKey(topic, subtopic));
}

/**
 * Check if a topic has failed
 */
export const hasTopicFailed = (failedTopics: string[], topic: string, subtopic: string): boolean => {
    return failedTopics.includes(createTopicKey(topic, subtopic));
}

/**
 * Check if a lesson has been created for a topic-subtopic pair
 */
export const isLessonCreated = (
    createdLessons: {id: string, topic: string, subtopic: string}[], 
    topic: string, 
    subtopic: string
): boolean => {
    return createdLessons.some(lesson => lesson.topic === topic && lesson.subtopic === subtopic);
} 