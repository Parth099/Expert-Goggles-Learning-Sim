import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { articleID } from "../DataResources/articleID";
import { Nullable } from "../models";

interface URLData {
    articleType: Nullable<string>;
    sideBarType: Nullable<string>;
}

export const URLContext = createContext<Nullable<URLData>>(null);

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

    const value: URLData = { articleType: articleLink ? articleID[articleLink - 1].viz : "Scatter Plot", sideBarType };

    return (
        <div className="h-100">
            <URLContext.Provider value={value}>
                {articleLink && (
                    <div className="frame-container flex">
                        <iframe className="w-full h-screen" src={articleID[articleLink - 1].url}></iframe>
                        <section className="sidebar-container">
                            <Outlet />
                        </section>
                    </div>
                )}
            </URLContext.Provider>
        </div>
    );
}
