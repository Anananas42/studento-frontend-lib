import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultNavbar from "../component-library/navigation/components/DefaultNavbar";
import Home from "../pages/shared/Home";
import Login from "../pages/shared/Login";

const PublicRoutes:FC = () => {
    
    
    return (
        <>
            <DefaultNavbar />
            <Routes>
                <Route path={"./login"} element={<Login />}/>
                <Route path={"./"} element={<Home />}/>
            </Routes>
        </>
    )
}

export default PublicRoutes;