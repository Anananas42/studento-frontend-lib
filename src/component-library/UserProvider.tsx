import { useState, createContext, FC, useContext, ReactNode, useCallback } from 'react';

export enum UserMode {
    ADMIN = "admin",
    PARENT = "parent",
    PRINCIPAL = "principal",
    STUDENT = "student",
    TEACHER = "teacher",
}

export interface IUserStatus {
    username: string;
    school: string;
    userMode: UserMode;
    authorizedUserModes: Array<UserMode>;
}

interface IUserContextValue {
    userStatus?: IUserStatus;
    checkAccessToken: () => boolean;
    login: (username: string, password: string) => boolean;
    logout: () => boolean;
    setUserMode: (mode: UserMode) => void;
}

const UserContext = createContext<IUserContextValue | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw Error("<UserContext.Provider> is missing. Wrap your App component to provide the context.");
    }

    return context;
}

interface IProviderProps {
    chilren?: ReactNode;
}

const UserProvider:FC<IProviderProps> = (props) => {
    const [userStatus, setUserStatus] = useState<IUserStatus>();

    const setUserMode = (mode: UserMode) => {
        if (!userStatus) return;
        if (!userStatus.authorizedUserModes.includes(mode)) throw new Error("[UserProvider] Trying to set unauthorized user mode.");

        setUserStatus({...userStatus, userMode: mode});
    }

    const checkAccessToken = useCallback(() => {
        /*setUserStatus({
            username: "Leonhard Euler",
            school: "University of Venice",
            userMode: UserMode.TEACHER,
            authorizedUserModes: [UserMode.PARENT, UserMode.TEACHER, UserMode.PRINCIPAL],
        });*/
        
        return false;
    }, [])

    const login = useCallback((username: string, password: string) => {
        setUserStatus({
            username: "Leonhard Euler",
            school: "University of Venice",
            userMode: UserMode.TEACHER,
            authorizedUserModes: [UserMode.PARENT, UserMode.TEACHER, UserMode.PRINCIPAL, UserMode.ADMIN, UserMode.STUDENT],
        });

        return true;
    }, [setUserStatus]);

    const logout = useCallback(() => {
        setUserStatus(undefined);

        return true;
    }, [setUserStatus]);

    return (
        <UserContext.Provider value={{ userStatus: userStatus, checkAccessToken, login, logout, setUserMode }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;