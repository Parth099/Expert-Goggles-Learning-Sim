import { useContext } from "react";
import { useParams } from "react-router-dom";
import { URLContext } from "./ArticleFrame";
import QandA from "./Sidebar/static-QandA/QandA";
import ReflectionMedContext from "./Sidebar/static-reflection/ReflectionMedcontext";
import Static from "./Sidebar/static-sidebar/Static";

export default function SidebarSwitch() {
    const urlInfo = useContext(URLContext);
    const params = useParams();
    //expert goggles button toggle

    if (!urlInfo?.sideBarType || !urlInfo.articleType || !params.articleID) return <></>;

    //no context

    //medium context
    if (urlInfo.sideBarType === "static-context") return <Static viz={urlInfo.articleType} />;
    if (urlInfo.sideBarType === "qanda-context") return <QandA viz={urlInfo.articleType} />;
    if (urlInfo.sideBarType === "reflection-context") return <ReflectionMedContext viz={urlInfo.articleType} articleId={params.articleID} />;

    //full context

    return <></>;
}
