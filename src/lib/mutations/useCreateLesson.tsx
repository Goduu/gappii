import { useMutation, useQuery } from "@apollo/client";
import { CreateActivitiesMutationResponse, CreateLessonsMutationResponse, MutationCreateActivitiesArgs, MutationCreateLessonsArgs, MutationCreateUsersArgs, MutationUpdateUsersArgs } from "../../ogm-types";
import { ApiActivityResponse } from "../validateCreateLessonApiResponse";
import { GET_USER, CREATE_USER, UPDATE_USER } from "../gqls/userGQLs";
import { User } from "@clerk/nextjs/server";
import { useUser } from "@/lib/useUser";
import { CREATE_ACTIVITIES } from "../gqls/activityGQLs";
import { CREATE_LESSONS } from "../gqls/lessonGQLs";

export const useCreateLesson = () => {
    const clerkUserData = useUser()
    const { loading, data: userData } = useQuery<{ users: Array<User> }>(GET_USER, {
        variables: { where: { clerkId: clerkUserData.user?.id } }
    })
    const [createUserMutation] = useMutation(CREATE_USER)
    const [createLessonMutation] = useMutation<{ createLessons: CreateLessonsMutationResponse }>(CREATE_LESSONS)
    const [updateUserMutation] = useMutation(UPDATE_USER)
    const [createActivitiesMutation] = useMutation<{ createActivities: CreateActivitiesMutationResponse }>(CREATE_ACTIVITIES)

    const createLesson = async (data: ApiActivityResponse, topicId: string, subtopicId: string) => {
        const activitiesData = data.activities.length ? await createActivitiesMutation({
            variables: {
                input: data.activities.map(activity => ({
                    description: activity.description,
                    order: activity.order,
                    options: activity.options,
                    answer: activity.answer,
                    comment: activity.comment,
                    mermaid: activity.mermaid
                }))
            } satisfies MutationCreateActivitiesArgs
        }) : { data: { createActivities: { activities: [] } } }

        const lessonData = await createLessonMutation({
            variables: {
                input: [{
                    title: `${data.topic} / ${data.subtopic}`,
                    level: data.level,
                    createdAt: new Date().toISOString(),
                    isPublic: true,
                    language: data.language,
                    hasTopic: {
                        connect: {
                            where: {
                                node: {
                                    id: topicId
                                }
                            }
                        }
                    },
                    hasSubtopic: {
                        connect: {
                            where: {
                                node: {
                                    id: subtopicId
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
                        connectOrCreate: data.keywords.length ? data.keywords.map(keyword => ({
                            where: { node: { name: keyword } },
                            onCreate: { node: { name: keyword } }
                        })) : undefined
                    }
                }]

            } satisfies MutationCreateLessonsArgs
        })

        if (clerkUserData.user) {
            if (!loading && !userData?.users || !userData?.users.length) {
                console.info("No user Data, creating user")
                await createUserMutation({
                    variables: {
                        input: [
                            {
                                clerkId: clerkUserData.user.id,
                                email: clerkUserData.user.emailAddresses[0].emailAddress,
                                hasLessons: {
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
                                }

                            },
                        ]
                    } satisfies MutationCreateUsersArgs
                }
                )
            } else {
                console.info("User data found, updating user")
                await updateUserMutation({
                    variables: {
                        where: { clerkId: clerkUserData.user.id },
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
        }

        return lessonData.data?.createLessons.lessons[0]

    }

    return createLesson

}