import { useMutation } from "@apollo/client";
import { UPDATE_SESSION_COMPLETION_RECORD } from "../gqls/lessonCompletionRecordGQL";
import { MutationUpdateSessionCompletionRecordsArgs } from "@/ogm-types";

export const useUpdateAttemptedActivityCorrectedAt = () => {
    const [updateLessonCompletionRecordMutation] = useMutation(UPDATE_SESSION_COMPLETION_RECORD);

    const updateAttemptedActivityCorrectedAt = async (lessonCompletionRecordIds: string[], activityIds: string[]) => {
        await updateLessonCompletionRecordMutation({
            variables: {
                where: {
                    id_IN: lessonCompletionRecordIds
                },
                update: {
                    attemptedActivities: [
                        ...activityIds.map(id => (
                            {
                                where: {
                                    node: {
                                        id
                                    }
                                },
                                update: {
                                    edge: {
                                        correctedAt: new Date().toISOString()
                                    }
                                }
                            }
                        ))
                    ]
                }
            } satisfies MutationUpdateSessionCompletionRecordsArgs
        });
    }

    return updateAttemptedActivityCorrectedAt;
}


// const activitiesData = data.activities.length ? await createActivitiesMutation({
//     variables: {
//         input: data.activities.map(activity => ({
//             description: activity.description,
//             order: activity.order,
//             options: activity.options,
//             answer: activity.answer,
//             comment: activity.comment,
//             mermaid: activity.mermaid
//         }))
//     } satisfies MutationCreateActivitiesArgs
// }) : { data: { createActivities: { activities: [] } } }
