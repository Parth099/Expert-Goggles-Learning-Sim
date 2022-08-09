import React, { useEffect } from "react";
import { useToggleableSwitch } from "../../hooks/useToggleableSwitch";
import { ToggleableTextProps } from "../Sidebar/propTypes";

const CHARLIMIT = 200;

export default function ToggleableText(props: ToggleableTextProps) {
    //bad practice but i need it
    var length = 0;

    const [showMore, toggleText] = useToggleableSwitch();

    useEffect(() => {
        length = 0;
    }, [showMore]);

    return (
        <section>
            <div className="sb-text-font mt-3 mb-1">
                {props.text.map((val, i) => {
                    const type = val.type;
                    const text = val.text;

                    //if over limit and we arent showing more
                    if (length > CHARLIMIT && !showMore) return;
                    if (type === "p") {
                        length += text.length;
                        return (
                            <p className="inline pr-2" key={i}>
                                {text}
                            </p>
                        );
                    }

                    if (type === "li") {
                        length += text.length;
                        return <li key={i}>{text}</li>;
                    }
                    return <></>;
                })}
            </div>
            <button
                type="button"
                className="see-more-btn text-xl"
                onClick={() => {
                    toggleText();
                }}
            >
                See {showMore ? "Less" : "More"}
            </button>
        </section>
    );
}
