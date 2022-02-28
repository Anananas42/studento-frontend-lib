import { FC } from "react";
import { BtnDangerL } from "./buttons/components/BtnDanger";
import { BtnPrimaryL } from "./buttons/components/BtnPrimary";
import { useThemeContext } from "./ThemeProvider";
import { NotificationType } from "./utilities/SystemNotification";

const TestComponent:FC = (props) => {
    const { pushSystemNotification } = useThemeContext();

    return (
        <>
            <BtnPrimaryL onClick={() => pushSystemNotification({type: NotificationType.Success, text: "Testing this shit"}, false)}>TEST BUTTON</BtnPrimaryL>
            <BtnDangerL onClick={() => pushSystemNotification({type: NotificationType.Neutral, text: "Cleared all and displayed this."}, true)}>TEST BUTTON</BtnDangerL>
        </>
    )
}

export default TestComponent;