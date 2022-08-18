export interface QuestionsById {
    id: string;
    questions: string[];
}

export const MedContextQuestions: QuestionsById[] = [
    {
        id: "Scatter Plot",
        questions: [
            "Scatterplots represent data as circles. How many circles (data points) do you see? Is this a lot or a little?",
            "Scatterplots can convey relationships between variables called correlations. Do you notice a correlation between these variables?",
            "With your previous answer in mind, what are the possible causes for this correlation? Are there any alternative causes?",
        ],
    },
];
