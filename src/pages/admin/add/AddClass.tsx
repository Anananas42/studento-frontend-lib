import { FC, useState } from "react";
import styled from "styled-components";
import { BtnConfirmL, BtnPrimaryL, BtnTertiaryL } from "../../../component-library/buttons/components";
import DetailStep from "../../../page-components/school-management/add/class/DetailStep";
import StudentStep from "../../../page-components/school-management/add/class/StudentStep";
import SubjectStep from "../../../page-components/school-management/add/class/SubjectStep";
import SubjectTypeStep from "../../../page-components/school-management/add/class/SubjectTypeStep";
import ProgressLine from "../../../template-library/ProgressLine";

const StyledAdminAddClass = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1400px;
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

    const stepProps = { title, currentStep, maxStep: steps.length, setCurrentStep };

    return ( 
        <StyledAdminAddClass>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} />
        </StyledAdminAddClass>
    );
}

export default AdminAddClass;