import LessonPage from "./lessons-page";

type LessonsProps = {
    searchParams?: Promise<{
        lessonReaction?: string;
        endCursor?: string;
    }>
}

export default async function Page({ searchParams }: LessonsProps) {
    return (
        <LessonPage searchParams={await searchParams} />
    )
}