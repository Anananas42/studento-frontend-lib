import { FC, useState } from "react";
import { StyledAdminAddContent } from ".";
import ProgressLine from "../../../template-library/ProgressLine";
import { useNavigate } from "react-router-dom";
import { NotificationType, useThemeContext } from "../../../component-library/ThemeProvider";
import BasicStep from "../../../page-components/school-management/add/employee/BasicStep";
import AddressStep from "../../../page-components/school-management/add/employee/AddressStep";
import ContactStep from "../../../page-components/school-management/add/employee/ContactStep";
import EducationStep from "../../../page-components/school-management/add/employee/EducationStep";
import { IProgressStepProps } from "../../../template-library/ProgressStep";
import useAddEmployeeReducer, { IAddEmployeeReducerState, AddEmployeeReducerActionType } from "../../../page-components/school-management/add/employee/addEmployeeReducer";

const steps:Array<string> = [
    "Basic details",
    "Address",
    "Contact",
    "Education",
];

export interface IAddEmployeeStepProps extends IProgressStepProps {
    state: IAddEmployeeReducerState;
    dispatch: React.Dispatch<AddEmployeeReducerActionType>;
}

const StepComponents:Array<FC<IAddEmployeeStepProps>> = [
    BasicStep,
    AddressStep,
    ContactStep,
    EducationStep,
];

const AdminAddEmployee:FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const CurrentStepComponent = StepComponents[currentStep];
    const [state, dispatch] = useAddEmployeeReducer();
    const navigate = useNavigate();
    const { pushSystemNotification } = useThemeContext();

    const title = "New Employee";

    const stepProps = { title, currentStep, maxStep: steps.length, setCurrentStep, abortDestination: "/admin/add", state, dispatch };

    const doneCallback = () => {
        navigate("/admin/add");
        console.log("done");
        console.log(state);
        pushSystemNotification({text: "Employee added successfully", type: NotificationType.Success}, true);
    };

    return ( 
        <StyledAdminAddContent>
            <ProgressLine steps={steps} currentStep={currentStep} />
            <CurrentStepComponent {...stepProps} doneCallback={doneCallback} />
        </StyledAdminAddContent>
    );
}

export default AdminAddEmployee;