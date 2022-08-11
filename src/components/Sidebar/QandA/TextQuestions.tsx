import React, { useEffect, useState } from "react";

export default function TextQuestions(props: any) {
    const [userIsCorrect, setUserIsCorrect] = useState(false);
    const [optionMessage, setOptionMessage] = useState("");
    const [selectedCorrect, setSelectedCorrect] = useState(0);

    const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (userIsCorrect) return;

        const target = e.target as HTMLElement;

        const selectedIndex = target.dataset.index;

        if (!selectedIndex) return;

        if (!props.content.correct.includes(+selectedIndex)) {
            target.classList.add("wrong");
        } else {
            target.classList.add("correct");
            setSelectedCorrect((prev) => prev + 1);
        }
        setOptionMessage(props.content.optionMessages[selectedIndex]);
    };

    useEffect(() => {
        if (selectedCorrect === props.content.correct.length) setUserIsCorrect(true);
    }, [selectedCorrect]);

    return (
        <div>
            <h2 className=" font-bold text-3xl header-font mb-6">{props.content.title}</h2>
            <p className="text-lg italic">Choose {props.content.correct.length} option(s).</p>
            <div className="mt-5 font-bold gap-4 text-2xl grid grid-cols-2">
                {props.content.options.map((value: string, index: number) => {
                    return (
                        <button type="button" className="options-button hover:text-blue-700" data-index={index} key={index} onClick={handleSelection}>
                            {value}
                        </button>
                    );
                })}
            </div>
            <p className="mt-8 text-lg font-bold">{optionMessage}</p>
            {userIsCorrect && !props.isLast && (
                <button
                    type="button"
                    className="next-btn font-bold text-2xl rounded-lg hover:bg-blue-700 p-2 w-full"
                    onClick={() => {
                        props.moveFWD();
                    }}
                >
                    Next
                </button>
            )}
        </div>
    );
}
