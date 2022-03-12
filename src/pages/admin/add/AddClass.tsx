import { FC, useState } from "react";
import styled from "styled-components";
import { BtnConfirmL, BtnPrimaryL, BtnSecondaryL, BtnTertiaryL } from "../../../component-library/buttons/components";
import DetailStep from "../../../template-library/school-management/add/class/DetailStep";
import StudentStep from "../../../template-library/school-management/add/class/StudentStep";
import SubjectStep from "../../../template-library/school-management/add/class/SubjectStep";
import SubjectTypeStep from "../../../template-library/school-management/add/class/SubjectTypeStep";
import ProgressLine from "../../../template-library/school-management/add/ProgressLine";

const StyledAdminAddClass = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1400px;
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

const steps:Array<string> = [
    "Details",
    "Students",
    "Subject types",
    "Subjects",
];

const StepComponents:Array<FC<any>> = [
    DetailStep,
    StudentStep,
    SubjectTypeStep,
    SubjectStep,
];

const AdminAddClass:FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const CurrentStepComponent = StepComponents[currentStep];

    const title = "New class";

    const ButtonRow = <StyledButtonRow>
        {currentStep > 0 && <BtnTertiaryL icon={"arrow_back"} onClick={() => setCurrentStep((currentStep - 1) % steps.length)}>Back</BtnTertiaryL>}
        {currentStep < steps.length - 1 && <BtnPrimaryL icon={"arrow_forward"} isAfter={true} onClick={() => setCurrentStep((currentStep + 1) % steps.length)}>Next</BtnPrimaryL>}
        {currentStep === steps.length - 1 && <BtnConfirmL icon={"done"} onClick={() => console.log("done")}>Finish</BtnConfirmL>}
    </StyledButtonRow>;

    const stepProps = { title, ButtonRow };

    return ( 
        <StyledAdminAddClass>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} />
        </StyledAdminAddClass>
    );
}

export default AdminAddClass;