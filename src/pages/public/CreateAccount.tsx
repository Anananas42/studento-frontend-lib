import { FC } from "react";
import styled from "styled-components";
import CreateAccountForm from "../../page-components/public/CreateAccountForm";

const StyledCreateAccount = styled.div`
    padding-top: min(max(calc(100vh - 900px), 0px), 64px);
    height: fit-content;
`;

const CreateAccount:FC = () => {

    return (
        <StyledCreateAccount>
            <CreateAccountForm />
        </StyledCreateAccount>
    )
}

export default CreateAccount;