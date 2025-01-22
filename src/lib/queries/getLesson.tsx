"use server"
import { Lesson, QueryLessonsArgs } from "@/ogm-resolver/ogm-types";
import { getApolloClient } from "../getApolloClient";
import { GET_LESSON_ACTIVITIES } from "../gqls/lessonGQLs";

export const getLesson = async (lessonId: string) => {
    const client = getApolloClient();

    const { data } = await client.query<{ lessons: Lesson[] }>({
        query: GET_LESSON_ACTIVITIES,
        variables: {
            where: {
                id: lessonId
            }
        } satisfies QueryLessonsArgs
    })

    const lesson = data?.lessons[0]

    return lesson
}