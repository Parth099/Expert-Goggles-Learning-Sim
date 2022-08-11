import { useContext } from "react";
import { useUUID } from "../context/UUIDContext";
import { URLContext } from "./ArticleFrame";
import QandA from "./Sidebar/QandA/QandA";
import Static from "./Sidebar/static-sidebar/Static";

export default function SidebarSwitch() {
    const urlInfo = useContext(URLContext);
    //expert goggles button toggle

    if (!urlInfo?.sideBarType || !urlInfo.articleType) return <></>;

    if (urlInfo.sideBarType === "static") return <Static viz={urlInfo.articleType} />;
    if (urlInfo.sideBarType === "QandA") return <QandA viz={urlInfo.articleType} />;

    return <></>;
}
