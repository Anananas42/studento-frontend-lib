import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "../component-library/navigation/components/AdminNavbar";
import { UserMode } from "../component-library/UserProvider";
import AdminDashboard from "../pages/admin";
import AdminProfile from "../pages/admin/Profile";
import useUserRedirect from "./utilities/useUserRedirect";

const AdminRoutes:FC = () => {
    useUserRedirect(UserMode.ADMIN);

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