import { FC, useState } from "react";
import DetailStep from "../../../page-components/school-management/add/subject/DetailStep/DetailStep";
import SubjectStep from "../../../page-components/school-management/add/subject/SubjectStep/SubjectStep";
import ProgressLine from "../../../template-library/ProgressLine";
import { IProgressStepProps } from "../../../template-library/ProgressStep";
import { useNavigate } from "react-router-dom";
import { NotificationType, useThemeContext } from "../../../component-library/ThemeProvider";
import { StyledAdminAddContent } from ".";
import useAddSubjectReducer, { AddSubjectReducerActionType, IAddSubjectReducerState } from "../../../page-components/school-management/add/subject/addSubjectReducer";

const steps:Array<string> = [
    "Details",
    "Disciplines and groups",
];

export interface IAddSubjectStepProps extends IProgressStepProps {
    state: IAddSubjectReducerState;
    dispatch: React.Dispatch<AddSubjectReducerActionType>;
}

const StepComponents:Array<FC<IAddSubjectStepProps>> = [
    DetailStep,
    SubjectStep,
];

const AdminAddSubject:FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const CurrentStepComponent = StepComponents[currentStep];
    const [state, dispatch] = useAddSubjectReducer();
    const navigate = useNavigate();
    const { pushSystemNotification } = useThemeContext();

    const title = "New subject";

    const stepProps = { title, currentStep, maxStep: steps.length, setCurrentStep, abortDestination: "/admin/add", subjectTypes: [{id: 5, name: "Mathematics"}], state, dispatch };

    const doneCallback = () => {
        navigate("/admin/add");
        console.log("done");
        console.log(state);
        pushSystemNotification({text: "Subject added successfully", type: NotificationType.Success}, true);
    };

    return ( 
        <StyledAdminAddContent>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} doneCallback={doneCallback} />
        </StyledAdminAddContent>
    );
}

export default AdminAddSubject;