import { useMutation } from "@apollo/client";
import { GET_LESSON_ACTIVITIES, UPDATE_LESSON } from "@/lib/gqls/lessonGQLs";
import { DELETE_ACTIVITY, UPDATE_ACTIVITY } from "@/lib/gqls/activityGQLs";
import { LessonFormValues } from "./useLessonForm";
import { startTransition } from "react";
import { Activity, Keyword, Lesson, MutationUpdateLessonsArgs } from "@/ogm-resolver/ogm-types";

export const useSaveLessonForm = () => {
    const [updateLessons] = useMutation(UPDATE_LESSON);
    const [updateActivity] = useMutation(UPDATE_ACTIVITY);
    const [deleteActivity] = useMutation(DELETE_ACTIVITY, {
        refetchQueries: [GET_LESSON_ACTIVITIES],
    });

    const handleUpdateLesson = async (
        lesson: Lesson,
        formValues: LessonFormValues,
        onClose: () => void
    ) => {
        const {
            addedKeywords,
            deletedKeywords,
            addedActivities,
            deletedActivities,
            updatedActivities
        } = calculateChanges(lesson, formValues);

        startTransition(async () => {
            try {
                // Update lesson keywords and activities in a single mutation
                if (
                    addedKeywords.length > 0 ||
                    deletedKeywords.length > 0 ||
                    addedActivities.length > 0 ||
                    deletedActivities.length > 0 ||
                    lesson.language !== formValues.language ||
                    lesson.isPublic !== formValues.isPublic ||
                    lesson.hasTopic.id !== formValues.topic.id ||
                    lesson.hasSubtopic.id !== formValues.subtopic.id
                ) {
                    await updateLessons({
                        variables: buildLessonUpdateVariables(
                            lesson,
                            addedKeywords,
                            deletedKeywords,
                            addedActivities,
                            deletedActivities,
                            formValues,
                        ),
                    });
                }

                // Update individual activities
                await Promise.all([
                    ...updatedActivities.map((activity) =>
                        updateActivity({
                            variables: {
                                where: { id: activity.id },
                                update: {
                                    description: activity.description,
                                    options: activity.options,
                                    answer: activity.answer,
                                    comment: activity.comment,
                                    order: activity.order,
                                },
                            },
                        })
                    ),
                    ...deletedActivities.map((activity) =>
                        deleteActivity({
                            variables: { where: { id: activity.id } },
                        })
                    ),
                ]);

                // Close the form
                onClose();
            } catch (error) {
                console.error("Error updating lesson:", error);
            }
        });
    };

    const calculateChanges = (lesson: Lesson, formValues: LessonFormValues) => {
        const deletedKeywords = lesson.hasKeywords.filter(
            (keyword) => !formValues.keywords.some((k) => k.name === keyword.name)
        );
        const addedKeywords = formValues.keywords.filter(
            (keyword) => keyword.name !== "" && !lesson.hasKeywords.some((k) => k.name === keyword.name)
        );

        const deletedActivities = lesson.hasActivities.filter(
            (activity) => !formValues.activities.some((a) => a.id === activity.id)
        );
        const addedActivities = formValues.activities.filter(
            (activity) => !lesson.hasActivities.some((a) => a.id === activity.id)
        );

        const updatedActivities = formValues.activities.filter((formActivity) => {
            const lessonActivity = lesson.hasActivities.find(
                (activity) => activity.id === formActivity.id
            );
            return (
                lessonActivity &&
                (lessonActivity.description !== formActivity.description ||
                    lessonActivity.answer !== formActivity.answer ||
                    lessonActivity.comment !== formActivity.comment ||
                    !areArraysEqual(lessonActivity.options, formActivity.options))
            );
        });

        return { addedKeywords, deletedKeywords, addedActivities, deletedActivities, updatedActivities };
    };

    const buildLessonUpdateVariables = (
        lesson: Lesson,
        addedKeywords: Keyword[],
        deletedKeywords: Keyword[],
        addedActivities: LessonFormValues['activities'],
        deletedActivities: Activity[],
        formValues: LessonFormValues
    ): MutationUpdateLessonsArgs => ({
        where: { id: lesson.id },
        update: {
            language: lesson.language !== formValues.language ? formValues.language : undefined,
            isPublic: lesson.isPublic !== formValues.isPublic ? formValues.isPublic : undefined,
            hasTopic: lesson.hasTopic.id !== formValues.topic.id ?
                { disconnect: { where: { node: { id: lesson.hasTopic.id } } }, connect: { where: { node: { id: formValues.topic.id } } } } : undefined,
            hasSubtopic: lesson.hasSubtopic.id !== formValues.subtopic.id ?
                { disconnect: { where: { node: { id: lesson.hasSubtopic.id } } }, connect: { where: { node: { id: formValues.subtopic.id } } } } : undefined,
            ...(deletedKeywords.length > 0 || addedKeywords.length > 0 ? {
                hasKeywords: [
                    {
                        ...(deletedKeywords.length > 0 && {
                            disconnect: deletedKeywords.map((keyword) => ({
                                where: { node: { id: keyword.id } },
                            })),
                        }),
                        ...(addedKeywords.length > 0 && {
                            create: addedKeywords.map((keyword) => ({
                                node: { name: keyword.name },
                            })),
                        }),
                    },
                ],
            } : {}),
            ...(deletedActivities.length > 0 || addedActivities.length > 0 ? {
                hasActivities: [
                    {
                        ...(deletedActivities.length > 0 && {
                            disconnect: deletedActivities.map((activity) => ({
                                where: { node: { id: activity.id } },
                            })),
                        }),
                        ...(addedActivities.length > 0 && {
                            create: addedActivities.map((activity) => ({
                                node: {
                                    description: activity.description,
                                    options: activity.options,
                                    answer: activity.answer,
                                    comment: activity.comment,
                                    order: activity.order,
                                },
                            })),
                        }),
                    },
                ],
            } : {}),
        },
    });

    const areArraysEqual = (arr1: string[], arr2: string[]) =>
        arr1.length === arr2.length && arr1.every((item) => arr2.includes(item));

    return { handleUpdateLesson };
};
