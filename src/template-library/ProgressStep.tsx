import { FC, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnCloseL, BtnConfirmL, BtnPrimaryL, BtnTertiaryL } from "../component-library/buttons/components";
import PopupLeaveProgress from "../component-library/popups/components/PopupLeaveProgress";
import StyledSection from "../component-library/styles/StyledSection";
import StyledSectionTitle from "../component-library/styles/StyledSectionTitle";

const StyledButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
    padding-top: 16px;

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

    const [isAbortPopup, setIsAbortPopup] = useState<boolean>(false);

    return (
        <StyledSection>
            <BtnCloseL onClick={() => setIsAbortPopup(true)} />
            {isAbortPopup && <PopupLeaveProgress event={() => navigate(abortDestination)} isOpen={isAbortPopup} setIsOpen={setIsAbortPopup}>
                    All your progress will be lost. <br/> Do you really want to leave?
                </PopupLeaveProgress>}
            <StyledSectionTitle>
                {title}
            </StyledSectionTitle>
                {props.children}
            <StyledButtonRow>
                {currentStep > 0 && <BtnTertiaryL icon={"arrow_back"} onClick={() => setCurrentStep((currentStep - 1) % maxStep)}>Back</BtnTertiaryL>}
                {currentStep < maxStep - 1 && <BtnPrimaryL icon={"arrow_forward"} isAfter={true} onClick={() => setCurrentStep((currentStep + 1) % maxStep)}>Next</BtnPrimaryL>}
                {currentStep === maxStep - 1 && <BtnConfirmL icon={"done"} onClick={() => console.log("done")}>Done</BtnConfirmL>}
            </StyledButtonRow>
        </StyledSection>
    );
}

export default ProgressStep;