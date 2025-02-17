"use client"
import { Activity, User } from "../../ogm-types";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@apollo/client";
import { GET_USER_STATISTICS } from "@/lib/gqls/userGQLs";
import { SessionData } from "./types";
import { SessionProvider } from "./session-context";
import { SessionContent } from "./session-content";

type SessionProgressManagerProps = {
    sessionData: SessionData;
    reportedActivityIds?: Activity[] | undefined;
};

export const SessionProgressManager = ({ sessionData, reportedActivityIds }: SessionProgressManagerProps) => {
    const { user } = useUser();
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
            <SessionContent sessionData={sessionData} reportedActivityIds={reportedActivityIds} />
        </SessionProvider>
    );
};