

export const routes = {
    home: '/',
    lesson: (lessonId: string) => `/logged-in/lesson/${lessonId}`,
    editLesson: (lessonId: string) => `/logged-in/lesson/${lessonId}/edit`,
    lessons: '/logged-in/lessons',
    content: '/logged-in/content',
    community: '/community',
}