"use client"
import { User } from "../../ogm-types";
import { MistakeLessonProvider } from "./mistakes-lesson-context";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@apollo/client";
import { GET_USER_STATISTICS } from "@/lib/gqls/userGQLs";
import { MistakeLesson } from "./types";
import { MistakeLessonContent } from "./mistake-lesson-content";
import { FC } from "react";

type MistakeLessonProgressManagerProps = {
    mistakeLessons: MistakeLesson[];
};

export const MistakeLessonProgressManager: FC<MistakeLessonProgressManagerProps> = ({ mistakeLessons }) => {
    const { user } = useUser();
    const { data } = useQuery<{ users: Array<User> }>(GET_USER_STATISTICS, {
        variables: {
            where: {
                clerkId: user?.id
            },
        }
    });

    const streak = data?.users[0]?.hasStreak[0];

    return (
        <MistakeLessonProvider mistakeLessons={mistakeLessons} userStreak={streak}>
            <MistakeLessonContent mistakeLessons={mistakeLessons} />
        </MistakeLessonProvider>
    );
};