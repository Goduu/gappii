import { CircleX } from "lucide-react";
import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";
import { useUser } from "@clerk/nextjs";

type LessonHeaderProps = {
    topicTitle: string;
    subtopicTitle: string;
};

export const LessonHeader: React.FC<LessonHeaderProps> = ({
    topicTitle,
    subtopicTitle,
}) => {
    const user = useUser();

    return (
        <div className="px-4 sm:px-0 flex items-center justify-between">
            <div className="text-base sm:text-lg font-bold flex items-center gap-2 text-ellipsis overflow-hidden">
                {topicTitle} <span className="text-muted-foreground">/</span> {subtopicTitle}
            </div>
            <CircleX
                className="h-5 w-5 cursor-pointer hover:text-destructive transition-colors"
                onClick={() => redirect(user?.isSignedIn ? routes.dashboard : routes.home)}
            />
        </div>
    );
}; 