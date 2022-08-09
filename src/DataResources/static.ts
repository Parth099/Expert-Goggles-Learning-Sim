export interface ScrapedData {
    type: string;
    descriptions: TextDescription[];
    functions: string[];
    mainImgLink: string;
    anatImgLink: string;
}

export interface TextDescription {
    type: string;
    text: string;
}

export const StaticSidebarData: ScrapedData[] = [
    {
        type: "Scatter Plot",
        descriptions: [
            { type: "p", text: "Also known as a Scatter Graph, Point Graph, X-Y Plot, Scatter Chart or Scattergram." },
            {
                type: "p",
                text: "Scatterplots use a collection of points placed using Cartesian Coordinates to display values from two variables. By displaying a variable in each axis, you can detect if a relationship or correlation between the two variables exists.",
            },
            {
                type: "p",
                text: "Various types of correlation can be interpreted through the patterns displayed on Scatterplots. These are: positive (values increase together), negative (one value decreases as the other increases), null (no correlation), linear, exponential and U-shaped. The strength of the correlation can be determined by how closely packed the points are to each other on the graph. Points that end up far outside the general cluster of points are known as outliers.",
            },
            {
                type: "p",
                text: "Lines or curves are fitted within the graph to aid in analysis and are drawn as close to all the points as possible and to show how all the points were condensed into a single line would look. This is typically known as the Line of Best Fit or a Trend Line and can be used to make estimates via interpolation.",
            },
            {
                type: "p",
                text: "Scatterplots are ideal when you have paired numerical data and you want to see if one variable impacts the other. However, do remember that correlation is not causation and another unnoticed variable may be influencing results.",
            },
        ],
        functions: ["Patterns", "Relationships"],
        mainImgLink: "https://imgur.com/BLWCcA9.png",
        anatImgLink: "https://imgur.com/wkTCONm.png",
    },
    {
        type: "Area Graph",
        descriptions: [
            {
                type: "p",
                text: "Area Graphs are Line Graphs but with the area below the line filled in with a certain colour or texture. Area Graphs are drawn by first plotting data points on a Cartesian coordinate grid, joining a line between the points and finally filling in the space below the completed line.",
            },
            {
                type: "p",
                text: "Like Line Graphs, Area Graphs are used to display the development of quantitative values over an interval or time period. They are most commonly used to show trends, rather than convey specific values.",
            },
            {
                type: "p",
                text: "Two popular variations of Area Graphs are: grouped and Stacked Area Graphs. Grouped Area Graphs start from the same zero axis, while Stacked Area Graphs have each data series start from the point left by the previous data series.",
            },
        ],
        functions: ["Patterns", "Data over time"],
        mainImgLink: "https://i.imgur.com/xAT2eVm.png",
        anatImgLink: "https://i.imgur.com/sBP6wRB.png",
    },
];
