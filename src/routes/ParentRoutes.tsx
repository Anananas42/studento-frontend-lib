import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ParentNavbar from "../component-library/navigation/components/ParentNavbar";
import { UserMode } from "../component-library/UserProvider";
import ParentDashboard from "../pages/parent";
import ParentProfile from "../pages/parent/Profile";
import useUserRedirect from "./utilities/useUserRedirect";

const ParentRoutes:FC = () => {
    useUserRedirect(UserMode.PARENT);
    
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