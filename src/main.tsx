import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ArticleFrame from "./components/ArticleFrame";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path=":articleID" element={<ArticleFrame />}>
                    <Route path=":sideBarType" element={"sidebarType"}>
                        <Route path=":questionSetId" element={"questionSetId"}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
