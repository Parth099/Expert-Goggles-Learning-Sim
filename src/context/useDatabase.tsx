import { createContext, useContext } from "react";
import { ChildrenOnly, Nullable } from "../models";
import { useUUID } from "./UUIDContext";
import { arrayUnion, collection, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { storage } from "../../firebase.config";

interface DBContextInterface {
    logSidebarOpenClose: (sidebarState: boolean, assignedCondition: string, articleLink: number) => void;
    logReflectionQuestions: (question: string, answer: string, QandAType: string, articleLink: string | number) => void;
}

const DBContext = createContext<Nullable<DBContextInterface>>(null);

//design pattern to encap context
export const useDB = () => {
    return useContext(DBContext);
};

export function DBProvider({ children }: ChildrenOnly) {
    const UUIDContext = useUUID();

    const logSidebarOpenClose = (isOpen: boolean, assignedCondition: string, articleLink: number) => {
        if (!UUIDContext?.isInitialized) return; //if context is not available OR uuid has not been assigned

        //the db page is like : "/<UUID>/sidebar-log" -> writes to an array
        const logDocRef = doc(storage, UUIDContext.uuid, `sidebar-log-${assignedCondition}-${articleLink}`);
        setDoc(
            logDocRef,
            {
                sidebarLog: arrayUnion({
                    isOpen,
                    time: Date.now(),
                }),
            },
            //merge makes it so we dont overrite the entire array
            { merge: true }
        );
    };

    const logReflectionQuestions = (question: string, answer: string, QandAType: string, articleLink: number | string) => {
        if (!UUIDContext?.isInitialized) return;

        const reflectionRef = doc(storage, UUIDContext.uuid, `sidebar-${QandAType}-${question}-${articleLink}`);
        setDoc(
            reflectionRef,
            {
                [question]: answer,
            },
            { merge: true }
        );
    };

    //the info inside value is made global to all children
    let value = {
        logSidebarOpenClose,
        logReflectionQuestions,
    };

    return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
}
