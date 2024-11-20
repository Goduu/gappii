import { ActivityCard } from "@/components/card/activity-card";
import { LearnInput } from "@/components/learn-input/learn-input";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="font-bold gap-4 flex flex-col">
      <LearnInput />
    </div>
  );
}

const voting = {
  liked: true,
  disliked: false,
  crowned: true,
}

const text = "Probability is calculated as {gap} outcomes. "
