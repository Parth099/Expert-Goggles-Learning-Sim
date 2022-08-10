import React, { useState } from "react";

export default function TextQuestions(props: any) {
    const [userIsCorrect, setUserIsCorrect] = useState(false);

    const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (userIsCorrect) return;

        const target = e.target as HTMLElement;

        const selectedIndex = target.dataset.index;

        if (!selectedIndex) return;

        if (+selectedIndex !== props.content.correct) {
            target.classList.add("wrong");
        } else {
            target.classList.add("correct");
            setUserIsCorrect(true);
        }
    };

    return (
        <div>
            <h2 className=" font-bold text-3xl header-font mb-6">{props.content.title}</h2>
            <div className="options-container">
                {props.content.options.map((value: string, index: number) => {
                    return (
                        <button type="button" className="options-button hover:text-blue-700" data-index={index} key={index} onClick={handleSelection}>
                            {value}
                        </button>
                    );
                })}
                {userIsCorrect && (
                    <button
                        type="button"
                        className="next-btn font-bold text-2xl mt-8 rounded-lg hover:bg-blue-700 p-2"
                        onClick={() => {
                            props.moveFWD();
                        }}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}
