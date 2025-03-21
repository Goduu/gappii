import { Lesson, LessonFulltextResult } from "../../ogm-types";
import { GET_COMMUNITY_LESSONS, GET_COMMUNITY_LESSONS_FULLTEXT } from "../gqls/lessonGQLs";
import { getApolloClient } from "../getApolloClient";
import { CommunitySearchParams } from "@/app/types";

type FullTextQueryResult = { lessonsFulltextLessonTitle: LessonFulltextResult[] };
type LessonQueryResult = { lessons: Lesson[] };

const buildQueryVariables = (searchParams: CommunitySearchParams) => ({
    phrase: searchParams?.lessonSearch,
    level: searchParams?.level ? parseInt(searchParams.level) : undefined,
    newestSort: searchParams?.toggle === "newest" ? "DESC" : undefined,
    topRatedSort: searchParams?.toggle === "topRated" ? "DESC" : undefined,
    language: searchParams?.language
});

export const fetchLessonsData = async (
    searchParams: CommunitySearchParams
) => {
    const client = getApolloClient();
    const isFullTextSearch = Boolean(searchParams?.lessonSearch);

    const variables = buildQueryVariables(searchParams);

    try {
        if (isFullTextSearch) {
            const { data: fullTextData } = await client.query<FullTextQueryResult>({
                query: GET_COMMUNITY_LESSONS_FULLTEXT,
            variables
        });
        return fullTextData?.lessonsFulltextLessonTitle.map(item => item.lesson);
    } else {
        const { data: lessonsData } = await client.query<LessonQueryResult>({
            query: GET_COMMUNITY_LESSONS,
                variables
            });
            return lessonsData?.lessons;
        }
    } catch (error) {
        console.dir(error, { depth: null });
        return [];
    }
};
