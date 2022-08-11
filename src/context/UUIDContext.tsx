import { createContext, useContext, useEffect, useState } from "react";
import { ChildrenOnly, Nullable } from "../models";
import { v4 as uuidv4 } from "uuid";

interface UUIDContextInterface {
    uuid: string;
    isInitialized: boolean;
}

const PROJECT_KEY = "EXPERT_GOGGLES_DATABSE_UUID";

const UUIDContext = createContext<Nullable<UUIDContextInterface>>(null);

export const useUUID = () => {
    return useContext(UUIDContext);
};

export default function UUIDProvider({ children }: ChildrenOnly) {
    const [uuid, setUUID] = useState("");
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
        const savedKey = localStorage.getItem(PROJECT_KEY);
        //if key in memory retrive
        if (savedKey) {
            setUUID(savedKey);
            return; //no further action required
        }

        //genrate new id
        const generatedUUID = uuidv4();
        setUUID(generatedUUID);
    }, []);

    //update key if possible
    useEffect(() => {
        if (uuid !== "" && !isInitialized) {
            localStorage.setItem(PROJECT_KEY, uuid);
            setIsInitialized(true);
        }
    }, [uuid]);

    return <UUIDContext.Provider value={{ uuid, isInitialized }}>{children}</UUIDContext.Provider>;
}
