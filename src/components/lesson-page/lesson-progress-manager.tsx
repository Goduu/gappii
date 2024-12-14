import { useState } from "react";
import { ActivityCard } from "../card/activity-card";
import { Activity } from "@/ogm-resolver/ogm-types";
import { Progress } from "../ui/progress";
import { redirect } from "next/navigation";
import { CircleX } from "lucide-react";
import { routes } from "@/lib/routes";
import { AnimatePresence } from "framer-motion";
type LessonProgressManagerProps = {
    topic: string;
    subtopic: string;
    activities: Activity[];
    reportedActivityIds: Activity[] | undefined;
};

export const LessonProgressManager: React.FC<LessonProgressManagerProps> = ({
    activities,
    topic,
    subtopic,
    reportedActivityIds
}) => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [completedActivities, setCompletedActivities] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev'>('next');

    const handleNext = () => {
        setTransitionDirection('next');
        setCompletedActivities([...completedActivities, currentActivityIndex]);
        if (currentActivityIndex + 1 < activities.length) {
            setCurrentActivityIndex(currentActivityIndex + 1);
            setProgress(((currentActivityIndex + 1) * 100) / activities.length);
        } else {
            redirect(routes.lessons);
        }
    };

    // Get current activity
    const currentActivity = activities[currentActivityIndex];

    // Prevent progress if not all previous activities are completed
    const canInteract = completedActivities.length === currentActivityIndex;

    return (
        <div className="flex flex-col gap-2 w-96">
            <div>
                <span className="text-lg font-black">{topic}</span> /
                <span className="text-lg">{subtopic}</span>
            </div>
            <div className="flex gap-2 w-full items-center">
                <Progress value={progress} />
                <CircleX
                    className="cursor-pointer"
                    onClick={() => redirect(routes.lessons)}
                />
            </div>
            <div className="">
                <AnimatePresence initial={false} mode="wait">
                    <ActivityCard
                        key={currentActivity.id}
                        activity={currentActivity}
                        topic={topic}
                        subtopic={subtopic}
                        reported={
                            reportedActivityIds
                                ? reportedActivityIds.some((activity) => activity.id === currentActivity.id)
                                : false
                        }
                        onNext={handleNext}
                        direction={transitionDirection}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
};