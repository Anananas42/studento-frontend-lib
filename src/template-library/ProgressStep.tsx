import { FC, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnCloseL, BtnConfirmL, BtnPrimaryL, BtnTertiaryL } from "../component-library/buttons/components";
import PopupLeaveProgress from "../component-library/popups/components/PopupLeaveProgress";
import StyledSection from "../component-library/styles/StyledSection";
import StyledSectionTitle from "../component-library/styles/StyledSectionTitle";

interface IStyleProps {
    isStretched?: boolean;
}

const StyledButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex: 0 0 auto;
    gap: 16px;
    padding-top: 16px;

    > div:only-child {
        margin-left: auto;
    }
`;

const StyledContent = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: ${props => props.isStretched ? "calc(100% - 127px)" : "fit-content"};
    max-height: calc(100% - 127px);
    flex: 0 1 auto;
`;

export interface IProgressStepProps {
    title: string;
    currentStep: number;
    maxStep: number;
    setCurrentStep: React.Dispatch<SetStateAction<number>>;
    abortDestination: string;
    isStretched?: boolean;
    nextCallback?: () => boolean;
    prevCallback?: () => boolean;
    doneCallback?: () => void;
}

const ProgressStep:FC<IProgressStepProps> = (props) => {
    const { title, currentStep, maxStep, setCurrentStep, abortDestination, isStretched } = props;
    const navigate = useNavigate();
    const nextCallback = props.nextCallback || (() => true);
    const prevCallback = props.prevCallback || (() => true);
    const doneCallback = props.doneCallback || (() => {});

    const [isAbortPopup, setIsAbortPopup] = useState<boolean>(false);

    return (
        <StyledSection isStretched={isStretched}>
            <BtnCloseL onClick={() => setIsAbortPopup(true)} />
            {isAbortPopup && <PopupLeaveProgress event={() => navigate(abortDestination)} isOpen={isAbortPopup} setIsOpen={setIsAbortPopup}>
                    All your progress will be lost. <br/> Do you really want to leave?
                </PopupLeaveProgress>}
            <StyledSectionTitle>
                {title}
            </StyledSectionTitle>
            <StyledContent isStretched={isStretched}>
                {props.children}
            </StyledContent>
            <StyledButtonRow>
                {currentStep > 0 && <BtnTertiaryL icon={"arrow_back"} onClick={() => {if(prevCallback()){setCurrentStep(currentStep - 1)}}}>Back</BtnTertiaryL>}
                {currentStep < maxStep - 1 && <BtnPrimaryL icon={"arrow_forward"} isAfter={true} onClick={() => {if(nextCallback()){setCurrentStep(currentStep + 1)}}}>Next</BtnPrimaryL>}
                {currentStep === maxStep - 1 && <BtnConfirmL icon={"done"} onClick={() => doneCallback()}>Done</BtnConfirmL>}
            </StyledButtonRow>
        </StyledSection>
    );
}

export default ProgressStep;