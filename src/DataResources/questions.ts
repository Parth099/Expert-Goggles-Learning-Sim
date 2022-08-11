//many as any do i dont have to deal with TS issues
export const QuestionStates: any[] = [
    {
        id: "Scatter Plot",
        questions: [
            {
                title: "Looks Like you have encountered a: ",
                qType: "text",
                options: ["Scatter Plot", "Bar Chart", "Histogram", "Pie Chart"],
                correct: [0],
                optionMessages: ["Correct!", "This is not a Bar chart", "Not a Histogram", "While circles are presnt it is not a Pie Chart"],
            },
            {
                title: "Which of these is a Scatter Plot",
                qType: "image",
                options: ["https://i.imgur.com/20NYeCO.png", "https://i.imgur.com/vHy2XLr.png", "https://i.imgur.com/xAT2eVm.png"],
                optionMessages: [
                    "This is a Bubble Chart, notice the variance in the size of the data points",
                    "Correct!",
                    "This is an Area Chart and not A Scatterplot",
                ],
                correct: [1],
            },
            {
                title: "Scatter Plot",
                qType: "info",
                details: [
                    {
                        type: "text",
                        title: "Scatterplot:",
                        detail: "Dots are placed in an x-y coordinate system, based on two variables. The plot is often used when it is thought that the variables are correlated.",
                    },
                    {
                        type: "image",
                        title: "How to analyze this Scatterplot",
                        detail: "https://i.imgur.com/wkTCONm.png",
                    },
                ],
            },
            {
                title: "What is a common component of a scatterplot?",
                qType: "text",
                options: ["x-axis", "y-axis", "bar height", "dots"],
                correct: [0, 1, 3],
                optionMessages: [
                    "Correct! The x-axis is a key component.",
                    "Correct! The y-axis is a key component.",
                    "Bar heights are for Bar Charts",
                    "Correct! The datapoints are usually dots.",
                ],
            },
        ],
    },
];
