import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDB } from "../context/useDatabase";
import { useUUID } from "../context/UUIDContext";
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

    //for btn
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        /*
            ARTICLE FINDING
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

    //custom context hooks to deliver relavent logic
    const uuidInfo = useUUID();
    const DBContext = useDB();

    useEffect(() => {
        //dispatch a log write on sidebar state
        DBContext?.logSidebarOpenClose(showSidebar);
    }, [showSidebar]);

    return (
        <div className="h-100">
            <URLContext.Provider value={value}>
                {articleLink && (
                    <div className="frame-container flex relative">
                        <iframe className="w-full h-screen" src={articleID[articleLink - 1].url}></iframe>

                        <section
                            className="sidebar-container max-h-screen overflow-y-scroll relative"
                            style={{ display: showSidebar ? "block" : "none" }}
                        >
                            <p className="fixed bottom-0 left-[10px] text-sm">Your UserID: {uuidInfo?.uuid}</p>
                            <Outlet />
                        </section>

                        <button
                            className="bg-[#3d3d3f] py-2 px-3 text-white rounded-lg text-xl readable-font text-left shadow-lg absolute top-4 hover:shadow-2xl z-10"
                            style={{ right: showSidebar ? "520px" : "15px" }}
                            onClick={() => {
                                setShowSidebar((currState) => !currState);
                            }}
                        >
                            <strong className="text-xl">Expert Goggles</strong>
                            <p>Click to {showSidebar ? "close" : "show"} guidence</p>
                        </button>
                    </div>
                )}
            </URLContext.Provider>
        </div>
    );
}
