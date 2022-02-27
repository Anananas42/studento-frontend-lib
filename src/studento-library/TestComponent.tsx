import { FC } from "react";
import { BtnPrimaryL } from "./buttons/components/BtnPrimary";
import { useThemeContext } from "./ThemeProvider";
import { NotificationType } from "./utilities/SystemNotification";

const TestComponent:FC = (props) => {
    const { pushSystemNotification } = useThemeContext();

    return (
        <>
            <BtnPrimaryL onClick={() => pushSystemNotification({type: NotificationType.Success, text: "Testing this shit"})}>TEST BUTTON</BtnPrimaryL>
        </>
    )
}

export default TestComponent;