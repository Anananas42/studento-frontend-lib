import { FC, useState } from "react";
import styled from "styled-components";
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

    const stepProps = { title };

    return ( 
        <StyledAdminAddClass>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} />
        </StyledAdminAddClass>
    );
}

export default AdminAddClass;