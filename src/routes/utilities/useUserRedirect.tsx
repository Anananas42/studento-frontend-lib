import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserMode, useUserContext } from "../../component-library/UserProvider";

export const useUserRedirect = (mode: UserMode) => {
    const { userStatus } = useUserContext();
    const navigation = useRef(useNavigate());

    useEffect(() => {
        if (!userStatus) {
            navigation.current("/");
        } else if (userStatus.userMode !== mode) {
            navigation.current("/" + userStatus.userMode);
        }
    }, [userStatus, mode]);
}

export default useUserRedirect;