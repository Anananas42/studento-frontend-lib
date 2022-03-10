import { FC, useState } from "react";
import styled from "styled-components";
import { BtnCTAL } from "../../component-library/buttons/components";
import { BtnLinkS } from "../../component-library/buttons/components/BtnLink";
import { CheckboxRow } from "../../component-library/forms/base-components";
import { UsernameForm, PasswordForm } from "../../component-library/forms/components";
import FormColors from "../../component-library/forms/shared/FormColors";
import { useThemeContext } from "../../component-library/ThemeProvider";
import { useUserContext } from "../../component-library/UserProvider";
import logo from '../../media/logo.png';

interface IStyleProps {
    fill: string;
    sectionShadow: string;
    sectionPadding: string;
    sectionRadius: string;
    borderColor: string;
}

const StyledLoginForm = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: ${props => props.sectionShadow};
    border-radius: ${props => props.sectionRadius};
    padding: ${props => props.sectionPadding};
`;

const StyledTitle = styled.div<IStyleProps>`
    color: ${props => props.fill};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 32px;
    padding: 16px 0 48px 0;
    font-weight: 700;

    img {
        padding-bottom: 4px;
        margin-left: -8px;
    }
`;

const StyledForgotPassword = styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    margin-top: 24px;
    padding: 8px 0 0 0;
`;

const LoginForm:FC = (props) => {
    const { login } = useUserContext();
    const { languageMap, colors, borderRadius, sectionPadding, sectionRadius } = useThemeContext();
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberPassword, setRememberPassword] = useState<boolean>(false);

    const styleProps = { fill: colors.fill, sectionShadow: colors.sectionShadow, borderRadius, sectionPadding, sectionRadius, borderColor: FormColors.Default.border };

    return (
        <StyledLoginForm {...styleProps}>
            <StyledTitle {...styleProps}><img alt={"Studento logo"} src={logo} />Studento</StyledTitle>
            <UsernameForm value={username} setValue={setUsername} />
            <PasswordForm value={password} setValue={setPassword} />
            <CheckboxRow value={rememberPassword} setValue={setRememberPassword} label={languageMap.Generic.passwordRemember} />
            <BtnCTAL onClick={() => login(username, password)} icon={"login"} width={"100%"}>{languageMap.Generic.login}</BtnCTAL>
            <StyledForgotPassword {...styleProps}>
                <BtnLinkS onClick={() => console.log("haha")}>{languageMap.Generic.passwordForgot}</BtnLinkS>
                <BtnLinkS onClick={() => console.log("haha")}>{languageMap.Generic.createAccount}</BtnLinkS>
            </StyledForgotPassword>
        </StyledLoginForm>
    )
};

export default LoginForm;