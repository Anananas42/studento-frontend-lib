import { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DefaultNavbar from "../component-library/navigation/components/DefaultNavbar";
import { useUserContext } from "../component-library/UserProvider";
import Home from "../pages/shared/Home";
import Login from "../pages/shared/Login";

const PublicRoutes:FC = () => {
    const navigate = useNavigate();
    const { userStatus, checkAccessToken } = useUserContext();

    useEffect(() => {
        if (userStatus) {
            return navigate("/" + userStatus.userMode);
        } else {
            checkAccessToken();
        }
    }, [userStatus, navigate, checkAccessToken]);

    return (
        <>
            <DefaultNavbar />
            <Routes>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/"} element={<Home />}/>
            </Routes>
        </>
    )
}

export default PublicRoutes;