import { InMemoryStore } from "@langchain/langgraph-checkpoint";
import { OpenAIEmbeddings } from "@langchain/openai";

export const createInMemoryStore = () => {
    const store = new InMemoryStore({
        index: {
            embeddings: new OpenAIEmbeddings({
                modelName: "text-embedding-3-small",
            }),
            dims: 1536,
            fields: ["$"]
        }
    });

    return store
}

