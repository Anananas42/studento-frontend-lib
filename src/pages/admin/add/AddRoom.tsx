import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledAdminAddContent } from ".";
import { useThemeContext, NotificationType } from "../../../component-library/ThemeProvider";
import useAddRoomReducer, { IAddRoomReducerState, AddRoomReducerActionType } from "../../../page-components/school-management/add/room/addRoomReducer";
import RoomStep from "../../../page-components/school-management/add/room/RoomStep";
import { IProgressStepProps } from "../../../template-library/ProgressStep";

const steps:Array<string> = [
    "Details",
];

export interface IAddRoomStepProps extends IProgressStepProps {
    state: IAddRoomReducerState;
    dispatch: React.Dispatch<AddRoomReducerActionType>;
}

const StepComponents:Array<FC<IAddRoomStepProps>> = [
    RoomStep
];

const AdminAddRoom:FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const CurrentStepComponent = StepComponents[currentStep];
    const [state, dispatch] = useAddRoomReducer();
    const navigate = useNavigate();
    const { pushSystemNotification } = useThemeContext();

    const title = "New Room";

    const stepProps = { title, currentStep, maxStep: steps.length, setCurrentStep, abortDestination: "/admin/add", state, dispatch };

    const doneCallback = () => {
        navigate("/admin/add");
        console.log("done");
        console.log(state);
        pushSystemNotification({text: "Room added successfully", type: NotificationType.Success}, true);
    };

    return ( 
        <StyledAdminAddContent>
            <CurrentStepComponent {...stepProps} doneCallback={doneCallback} />
        </StyledAdminAddContent>
    );
}

export default AdminAddRoom;