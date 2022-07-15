import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AdminAdd from "../../../pages/admin/add";
import AdminAddClass from "../../../pages/admin/add/AddClass";
import AdminAddEmployee from "../../../pages/admin/add/AddEmployee";
import AdminAddRoom from "../../../pages/admin/add/AddRoom";
import AdminAddStudent from "../../../pages/admin/add/AddStudent";
import AdminAddSubject from "../../../pages/admin/add/AddSubject";
import AdminAddTeacher from "../../../pages/admin/add/AddTeacher";

const AdminAddRoutes:FC = () => {

    return (
        <Routes>
            <Route path={"/class"} element={<AdminAddClass />} />
            <Route path={"/employee"} element={<AdminAddEmployee />} />
            <Route path={"/student"} element={<AdminAddStudent />} />
            <Route path={"/subject"} element={<AdminAddSubject />} />
            <Route path={"/teacher"} element={<AdminAddTeacher />} />
            <Route path={"/room"} element={<AdminAddRoom />} />
            <Route path={"/"} element={<AdminAdd />} />
        </Routes>
    )
}

export default AdminAddRoutes;