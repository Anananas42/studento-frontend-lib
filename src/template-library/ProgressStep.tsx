import { FC, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnCloseL, BtnConfirmL, BtnPrimaryL, BtnTertiaryL } from "../component-library/buttons/components";
import PopupLeaveProgress from "../component-library/popups/components/PopupLeaveProgress";
import { borderRadius, sectionPadding, sectionRadius, useThemeContext } from "../component-library/ThemeProvider";

interface IStyleProps {
    fill: string;
    sectionPadding: string;
    sectionShadow: string;
    sectionRadius: string;
    borderRadius: string;
}

const StyledProgressStep = styled.div<IStyleProps>`
    position: relative;
    color: ${props => props.fill};
    background-color: #fff;
    box-shadow: ${props => props.sectionShadow};
    border-radius: ${props => props.sectionRadius};
    padding: ${props => props.sectionPadding};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 8px;
`;

const StyledTitle = styled.div<IStyleProps>`
    font-size: 30px;
    color: ${props => props.fill};
    padding: 0 48px 16px 48px;
    text-align: center;
`;

const StyledButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px;

    > div:only-child {
        margin-left: auto;
    }
`;

export interface IProgressStepProps {
    title: string;
    currentStep: number;
    maxStep: number;
    setCurrentStep: React.Dispatch<SetStateAction<number>>;
    abortDestination: string;

}

const ProgressStep:FC<IProgressStepProps> = (props) => {
    const { title, currentStep, maxStep, setCurrentStep, abortDestination } = props;
    const navigate = useNavigate();
    const { colors } = useThemeContext();

    const [isAbortPopup, setIsAbortPopup] = useState<boolean>(false);

    const styleProps = {fill: colors.fill, sectionPadding, sectionRadius, sectionShadow: colors.sectionShadow, borderRadius};

    return (
        <StyledProgressStep {...styleProps}>
            <BtnCloseL onClick={() => setIsAbortPopup(true)} />
            {isAbortPopup && <PopupLeaveProgress event={() => navigate(abortDestination)} isOpen={isAbortPopup} setIsOpen={setIsAbortPopup}>
                    All your progress will be lost. <br/> Do you really want to leave?
                </PopupLeaveProgress>}
            <StyledTitle {...styleProps}>
                {title}
            </StyledTitle>
                {props.children}
            <StyledButtonRow>
                {currentStep > 0 && <BtnTertiaryL icon={"arrow_back"} onClick={() => setCurrentStep((currentStep - 1) % maxStep)}>Back</BtnTertiaryL>}
                {currentStep < maxStep - 1 && <BtnPrimaryL icon={"arrow_forward"} isAfter={true} onClick={() => setCurrentStep((currentStep + 1) % maxStep)}>Next</BtnPrimaryL>}
                {currentStep === maxStep - 1 && <BtnConfirmL icon={"done"} onClick={() => console.log("done")}>Done</BtnConfirmL>}
            </StyledButtonRow>
        </StyledProgressStep>
    );
}

export default ProgressStep;