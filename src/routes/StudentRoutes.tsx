import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import StudentNavbar from "../component-library/navigation/components/StudentNavbar";
import { UserMode } from "../component-library/UserProvider";
import StudentDashboard from "../pages/student";
import StudentProfile from "../pages/student/Profile";
import useUserRedirect from "./utilities/useUserRedirect";

const StudentRoutes:FC = () => {
    useUserRedirect(UserMode.STUDENT);
    
    return (
        <>
            <StudentNavbar />
            <Routes>
                <Route path={"/profile"} element={<StudentProfile />}/>
                <Route path={"/"} element={<StudentDashboard />}/>
            </Routes>
        </>
    )
}

export default StudentRoutes;