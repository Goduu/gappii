"use client"
import { useQuery } from "@apollo/client";
import { GET_USER_MISTAKES } from "@/lib/gqls/userGQLs";
import { useUser } from "@clerk/nextjs";
import { User } from "@/ogm-types";
import { PageTitle } from "../ui/page-title";
import { MistakeLessonProgressManager } from "./mistake-lesson-progress-manager";
import { MistakeLesson } from "./types";

export const CorrectMistakes = () => {
    const { user } = useUser();
    const { data, loading } = useQuery<{ users: User[] }>(GET_USER_MISTAKES, {
        variables: { where: { clerkId: user?.id } }
    });

    if (loading) return <div>Loading...</div>;

    // Process mistakes data
    const mistakeLessons = data?.users[0]?.completedLessons.reduce((acc: MistakeLesson[], record) => {
        const wrongActivities = record.attemptedActivitiesConnection.edges
            .map(edge => ({
                ...edge.node,
                properties: edge.properties
            }));

        if (wrongActivities.length > 0) {
            acc.push({
                id: record?.forLesson?.id || "",
                title: record?.forLesson?.title || "",
                activities: wrongActivities
            });
        }

        return acc;
    }, []) || [];

    if (mistakeLessons.length === 0) {
        return (
            <div className="flex flex-col gap-4">
                <PageTitle title="Correct Mistakes" />
                <p>No mistakes to correct!</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <MistakeLessonProgressManager
                mistakeLessons={mistakeLessons}
            />
        </div>
    );
}; 