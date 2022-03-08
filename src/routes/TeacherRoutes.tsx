import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import TeacherNavbar from "../component-library/navigation/components/TeacherNavbar";
import TeacherDashboard from "../pages/teacher";
import TeacherProfile from "../pages/teacher/Profile";

const TeacherRoutes:FC = () => {
    
    
    return (
        <>
            <TeacherNavbar />
            <Routes>
                <Route path={"/profile"} element={<TeacherProfile />}/>
                <Route path={"/"} element={<TeacherDashboard />}/>
            </Routes>
        </>
    )
}

export default TeacherRoutes;