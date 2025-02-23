import { useMutation } from "@apollo/client";
import { CreateActivitiesMutationResponse, MutationCreateActivitiesArgs, MutationCreateLessonsArgs, MutationUpdateUsersArgs } from "../../ogm-types";
import { ApiActivityResponse } from "../validateCreateLessonApiResponse";
import { redirect } from "next/navigation";
import { UPDATE_USER } from "../gqls/userGQLs";
import { useUser } from "@/lib/useUser";
import { CREATE_ACTIVITIES } from "../gqls/activityGQLs";
import { CREATE_LESSONS } from "../gqls/lessonGQLs";
import { routes } from "../routes";

export const useSaveTranslatedLesson = () => {
    const user = useUser()
    const [createLessonMutation] = useMutation(CREATE_LESSONS)
    const [updateUserMutation] = useMutation(UPDATE_USER)
    const [createActivitiesMutation] = useMutation<{ createActivities: CreateActivitiesMutationResponse }>(CREATE_ACTIVITIES)

    const createActivitiesAndTopics = async (data: ApiActivityResponse) => {

        const activitiesData = await createActivitiesMutation({
            variables: {
                input: data.activities.map(activity => ({
                    description: activity.description,
                    order: activity.order,
                    options: activity.options,
                    answer: activity.answer,
                    mermaid: activity.mermaid,
                    comment: activity.comment,
                }))
            } satisfies MutationCreateActivitiesArgs
        })

        const lessonData = await createLessonMutation({
            variables: {
                input: [{
                    title: `${data.topic} / ${data.subtopic}`,
                    level: data.level,
                    createdAt: new Date().toISOString(),
                    isPublic: true,
                    language: data.language,
                    hasTopic: {
                        connectOrCreate: {
                            where: {
                                node: {
                                    title: data.topic
                                }
                            },
                            onCreate: {
                                node: {
                                    title: data.topic
                                }
                            }
                        }
                    },
                    hasSubtopic: {
                        connectOrCreate: {
                            where: {
                                node: {
                                    title: data.subtopic
                                }
                            },
                            onCreate: {
                                node: {
                                    title: data.subtopic
                                }
                            }
                        }
                    },
                    hasActivities: {
                        connect: activitiesData.data?.createActivities.activities.map(activity => ({
                            where: {
                                node: {
                                    id: activity.id
                                }
                            }
                        }))
                    },
                    hasKeywords: {
                        connectOrCreate: data.keywords.map(keyword => ({
                            where: { node: { name: keyword } },
                            onCreate: { node: { name: keyword } }
                        }))
                    }
                }]

            } satisfies MutationCreateLessonsArgs
        })
        if (user?.email) {

            console.info("User data found, updating user")
            await updateUserMutation({
                variables: {
                    where: { email: user.email },
                    update: {
                        hasLessons: [{
                            connect: [
                                {
                                    where: {
                                        node: {
                                            id: lessonData.data?.createLessons.lessons[0].id
                                        }
                                    },
                                    edge: {
                                        type: "CREATED",
                                        hasAt: new Date().toISOString()
                                    }
                                }
                            ]
                        }]
                    }
                } satisfies MutationUpdateUsersArgs
            })
        }


        redirect(routes.lesson(lessonData.data.createLessons.lessons[0].id))

    }

    return createActivitiesAndTopics

}