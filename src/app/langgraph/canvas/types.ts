export type ProcessState = {
    label: string;
    value: StateValue;
}

export type StateValue = "initial" | "learningGoals" | "learningGoalsRefinement" | "learningPlanRefinement" | "lessonsCreation";