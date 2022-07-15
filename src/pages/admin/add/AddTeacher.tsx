import { FC, useState } from "react";
import { StyledAdminAddContent } from ".";
import ProgressLine from "../../../template-library/ProgressLine";
import { useNavigate } from "react-router-dom";
import { NotificationType, useThemeContext } from "../../../component-library/ThemeProvider";
import BasicStep from "../../../page-components/school-management/add/teacher/BasicStep";
import AddressStep from "../../../page-components/school-management/add/teacher/AddressStep";
import ContactStep from "../../../page-components/school-management/add/teacher/ContactStep";
import EducationStep from "../../../page-components/school-management/add/teacher/EducationStep";
import { IProgressStepProps } from "../../../template-library/ProgressStep";
import useAddTeacherReducer, { IAddTeacherReducerState, AddTeacherReducerActionType } from "../../../page-components/school-management/add/teacher/addTeacherReducer";

const steps:Array<string> = [
    "Basic details",
    "Address",
    "Contact",
    "Education",
];

export interface IAddTeacherStepProps extends IProgressStepProps {
    state: IAddTeacherReducerState;
    dispatch: React.Dispatch<AddTeacherReducerActionType>;
}

const StepComponents:Array<FC<IAddTeacherStepProps>> = [
    BasicStep,
    AddressStep,
    ContactStep,
    EducationStep,
];

const AdminAddTeacher:FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const CurrentStepComponent = StepComponents[currentStep];
    const [state, dispatch] = useAddTeacherReducer();
    const navigate = useNavigate();
    const { pushSystemNotification } = useThemeContext();

    const title = "New Teacher";

    const stepProps = { title, currentStep, maxStep: steps.length, setCurrentStep, abortDestination: "/admin/add", state, dispatch };

    const doneCallback = () => {
        navigate("/admin/add");
        console.log("done");
        console.log(state);
        pushSystemNotification({text: "Teacher added successfully", type: NotificationType.Success}, true);
    };

    return ( 
        <StyledAdminAddContent>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} doneCallback={doneCallback} />
        </StyledAdminAddContent>
    );
}

export default AdminAddTeacher;