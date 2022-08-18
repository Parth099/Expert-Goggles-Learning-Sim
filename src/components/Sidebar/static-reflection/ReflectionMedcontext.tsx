import { useEffect, useState } from "react";
import { useDB } from "../../../context/useDatabase";
import { MedContextQuestions } from "../../../DataResources/reflectionQuestionsMedContext";
import { ArticleProps } from "../propTypes";
import WaitingTextArea from "./WaitingTextArea";

export default function ReflectionMedContext(props: ArticleProps) {
    const DBContext = useDB();

    //holds the reflection questions
    const [questions, setQuestions] = useState<string[]>([]);

    useEffect(() => {
        const { viz } = props;

        //retuens object if found
        const QuestionObj = MedContextQuestions.find((Q) => Q.id === viz);
        if (!QuestionObj) return; //end process if somehow the process id is invalid

        setQuestions(QuestionObj.questions); //save to state
    }, []);

    const onChangeProp = (question: string, change: string) => {
        if (!DBContext?.logReflectionQuestions) return;
        DBContext.logReflectionQuestions(question, change, "QandA-static", props.articleId);
    };

    return (
        <div className="static-sidebar sidebar p-4 grow overflow-y-scroll h-screen">
            {questions.map((question, i) => {
                return (
                    <div key={i} className="reflection-question my-6 pl-10 block">
                        <p className="font-bold text-2xl mb-2v p-1">{question}</p>
                        <WaitingTextArea
                            onChange={(change: string) => {
                                //the variable question is used here with closure
                                onChangeProp(question, change);
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
