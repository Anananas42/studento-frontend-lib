import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "../../component-library/navigation/components/AdminNavbar";
import { UserMode } from "../../component-library/UserProvider";
import AdminDashboard from "../../pages/admin";
import AdminProfile from "../../pages/admin/Profile";
import useUserRedirect from "./../utilities/useUserRedirect";
import AdminAddRoutes from "./add";
import AdminFindRoutes from "./find";

const AdminRoutes:FC = () => {
    useUserRedirect(UserMode.ADMIN);

    return (
        <>
            <AdminNavbar />
            <Routes>
                <Route path={"/add/*"} element={<AdminAddRoutes />} />
                <Route path={"/find/*"} element={<AdminFindRoutes />} />
                <Route path={"/profile"} element={<AdminProfile />}/>
                <Route path={"/"} element={<AdminDashboard />}/>
            </Routes>
        </>
    )
}

export default AdminRoutes;