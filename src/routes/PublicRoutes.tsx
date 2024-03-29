import { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DefaultNavbar from "../component-library/navigation/components/DefaultNavbar";
import { useUserContext } from "../component-library/UserProvider";
import Contact from "../pages/public/Contact";
import CreateAccount from "../pages/public/CreateAccount";
import ForgotPassword from "../pages/public/ForgotPassword";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Footer from "../page-components/Footer";

const PublicRoutes:FC = () => {
    const navigate = useNavigate();
    const { userStatus, checkSessionAuth } = useUserContext();

    useEffect(() => {
        if (userStatus) {
            return navigate("/" + userStatus.userMode);
        } else {
            checkSessionAuth();
        }
    }, [userStatus, navigate, checkSessionAuth]);

    return (
        <>
            <DefaultNavbar />
            <Routes>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/forgot-password"} element={<ForgotPassword />}/>
                <Route path={"/create-account"} element={<CreateAccount />}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"/"} element={<Home />}/>
            </Routes>
            <Footer />
        </>
    )
}

export default PublicRoutes;