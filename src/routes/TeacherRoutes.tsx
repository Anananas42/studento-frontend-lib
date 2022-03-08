import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import TeacherNavbar from "../component-library/navigation/components/TeacherNavbar";
import { UserMode } from "../component-library/UserProvider";
import TeacherDashboard from "../pages/teacher";
import TeacherProfile from "../pages/teacher/Profile";
import useUserRedirect from "./utilities/useUserRedirect";

const TeacherRoutes:FC = () => {
    useUserRedirect(UserMode.TEACHER);
    
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