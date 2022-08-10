import { useEffect, useState } from "react";
import { QuestionStates } from "../../../DataResources/questions";
import { QandAProps } from "../propTypes";
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

        if (questionType === "text") {
            return (
                <TextQuestions
                    content={content}
                    moveFWD={() => {
                        setQuestionIndex((currNum) => currNum + 1);
                    }}
                />
            );
        }
        return <></>;
    };

    return <div className="Q-and-A-container flex flex-col justify-center min-h-full p-6">{QuestionCollection && render()}</div>;
}
