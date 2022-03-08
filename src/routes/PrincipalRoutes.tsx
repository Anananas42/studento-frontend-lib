import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PrincipalNavbar from "../component-library/navigation/components/PrincipalNavbar";
import PrincipalDashboard from "../pages/principal";
import PrincipalProfile from "../pages/principal/Profile";

const PrincipalRoutes:FC = () => {
    
    
    return (
        <>
            <PrincipalNavbar />
            <Routes>
                <Route path={"./profile"} element={<PrincipalProfile />}/>
                <Route path={"./"} element={<PrincipalDashboard />}/>
            </Routes>
        </>
    )
}

export default PrincipalRoutes;