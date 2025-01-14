"use server"

import { GET_LESSON_BY_ID } from "@/lib/gqls/lessonGQLs";
import { getApolloClient } from "../getApolloClient";
import { Lesson } from "@/ogm-resolver/ogm-types";

export const getLessonByIdToTranslate = async (id: string) => {
    const apolloClient = getApolloClient()

    const { data } = await apolloClient.query<{ lessons: Lesson[] }>({
        query: GET_LESSON_BY_ID,
        variables: { id },
    });
    const lesson = data.lessons[0]

    return {
        level: lesson.level,
        language: lesson.language,
        createdAt: lesson.createdAt,
        keywords: lesson.hasKeywords.map(keyword => (keyword.name)),
        topic: lesson.hasTopic.title,
        subtopic: lesson.hasSubtopic.title,
        activities: lesson.hasActivities.map(activity => ({ description: activity.description, options: activity.options, answer: activity.answer, comment: activity.comment, order: activity.order })),
    }
}

export type LessonToTranslate = Awaited<ReturnType<typeof getLessonByIdToTranslate>>