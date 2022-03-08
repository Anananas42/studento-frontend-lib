import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "../component-library/navigation/components/AdminNavbar";
import AdminDashboard from "../pages/admin";
import AdminProfile from "../pages/admin/Profile";

const AdminRoutes:FC = () => {
    
    return (
        <>
            <AdminNavbar />
            <Routes>
                <Route path={"/profile"} element={<AdminProfile />}/>
                <Route path={"/"} element={<AdminDashboard />}/>
            </Routes>
        </>
    )
}

export default AdminRoutes;