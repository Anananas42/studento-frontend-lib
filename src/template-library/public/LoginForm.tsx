import { FC, useState } from "react";
import styled from "styled-components";
import { BtnCTAL } from "../../component-library/buttons/components";
import { UsernameForm, PasswordForm } from "../../component-library/forms/components";
import { useThemeContext } from "../../component-library/ThemeProvider";
import { useUserContext } from "../../component-library/UserProvider";
import logo from '../../media/logo.png';

interface IStyleProps {
    fill: string;
    sectionShadow: string;
}

const StyledLoginForm = styled.form<IStyleProps>`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: ${props => props.sectionShadow};
`;

const StyledTitle = styled.div<IStyleProps>`
    color: ${props => props.fill};
    width: 100%;
    font-size: 32px;
    padding: 16px 32px 64px 32px;
    font-weight: 700;
`;

const LoginForm:FC = (props) => {
    const { login } = useUserContext();
    const { languageMap, colors } = useThemeContext();
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const styleProps = { fill: colors.fill, sectionShadow: colors.sectionShadow };

    return (
        <StyledLoginForm {...styleProps}>
            <StyledTitle {...styleProps}><img alt={"Studento logo"} src={logo} />Studento</StyledTitle>
            <UsernameForm value={username} setValue={setUsername} />
            <PasswordForm value={password} setValue={setPassword} />
            <BtnCTAL onClick={() => login("", "")} icon={"login"}>{languageMap.Generic.login}</BtnCTAL>
        </StyledLoginForm>
    )
};

export default LoginForm;