import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articleID } from "../DataResources/articleID";

type Nullable<T> = T | null;

export default function ArticleFrame() {
    //index the articleIDs
    const [articleLink, setArticleLink] = useState<Nullable<number>>(null);
    const [sideBarType, setSideBarType] = useState<Nullable<string>>(null);
    const params = useParams();

    useEffect(() => {
        /*
            ARTICLE FINDIND
        */

        //if url is incorrect
        if (!params.articleID) return;

        //attemp to convert to number
        const AID_as_Num: any = +params.articleID;

        //non numeric url
        if (isNaN(AID_as_Num)) return;
        //+1 bc index 0 will fail to render as 0 is a falsy value, the -1 is below
        setArticleLink(AID_as_Num + 1);

        /*
            SIDE BAR TYPE
        */
        if (!params.sideBarType) return;
        //if type present use it
        setSideBarType(params.sideBarType);
    }, [params]);

    console.log(params);

    return (
        <div className="frame-container h-100">
            {articleLink && <iframe className="w-full h-screen" src={articleID[articleLink - 1].url}></iframe>}
        </div>
    );
}
