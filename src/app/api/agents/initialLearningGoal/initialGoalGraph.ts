import { END, START, StateGraph } from "@langchain/langgraph";
import { createLearningGoalAgent } from "./learningGoalAgent";
import { InitialLearningGoalsState } from "./types";
import { createInMemoryStore } from "../inMemoryStore";


export const createInitialGoalGraph = () => {

    const initialLearningGoalAgent = createLearningGoalAgent();

    async function generateInitialGoals(
        state: typeof InitialLearningGoalsState.State,
    ): Promise<Partial<typeof InitialLearningGoalsState.State>> {
        console.log('state', state)
        const response = await initialLearningGoalAgent.invoke({ userInput: state.userInput });

        return {
            userInput: state.userInput,
            initialLearningGoals: {
                learningGoals: response.learningGoals.map(goal => ({
                    ...goal,
                    index: state.initialLearningGoals?.learningGoals?.length || 0,
                    previousIndex: (state.initialLearningGoals?.learningGoals?.length || 0) -1,
                    goals: goal.goals,
                })),
            },
            aiMessage: response.aiMessage,
            pastSteps: state.pastSteps,
        };
    }

    async function regenerateStep(
        state: typeof InitialLearningGoalsState.State,
    ): Promise<Partial<typeof InitialLearningGoalsState.State>> {
        console.log('state', state)
        return {
            userInput: state.userInput,
        };
    }

    const workflow = new StateGraph(InitialLearningGoalsState)
        .addNode("generateInitialGoals", generateInitialGoals)
        .addEdge(START, "generateInitialGoals")
        .addEdge("generateInitialGoals", END)
    // .addEdge("planner", "agent")
    // .addEdge("agent", "replan")
    // .addConditionalEdges("replan", shouldEnd, {
    //     true: END,
    //     false: "agent",
    // });

    const inMemoryStore = createInMemoryStore();

    return workflow.compile({
        store: inMemoryStore
    })
}