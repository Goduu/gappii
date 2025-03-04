
export const routes = {
    home: '/',
    onboarding: '/onboarding',
    testLesson: (lessonId: string) => `/lesson/${lessonId}`,
    learn: (lessonId: string) => `/learn/${lessonId}`,
    lesson: (lessonId: string) => `/lesson/${lessonId}`,
    editLesson: (lessonId: string) => `/learn/${lessonId}/edit`,
    mylessons: `/my-lessons`,
    content: '/content',
    community: '/community',
    communityGallery: '/community-galery',
    paths: '/paths',
    path: (pathId: string) => `/lesson/path/${pathId}`,
    login: '/login'
}