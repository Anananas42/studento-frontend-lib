import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PrincipalNavbar from "../component-library/navigation/components/PrincipalNavbar";
import { UserMode } from "../component-library/UserProvider";
import PrincipalDashboard from "../pages/principal";
import PrincipalProfile from "../pages/principal/Profile";
import useUserRedirect from "./utilities/useUserRedirect";

const PrincipalRoutes:FC = () => {
    useUserRedirect(UserMode.PRINCIPAL);
    
    return (
        <>
            <PrincipalNavbar />
            <Routes>
                <Route path={"/profile"} element={<PrincipalProfile />}/>
                <Route path={"/"} element={<PrincipalDashboard />}/>
            </Routes>
        </>
    )
}

export default PrincipalRoutes;