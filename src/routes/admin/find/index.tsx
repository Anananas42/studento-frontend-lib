import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AdminFindMenu from "../../../pages/admin/find";
import AdminStudentView from "../../../pages/admin/find/StudentView";

const AdminFindRoutes:FC = () => {

    return (
        <Routes>
            <Route path={"/student/:studentId"} element={<AdminStudentView />} />
            <Route path={"/"} element={<AdminFindMenu />} />
        </Routes>
    )
}

export default AdminFindRoutes;