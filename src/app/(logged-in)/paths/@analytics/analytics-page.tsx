"use client"
import { useUserStatistics } from "@/lib/queries/useUserStatistics";
import { StreakCard } from "./streak-card";
import { AnayliticCard } from "./analytic-card";
import UserButton from "@/components/auth/user-button";

export default function AnalyticsPage() {
    const {
        streak,
        lessonsCreatedCount,
        createdLessonsInteractionsCount,
    } = useUserStatistics();

    return (
        <div className="w-full flex gap-4 items-center justify-center">
            <StreakCard streak={streak} />
            <AnayliticCard indicator='lessons-created' number={lessonsCreatedCount || 0} highlight={true} />
            <AnayliticCard indicator="interactions" number={createdLessonsInteractionsCount || 0} highlight={true} />
            <UserButton />
        </div>
    )
}