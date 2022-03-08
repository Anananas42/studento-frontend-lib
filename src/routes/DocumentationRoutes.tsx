import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import DocumentationHome from "../pages/documentation";

const DocumentationRoutes:FC = () => {
    
    return (
        <>
            <Routes>
                <Route path={"/"} element={<DocumentationHome />}/>
            </Routes>
        </>
    )
}

export default DocumentationRoutes;