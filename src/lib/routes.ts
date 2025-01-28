import { LessonMode } from "@/components/lesson-page/type";


export const routes = {
    home: '/',
    testLesson: (lessonId: string) => `/lesson/${lessonId}`,
    lesson: (lessonId: string, mode?: LessonMode) => `/lesson/${lessonId}?mode=${mode || 'normal'}`,
    editLesson: (lessonId: string) => `/logged-in/lesson/${lessonId}/edit`,
    dashboard: (mode?: LessonMode) => `/logged-in/dashboard${mode ? `?mode=${mode}` : ''}`,
    content: '/logged-in/content',
    community: '/community',
}