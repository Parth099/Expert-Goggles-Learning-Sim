import React from "react";

export default function InformationDisplay(props: any) {
    console.log(props);
    return (
        <div className="info-container">
            {props.content.details.map((val: any, index: number) => {
                const type = val.type;

                if (type === "text") {
                    return (
                        <section className="text-container my-5">
                            <h2 className="font-bold text-2xl mt-1">{val.title}</h2>
                            <p>{val.detail}</p>
                        </section>
                    );
                }
                if (type === "image") {
                    return (
                        <section className="img-container my-5">
                            <h2 className="font-bold text-2xl mt-1">{val.title}</h2>
                            <img src={val.detail} alt="" className="w-full" />
                        </section>
                    );
                }
            })}
            {!props.isLast /*render next option iff it is not the last page*/ && (
                <button
                    type="button"
                    className="next-btn font-bold text-2xl rounded-lg hover:bg-blue-700 p-2 w-full"
                    onClick={() => {
                        props.moveFWD();
                    }}
                >
                    I Understand
                </button>
            )}
        </div>
    );
}
