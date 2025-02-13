
export const routes = {
    home: '/',
    onboarding: '/onboarding',
    testLesson: (lessonId: string) => `/lesson/${lessonId}`,
    lesson: (lessonId: string) => `/lesson/${lessonId}`,
    editLesson: (lessonId: string) => `/logged-in/lesson/${lessonId}/edit`,
    dashboard: `/logged-in/dashboard`,
    content: '/logged-in/content',
    community: '/community',
    paths: '/logged-in/paths',
}