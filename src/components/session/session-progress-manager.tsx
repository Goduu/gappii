"use client"
import { Activity, User } from "../../ogm-types";
import { useUser } from "@/lib/useUser";
import { useQuery } from "@apollo/client";
import { GET_USER_STATISTICS } from "@/lib/gqls/userGQLs";
import { SessionData } from "./types";
import { SessionProvider } from "./session-context";
import { SessionContent } from "./session-content";

type SessionProgressManagerProps = {
    sessionData: SessionData;
    reportedActivityIds?: Activity[] | undefined;
    isOnboarding?: boolean;
};

export const SessionProgressManager = ({ sessionData, reportedActivityIds, isOnboarding=false }: SessionProgressManagerProps) => {
    const user = useUser();
    const { data } = useQuery<{ users: Array<User> }>(GET_USER_STATISTICS, {
        variables: {
            where: {
                clerkId: user?.id
            },
        }
    })

    const streak = data?.users[0].hasStreak[0]

    return (
        <SessionProvider sessionData={sessionData} userStreak={streak}>
            <SessionContent sessionData={sessionData} reportedActivityIds={reportedActivityIds} isOnboarding={isOnboarding} />
        </SessionProvider>
    );
};