import { FC, useState } from "react";
import DetailStep from "../../../page-components/school-management/add/class/DetailStep/DetailStep";
import StudentStep from "../../../page-components/school-management/add/class/StudentStep/StudentStep";
import useAddClassReducer, { AddClassReducerActionType, IAddClassReducerState } from "../../../page-components/school-management/add/class/addClassReducer";
import SubjectStep from "../../../page-components/school-management/add/class/SubjectStep/SubjectStep";
import SubjectTypeStep from "../../../page-components/school-management/add/class/SubjectTypeStep";
import ProgressLine from "../../../template-library/ProgressLine";
import { IProgressStepProps } from "../../../template-library/ProgressStep";
import { useNavigate } from "react-router-dom";
import { NotificationType, useThemeContext } from "../../../component-library/ThemeProvider";
import { StyledAdminAddContent } from ".";

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
    const navigate = useNavigate();
    const { pushSystemNotification } = useThemeContext();

    const title = "New class";

    const stepProps = { title, currentStep, maxStep: steps.length, setCurrentStep, abortDestination: "/admin/add", subjectTypes: [{id: 5, name: "Mathematics"}], state, dispatch };

    const doneCallback = () => {
        navigate("/admin/add");
        console.log("done");
        console.log(state);
        pushSystemNotification({text: "Class added successfully", type: NotificationType.Success}, true);
    };

    return ( 
        <StyledAdminAddContent>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} doneCallback={doneCallback} />
        </StyledAdminAddContent>
    );
}

export default AdminAddClass;