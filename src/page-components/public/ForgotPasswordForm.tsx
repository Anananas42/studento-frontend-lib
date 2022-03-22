import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnCTAL } from "../../component-library/buttons/components";
import { BtnLinkS } from "../../component-library/buttons/components/BtnLink";
import { EmailForm } from "../../component-library/forms/components";
import FormColors from "../../component-library/forms/shared/FormColors";
import { borderRadius, sectionPadding, sectionRadius, useThemeContext } from "../../component-library/ThemeProvider";

interface IStyleProps {
    fill: string;
    sectionShadow: string;
    sectionPadding: string;
    sectionRadius: string;
    borderColor: string;
}

const StyledForgotPasswordForm = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    min-width: 560px;
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
    font-size: 24px;
    padding: 16px 0 48px 0;
    font-weight: 500;
`;

const StyledLinkRow = styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    margin-top: 24px;
    padding: 8px 0 0 0;
`;

const ForgotPasswordForm:FC = (props) => {
    const { languageMap, colors } = useThemeContext();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState<string>("");

    const styleProps = { fill: colors.fill, sectionShadow: colors.sectionShadow, borderRadius, sectionPadding, sectionRadius, borderColor: FormColors.Default.border };

    const resetPassword = () => {
        console.log("resetting for " + email);
    }

    return (
        <StyledForgotPasswordForm {...styleProps}>
            <StyledTitle {...styleProps}>{languageMap.Generic.passwordForgot}</StyledTitle>
            <EmailForm value={email} setValue={setEmail} />
            <BtnCTAL onClick={resetPassword} width={"100%"}>{languageMap.Generic.passwordReset}</BtnCTAL>
            <StyledLinkRow {...styleProps}>
                <BtnLinkS onClick={() => navigate('/login')}>{languageMap.Generic.login}</BtnLinkS>
            </StyledLinkRow>
        </StyledForgotPasswordForm>
    )
};

export default ForgotPasswordForm;