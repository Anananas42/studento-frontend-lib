import { FC, useState } from "react";
import styled from "styled-components";
import DetailStep from "../../../page-components/school-management/add/class/DetailStep/DetailStep";
import StudentStep from "../../../page-components/school-management/add/class/StudentStep";
import useAddClassReducer, { AddClassReducerActionType, IAddClassReducerState } from "../../../page-components/school-management/add/class/addClassReducer";
import SubjectStep from "../../../page-components/school-management/add/class/SubjectStep/SubjectStep";
import SubjectTypeStep from "../../../page-components/school-management/add/class/SubjectTypeStep";
import ProgressLine from "../../../template-library/ProgressLine";
import { IProgressStepProps } from "../../../template-library/ProgressStep";

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

export interface IAddClassStepProps extends IProgressStepProps {
    state: IAddClassReducerState;
    dispatch: React.Dispatch<AddClassReducerActionType>;
}

const StepComponents:Array<FC<IAddClassStepProps>> = [
    DetailStep,
    StudentStep,
    SubjectTypeStep,
    SubjectStep,
];

const AdminAddClass:FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const CurrentStepComponent = StepComponents[currentStep];
    const [state, dispatch] = useAddClassReducer();

    const title = "New class";

    const stepProps = { title, currentStep, maxStep: steps.length, setCurrentStep, abortDestination: "/admin/add", subjectTypes: [{id: 5, name: "Mathematics"}], state, dispatch };

    return ( 
        <StyledAdminAddClass>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} />
        </StyledAdminAddClass>
    );
}

export default AdminAddClass;