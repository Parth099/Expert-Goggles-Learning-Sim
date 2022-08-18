import React, { useState } from "react";

interface WaitingProps {
    onChange: (c: string) => void;
}

export default function WaitingTextArea(props: WaitingProps) {
    const [cancelDBWrite, setCancelDBWrite] = useState<any>(null);

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        //cancel the current dispatch
        clearTimeout(cancelDBWrite);

        const change = (e.target as HTMLTextAreaElement).value;

        //user has 3 sec to keep writing or we submit
        const unSub = setTimeout(() => {
            props.onChange(change);
        }, 3000);

        setCancelDBWrite(unSub);
    };

    return <textarea rows={5} className="p-3 font-xl w-full" onChange={handleInput}></textarea>;
}
