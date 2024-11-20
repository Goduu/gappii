import { useMutation } from "@apollo/client";
import { MutationCreateTopicsArgs, Topic, TopicModel } from "@/ogm-resolver/ogm-types";
import { CREATE_TOPIC } from "./topicGQLs";
import { ApiActivityResponse } from "../validateApiReturnObject";
import { redirect } from "next/navigation";

export const useCreateActivities = () => {

    const [createTopicsMutation] = useMutation(CREATE_TOPIC)

    const createPatient = async (data: ApiActivityResponse) => {

        const topicData = await createTopicsMutation({
            variables: {
                input: [
                    {
                        title: data.subtopic,
                        hasActivities: {
                            create: data.activities.map(activity => ({
                                node: activity
                            })
                            )
                        }

                    },
                    {
                        title: data.topic,
                        hasSubtopics: {
                            connectOrCreate: [{
                                where: {
                                    node: {
                                        title: data.subtopic,
                                    }
                                },
                                onCreate: {
                                    node: {
                                        title: data.subtopic,
                                    },
                                }
                            }]
                        }
                    }
                ]
            } satisfies MutationCreateTopicsArgs
        }
        )

        const topic = topicData.data.createTopics.topics.find((topic: Topic) => topic.title === data.topic)

        topic && redirect(`/lesson/${topic.id}/${topic.hasSubtopics[0].id}`)

    }

    return createPatient

}