import { FC, SetStateAction } from "react";
import styled from "styled-components";
import { BtnConfirmL, BtnPrimaryL, BtnTertiaryL } from "../component-library/buttons/components";
import { useThemeContext } from "../component-library/ThemeProvider";

interface IStyleProps {
    fill: string;
    sectionPadding: string;
    sectionShadow: string;
    sectionRadius: string;
    borderRadius: string;
}

const StyledProgressStep = styled.div<IStyleProps>`
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
    font-size: 32px;
    color: ${props => props.fill};
    padding-bottom: 16px;
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
}

const ProgressStep:FC<IProgressStepProps> = (props) => {
    const { title, currentStep, maxStep, setCurrentStep } = props;
    const { colors, borderRadius, sectionPadding, sectionRadius } = useThemeContext();

    const styleProps = {fill: colors.fill, sectionPadding, sectionRadius, sectionShadow: colors.sectionShadow, borderRadius};

    return (
        <StyledProgressStep {...styleProps}>
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