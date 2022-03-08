import { FC } from "react";
import { BtnCTAL } from "../../component-library/buttons/components/BtnCTA";
import { useUserContext } from "../../component-library/UserProvider";

const Login:FC = () => {
    const { login } = useUserContext();

    return <BtnCTAL onClick={() => login("", "")} icon={"login"}>Login</BtnCTAL>
}

export default Login;