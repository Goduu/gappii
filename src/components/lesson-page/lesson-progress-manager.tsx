"use client"
import { Activity, Lesson, User } from "../../ogm-types";
import { LessonProvider } from "./lesson-context";
import { LessonContent } from "./lesson-content";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@apollo/client";
import { GET_USER_STATISTICS } from "@/lib/gqls/userGQLs";
import { LessonModes } from "./type";

type LessonProgressManagerProps = {
    lesson: Lesson;
    reportedActivityIds?: Activity[] | undefined;
    isMistakeCorrection?: boolean;
};

export const LessonProgressManager: React.FC<LessonProgressManagerProps> = (props) => {
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
        <LessonProvider lesson={props.lesson} userStreak={streak} mode={LessonModes.EitherOr}>
            <LessonContent {...props} />
        </LessonProvider>
    );
};