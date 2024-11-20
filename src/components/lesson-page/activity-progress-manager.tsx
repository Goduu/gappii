import { useState } from "react";
import { ActivityCard } from "../card/activity-card";
import { Activity } from "@/ogm-resolver/ogm-types";
import { Progress } from "../ui/progress";

type ActivityProgressManagerProps = {
    topic: string,
    subtopic: string,
    activities: Activity[];
}

export const ActivityProgressManager: React.FC<ActivityProgressManagerProps> = ({
    activities,
    topic,
    subtopic,
}) => {
    const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
    const [completedActivities, setCompletedActivities] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);

    const handleNext = () => {
        setCompletedActivities([...completedActivities, currentActivityIndex]);
        currentActivityIndex < activities.length && setCurrentActivityIndex(currentActivityIndex + 1);
        setProgress((currentActivityIndex + 1)*100 / activities.length);
    }

    // Get current activity
    const currentActivity = activities[currentActivityIndex];

    // Prevent progress if not all previous activities are completed
    const canInteract = completedActivities.length === currentActivityIndex;

    return (
        <>
            <Progress value={progress} />
            <ActivityCard activity={currentActivity} topic={topic} subtopic={subtopic} onNext={handleNext}/>
        </>
    )
}