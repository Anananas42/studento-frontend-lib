import { FC } from "react";
import { BtnCTAL, BtnCTAM } from "./buttons/components/BtnCTA";
import { useThemeContext } from "./ThemeProvider";
import { NotificationType } from "./utilities/SystemNotification";


const TestComponent:FC = () => {
    const { pushSystemNotification, clearSystemNotifications } = useThemeContext();

    const addOne = () => {
      pushSystemNotification({text: "Wow this is something!", type: NotificationType.Error });
    }

    const addOne2 = () => {
        pushSystemNotification({text: "Uga!", type: NotificationType.Success });
      }
  
    const clearAll = () => {
      clearSystemNotifications();
    }

    return (
        <>
            <BtnCTAL icon={"login"} isAfter={false} onClick={() => addOne()}>LOGIN</BtnCTAL>
            <BtnCTAL icon={"login"} isAfter={false} onClick={() => addOne2()}>uga</BtnCTAL>
            <BtnCTAM icon={"login"} isAfter={false} onClick={() => clearAll()}>LOGIN</BtnCTAM>
        </>
    )
}

export default TestComponent;