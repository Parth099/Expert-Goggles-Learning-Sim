import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ArticleFrame from "./components/ArticleFrame";
import SidebarSwitch from "./components/SidebarSwitch";
import { DBProvider } from "./context/useDatabase";
import UUIDProvider from "./context/UUIDContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <UUIDProvider>
            <DBProvider>
                <BrowserRouter basename="Expert-Goggles-Learning-Sim">
                    <Routes>
                        <Route path="/" element={<App />}></Route>
                        <Route path=":articleID" element={<ArticleFrame />}>
                            <Route path=":sideBarType" element={<SidebarSwitch />}>
                                <Route path=":questionSetId" element={"questionSetId"}></Route>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </DBProvider>
        </UUIDProvider>
    </React.StrictMode>
);
