import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AdminAdd from "../../../pages/admin/add";
import AdminAddClass from "../../../pages/admin/add/AddClass";

const AdminAddRoutes:FC = () => {

    return (
        <Routes>
            <Route path={"/class"} element={<AdminAddClass />} />
            <Route path={"/"} element={<AdminAdd />} />
        </Routes>
    )
}

export default AdminAddRoutes;