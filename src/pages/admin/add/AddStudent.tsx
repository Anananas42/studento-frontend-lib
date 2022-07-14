import { FC, useState } from "react";
import { StyledAdminAddContent } from ".";
import ProgressLine from "../../../template-library/ProgressLine";
import { useNavigate } from "react-router-dom";
import { NotificationType, useThemeContext } from "../../../component-library/ThemeProvider";
import BasicStep from "../../../page-components/school-management/add/student/BasicStep";
import AddressStep from "../../../page-components/school-management/add/student/AddressStep";
import ContactStep from "../../../page-components/school-management/add/student/ContactStep";
import ParentStep from "../../../page-components/school-management/add/student/ParentStep";
import { IProgressStepProps } from "../../../template-library/ProgressStep";
import useAddStudentReducer, { IAddStudentReducerState, AddStudentReducerActionType } from "../../../page-components/school-management/add/student/addStudentReducer";

const steps:Array<string> = [
    "Basic details",
    "Address",
    "Contact",
    "Parent",
];

export interface IAddStudentStepProps extends IProgressStepProps {
    state: IAddStudentReducerState;
    dispatch: React.Dispatch<AddStudentReducerActionType>;
}

const StepComponents:Array<FC<IAddStudentStepProps>> = [
    BasicStep,
    AddressStep,
    ContactStep,
    ParentStep,
];

const AdminAddStudent:FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const CurrentStepComponent = StepComponents[currentStep];
    const [state, dispatch] = useAddStudentReducer();
    const navigate = useNavigate();
    const { pushSystemNotification } = useThemeContext();

    const title = "New student";

    const stepProps = { title, currentStep, maxStep: steps.length, setCurrentStep, abortDestination: "/admin/add", state, dispatch };

    const doneCallback = () => {
        navigate("/admin/add");
        console.log("done");
        console.log(state);
        pushSystemNotification({text: "Student added successfully", type: NotificationType.Success}, true);
    };

    return ( 
        <StyledAdminAddContent>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} doneCallback={doneCallback} />
        </StyledAdminAddContent>
    );
}

export default AdminAddStudent;