import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import StudentNavbar from "../component-library/navigation/components/StudentNavbar";
import StudentDashboard from "../pages/student";
import StudentProfile from "../pages/student/Profile";

const StudentRoutes:FC = () => {
    
    
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