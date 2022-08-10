import { useEffect, useState } from "react";
import { QuestionStates } from "../../../DataResources/questions";
import { QandAProps } from "../propTypes";
import ImageQuestions from "./ImageQuestions";
import InformationDisplay from "./InformationDisplay";
import TextQuestions from "./TextQuestions";

export default function QandA(props: QandAProps) {
    const [QuestionCollection, setQuestionCollection] = useState<any>(null);
    const [questionIndex, setQuestionIndex] = useState<number>(0);

    useEffect(() => {
        const qCollection = QuestionStates.find((v) => v.id === props.viz);
        if (qCollection) setQuestionCollection(qCollection);
    }, []);

    const render = () => {
        //get the question pointed by the "now" cursor (questionIndex)
        const content = QuestionCollection.questions[questionIndex];

        //get type so we can render correct type
        const questionType = content.qType;
        const moveFWD = () => {
            setQuestionIndex((currNum) => currNum + 1);
        };
        const isLast = questionIndex >= QuestionCollection.questions.length - 1;

        if (questionType === "text") {
            return <TextQuestions content={content} moveFWD={moveFWD} isLast={isLast} />;
        }
        if (questionType === "image") {
            return <ImageQuestions content={content} moveFWD={moveFWD} isLast={isLast} />;
        }

        if (questionType === "info") {
            return <InformationDisplay content={content} moveFWD={moveFWD} isLast={isLast} />;
        }
        return <>Thats all!</>;
    };

    return <div className="Q-and-A-container flex flex-col justify-center p-6 min-h-full">{QuestionCollection && render()}</div>;
}
