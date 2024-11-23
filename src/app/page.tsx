import { LearnInput } from "@/components/learn-input/learn-input";

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
