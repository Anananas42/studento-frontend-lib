import { FC } from "react";
import { Route, Routes } from "react-router";
import AdminRoutes from "./admin";
import DocumentationRoutes from "./DocumentationRoutes";
import ParentRoutes from "./ParentRoutes";
import PrincipalRoutes from "./PrincipalRoutes";
import PublicRoutes from "./PublicRoutes";
import StudentRoutes from "./StudentRoutes";
import TeacherRoutes from "./TeacherRoutes";

const AllRoutes:FC = () => {
    
    return (
        <Routes>
            <Route path={"/admin/*"} element={<AdminRoutes />} />
            <Route path={"/parent/*"} element={<ParentRoutes />} />
            <Route path={"/principal/*"} element={<PrincipalRoutes />} />
            <Route path={"/student/*"} element={<StudentRoutes />} />
            <Route path={"/teacher/*"} element={<TeacherRoutes />} />
            <Route path={"/documentation/*"} element={<DocumentationRoutes />}/>
            <Route path={"/*"} element={<PublicRoutes />} />
        </Routes>
    )
}

export default AllRoutes;