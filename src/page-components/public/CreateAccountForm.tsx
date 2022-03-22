import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnCTAL } from "../../component-library/buttons/components";
import { BtnLinkS } from "../../component-library/buttons/components/BtnLink";
import { PasswordForm, EmailForm } from "../../component-library/forms/components";
import FormColors from "../../component-library/forms/shared/FormColors";
import { borderRadius, sectionPadding, sectionRadius, useThemeContext } from "../../component-library/ThemeProvider";

interface IStyleProps {
    fill: string;
    sectionShadow: string;
    sectionPadding: string;
    sectionRadius: string;
    borderColor: string;
}

const StyledCreateAccountForm = styled.div<IStyleProps>`
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
    font-weight: 500;

    img {
        padding-bottom: 4px;
        margin-left: -8px;
    }
`;

const StyledLinkRow = styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    margin-top: 24px;
    padding: 8px 0 0 0;
`;

const CreateAccountForm:FC = (props) => {
    const { languageMap, colors } = useThemeContext();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const styleProps = { fill: colors.fill, sectionShadow: colors.sectionShadow, borderRadius, sectionPadding, sectionRadius, borderColor: FormColors.Default.border };

    const createAccount = () => {

    }

    return (
        <StyledCreateAccountForm {...styleProps}>
            <StyledTitle {...styleProps}>{languageMap.Generic.accountNew}</StyledTitle>
            <EmailForm value={email} setValue={setEmail} />
            <PasswordForm value={password} setValue={setPassword} />
            <PasswordForm value={confirmPassword} setValue={setConfirmPassword} isConfirmPassword={true} />
            <BtnCTAL onClick={createAccount} width={"100%"}>{languageMap.Generic.accountCreate}</BtnCTAL>
            <StyledLinkRow {...styleProps}>
                <BtnLinkS onClick={() => navigate('/login')}>{languageMap.Generic.login}</BtnLinkS>
            </StyledLinkRow>
        </StyledCreateAccountForm>
    )
};

export default CreateAccountForm;