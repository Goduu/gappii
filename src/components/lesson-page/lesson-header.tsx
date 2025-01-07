import { CircleX } from "lucide-react";
import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

type LessonHeaderProps = {
    topicTitle: string;
    subtopicTitle: string;
};

export const LessonHeader: React.FC<LessonHeaderProps> = ({
    topicTitle,
    subtopicTitle,
}) => {
    return (
        <div className="px-4 sm:px-0 flex items-center justify-between">
            <div className="text-base sm:text-lg font-bold flex items-center gap-2 text-ellipsis overflow-hidden">
                {topicTitle} <span className="text-muted-foreground">/</span> {subtopicTitle}
            </div>
            <CircleX
                className="h-5 w-5 cursor-pointer hover:text-destructive transition-colors"
                onClick={() => redirect(routes.lessons)}
            />
        </div>
    );
}; 