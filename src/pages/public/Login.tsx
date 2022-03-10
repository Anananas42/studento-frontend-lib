import { FC } from "react";
import styled from "styled-components";
import LoginForm from "../../template-library/public/LoginForm";

const StyledLogin = styled.div`
    padding-top: min(max(calc(100vh - 900px), 0px), 64px);
    height: fit-content;
`;

const Login:FC = () => {

    return (
        <StyledLogin>
            <LoginForm />
        </StyledLogin>
    )
}

export default Login;