import LessonPage from "./lessons-page";

type LessonsProps = {
    searchParams?: {
        search?: string,
        reaction?: string,
    }
}

export default function Page({ searchParams }: LessonsProps) {
    return (
        <LessonPage searchParams={searchParams}/>
    )
}