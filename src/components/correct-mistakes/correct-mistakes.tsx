"use client"
import { useQuery } from "@apollo/client";
import { GET_USER_MISTAKES } from "@/lib/gqls/userGQLs";
import { useUser } from "@clerk/nextjs";
import { User } from "@/ogm-types";
import { SessionProgressManager } from "../session/session-progress-manager";
import { MistakeCorrectionSessionData } from "../session/types";

export const CorrectMistakes = () => {
    const { user } = useUser();
    const { data, loading } = useQuery<{ users: User[] }>(GET_USER_MISTAKES, {
        variables: { where: { clerkId: user?.id } }
    });
    
    if (loading) return <div>Loading...</div>;
    
    const sessionData: MistakeCorrectionSessionData = {
        type: 'mistake-correction',
        activities: data?.users[0]?.mistakenActivities.map(activity => ({
            ...activity,
            title: "Correcting Mistakes",
        })) || []
    }

    return (
        <div className="w-full">
            <SessionProgressManager sessionData={sessionData} />
        </div>
    );
}; 