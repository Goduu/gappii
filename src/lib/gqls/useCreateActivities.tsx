import { useMutation, useQuery } from "@apollo/client";
import { CreateActivitiesMutationResponse, MutationCreateActivitiesArgs, MutationCreateUsersArgs, MutationUpdateTopicsArgs, MutationUpdateUsersArgs, Topic, TopicModel } from "@/ogm-resolver/ogm-types";
import { UPDATE_TOPIC } from "./topicGQLs";
import { ApiActivityResponse } from "../validateApiReturnObject";
import { redirect } from "next/navigation";
import { CHECK_USER, CREATE_USER, UPDATE_USER } from "./userGQLs";
import { User } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { CREATE_ACTIVITIES } from "./activityGQLs";

export const useCreateActivities = () => {
    const clerkUserData = useUser()
    const { loading, error, data: userData } = useQuery<{ users: Array<User> }>(CHECK_USER, {
        variables: { where: { clerkId: clerkUserData.user?.id } }
    })
    const [updateTopicMutation] = useMutation(UPDATE_TOPIC)
    const [createUserMutation] = useMutation(CREATE_USER)
    const [updateUserMutation] = useMutation(UPDATE_USER)
    const [createActivitiesMutation] = useMutation<{ createActivities: CreateActivitiesMutationResponse }>(CREATE_ACTIVITIES)

    const createActivitiesAndTopics = async (data: ApiActivityResponse, topicId: string, subtopicId: string) => {

        const topicData = await updateTopicMutation({
            variables: {
                where: {
                    id: topicId
                },
                update: {
                    hasSubtopics: [{
                        connect: [{
                            where: {
                                node: {
                                    id: subtopicId
                                }
                            }
                        }
                        ]
                    }]
                }
            } satisfies MutationUpdateTopicsArgs
        }
        )
        console.log('"updateTopicMutation ok')

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
        console.log('"createActivitiesMutation ok')

        if (activitiesData.data) {
            const subtopicData = await updateTopicMutation({
                variables: {
                    where: {
                        id: subtopicId
                    },
                    update: {
                        hasActivities: [{
                            connect: activitiesData.data.createActivities.activities.map(activity => ({
                                where: {
                                    node: {
                                        id: activity.id
                                    }
                                }
                            }))
                        }]
                    }
                } satisfies MutationUpdateTopicsArgs
            })
            console.log('"updateTopicMutation ok')
        }


        if (clerkUserData.user) {
            if (!loading && !userData?.users || !userData?.users.length) {
                console.info("No user Data, creating user")
                await createUserMutation({
                    variables: {
                        input: [
                            {
                                clerkId: clerkUserData.user.id,
                                email: clerkUserData.user.emailAddresses[0].emailAddress,
                                hasTopics: {
                                    connect: [
                                        {
                                            where: {
                                                node: {
                                                    title: data.topic
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
                            hasTopics: [{
                                connect: [
                                    {
                                        where: {
                                            node: {
                                                title: data.topic
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


        // redirect(`/lesson/${topicId}/${subtopicId}`)

    }

    return createActivitiesAndTopics

}