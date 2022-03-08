import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ParentNavbar from "../component-library/navigation/components/ParentNavbar";
import ParentDashboard from "../pages/parent";
import ParentProfile from "../pages/parent/Profile";

const ParentRoutes:FC = () => {
    
    
    return (
        <>
            <ParentNavbar />
            <Routes>
                <Route path={"/profile"} element={<ParentProfile />}/>
                <Route path={"/"} element={<ParentDashboard />}/>
            </Routes>
        </>
    )
}

export default ParentRoutes;