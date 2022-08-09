import { useState } from "react";

//defaults to highing the bar at first
export const useToggleableSwitch: any = (initVal: boolean = false) => {
    const [switchStatus, setSwitchStatus] = useState(initVal);

    const flipValue = () => {
        setSwitchStatus((bool) => !bool);
    };

    return [switchStatus, flipValue];
};
