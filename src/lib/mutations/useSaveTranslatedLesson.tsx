import { useMutation, useQuery } from "@apollo/client";
import { CreateActivitiesMutationResponse, MutationCreateActivitiesArgs, MutationCreateLessonsArgs, MutationCreateUsersArgs, MutationUpdateUsersArgs } from "@/ogm-resolver/ogm-types";
import { ApiActivityResponse } from "../validateCreateLessonApiResponse";
import { redirect } from "next/navigation";
import { CHECK_USER, CREATE_USER, UPDATE_USER } from "../gqls/userGQLs";
import { User } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { CREATE_ACTIVITIES } from "../gqls/activityGQLs";
import { CREATE_LESSONS } from "../gqls/lessonGQLs";
import { routes } from "../routes";

export const useSaveTranslatedLesson = () => {
    const clerkUserData = useUser()
    const { loading, data: userData } = useQuery<{ users: Array<User> }>(CHECK_USER, {
        variables: { where: { clerkId: clerkUserData.user?.id } }
    })
    const [createUserMutation] = useMutation(CREATE_USER)
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


        redirect(routes.lesson(lessonData.data.createLessons.lessons[0].id))

    }

    return createActivitiesAndTopics

}