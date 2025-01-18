import { Topic } from "@/ogm-resolver/ogm-types";
import { GET_TOPIC_TITLES } from "../gqls/topicGQLs";
import { useQuery } from "@apollo/client";

type TopicQueryResult = { topics: Topic[] };

export const useFetchTopicTitles = (
    phrase: string | null
) => {
    const { loading, data } = useQuery<TopicQueryResult>(GET_TOPIC_TITLES, { variables: { phrase } });
    return { loading, topics: data?.topics || [] }
};
