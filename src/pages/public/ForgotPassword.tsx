import { FC } from "react";
import styled from "styled-components";
import ForgotPasswordForm from "../../template-library/public/ForgotPasswordForm";

const StyledForgotPassword = styled.div`
    padding-top: min(max(calc(100vh - 900px), 0px), 64px);
    height: fit-content;
`;

const ForgotPassword:FC = () => {

    return (
        <StyledForgotPassword>
            <ForgotPasswordForm />
        </StyledForgotPassword>
    )
}

export default ForgotPassword;