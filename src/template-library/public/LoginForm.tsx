import { FC, useState } from "react";
import styled from "styled-components";
import { BtnCTAL } from "../../component-library/buttons/components";
import { UsernameForm, PasswordForm } from "../../component-library/forms/components";
import { useThemeContext } from "../../component-library/ThemeProvider";
import { useUserContext } from "../../component-library/UserProvider";
import logo from '../../media/logo.png';

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;

`;

interface IStyleProps {
    fill: string;
}

const StyledTitle = styled.div<IStyleProps>`
    color: ${props => props.fill};
    width: 100%;
    text-align: center;
    font-size: 32px;
    padding: 16px 32px 64px 32px;
    font-weight: 700;
`;

const LoginForm:FC = (props) => {
    const { login } = useUserContext();
    const { languageMap, colors } = useThemeContext();
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <StyledLoginForm>
            <StyledTitle fill={colors.fill}><img alt={"Studento logo"} src={logo} />Studento</StyledTitle>
            <UsernameForm value={username} setValue={setUsername} />
            <PasswordForm value={password} setValue={setPassword} />
            <BtnCTAL onClick={() => login("", "")} icon={"login"}>{languageMap.Generic.login}</BtnCTAL>
        </StyledLoginForm>
    )
};

export default LoginForm;