import { useState } from "react";

export const useToggleableSidebar = (showInitially: boolean) => {
    const [showSidebar, setShowSidebar] = useState(showInitially);

    const flipValue = () => {
        setShowSidebar((bool) => !bool);
    };

    return [showSidebar, flipValue];
};
