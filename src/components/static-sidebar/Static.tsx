import { useEffect, useState } from "react";
import { ScrapedData, StaticSidebarData } from "../../DataResources/static";
import { Nullable } from "../../models";
import { StaticProps } from "../Sidebar/propTypes";
import ToggleableText from "./ToggleableText";

export default function Static(props: StaticProps) {
    const [staticData, setStaticData] = useState<Nullable<ScrapedData>>(null);

    //runs once to query the "db"
    useEffect(() => {
        const vizName = props.viz;

        const vizEntry = StaticSidebarData.find((value) => value.type === vizName);

        //if entry is not present
        if (!vizEntry) return;

        setStaticData(vizEntry);
    }, []);

    return (
        <div className="static-sidebar sidebar p-4 grow overflow-y-scroll h-screen">
            <h1 className="main-title text-3xl font-bold sidebar-heading header-font">{staticData?.type}</h1>
            <img src={staticData?.mainImgLink} alt="" className="w-full" />
            {staticData?.descriptions && <ToggleableText text={staticData.descriptions}></ToggleableText>}
            <h1 className="anat-title text-3xl font-bold sidebar-heading header-font">Visualization Anatomy</h1>
            <img src={staticData?.anatImgLink} alt="" className="w-full" />
        </div>
    );
}
