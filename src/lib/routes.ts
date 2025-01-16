

export const routes = {
    home: '/',
    lesson: (lessonId: string) => `/lesson/${lessonId}`,
    editLesson: (lessonId: string) => `/logged-in/lesson/${lessonId}/edit`,
    dashboard: '/logged-in/dashboard',
    content: '/logged-in/content',
    community: '/community',
}