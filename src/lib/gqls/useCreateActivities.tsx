import { useMutation, useQuery } from "@apollo/client";
import { CreateActivitiesMutationResponse, MutationCreateActivitiesArgs, MutationCreateLessonsArgs, MutationCreateUsersArgs, MutationUpdateTopicsArgs, MutationUpdateUsersArgs, Topic, TopicModel } from "@/ogm-resolver/ogm-types";
import { ApiActivityResponse } from "../validateApiReturnObject";
import { redirect } from "next/navigation";
import { CHECK_USER, CREATE_USER, UPDATE_USER } from "./userGQLs";
import { User } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { CREATE_ACTIVITIES } from "./activityGQLs";
import { CREATE_LESSONS } from "./lessonGQLs";

export const useCreateActivities = () => {
    const clerkUserData = useUser()
    const { loading, error, data: userData } = useQuery<{ users: Array<User> }>(CHECK_USER, {
        variables: { where: { clerkId: clerkUserData.user?.id } }
    })
    const [createUserMutation] = useMutation(CREATE_USER)
    const [createLessonMutation] = useMutation(CREATE_LESSONS)
    const [updateUserMutation] = useMutation(UPDATE_USER)
    const [createActivitiesMutation] = useMutation<{ createActivities: CreateActivitiesMutationResponse }>(CREATE_ACTIVITIES)

    const createActivitiesAndTopics = async (data: ApiActivityResponse, topicId: string, subtopicId: string) => {
        const activitiesData = await createActivitiesMutation({
            variables: {
                input: data.activities.map(activity => ({
                    description: activity.description,
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
                                        }
                                    }
                                ]
                            }]
                        }
                    } satisfies MutationUpdateUsersArgs
                })
            }
        }


        redirect(`/lesson/${lessonData.data.createLessons.lessons[0].id}`)

    }

    return createActivitiesAndTopics

}