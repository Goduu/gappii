

export const routes = {
    home: '/',
    lesson: (lessonId: string) => `/logged-in/lesson/${lessonId}`,
    lessons: '/logged-in/lessons',
    content: '/logged-in/content',
    community: '/community',
}