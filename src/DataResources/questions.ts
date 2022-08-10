//many as any do i dont have to deal with TS issues
export const QuestionStates: any[] = [
    {
        id: "Scatter Plot",
        questions: [
            {
                title: "Looks Like you have encountered a: ",
                qType: "text",
                options: ["Scatter Plot", "Bar Chart", "Histogram", "Pie Chart"],
                correct: 0,
            },
            {
                title: "Which of these is a Scatter Plot",
                qType: "image",
                options: ["https://i.imgur.com/20NYeCO.png", "https://i.imgur.com/vHy2XLr.png"],
                correct: 1,
            },
            {
                title: "Scatter Plot",
                qType: "info",
                details: [
                    {
                        type: "text",
                        detail: "Dots are placed in an x-y coordinate system, based on two variables. The plot is often used when it is thought that the variables are correlated.",
                    },
                ],
            },
        ],
    },
];
