import React, { useContext } from "react";
import { URLContext } from "./ArticleFrame";
import QandA from "./Sidebar/QandA";
import Static from "./static-sidebar/Static";

export default function SidebarSwitch() {
    const urlInfo = useContext(URLContext);

    if (!urlInfo?.sideBarType || !urlInfo.articleType) return <></>;

    if (urlInfo.sideBarType === "static") return <Static viz={urlInfo.articleType} />;
    if (urlInfo.sideBarType === "QandA") return <QandA viz={urlInfo.articleType} />;

    return <></>;
}
