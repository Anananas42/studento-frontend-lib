import { useState, createContext, FC, useContext, ReactNode, useEffect } from 'react';

export enum UserMode {
    ADMIN = "student",
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
    const [userStatus, setUserStatus] = useState<IUserStatus>({
        username: "Leonhard Euler",
        school: "University of Venice",
        userMode: UserMode.TEACHER,
        authorizedUserModes: [UserMode.PARENT, UserMode.TEACHER, UserMode.PRINCIPAL],
    });

    const setUserMode = (mode: UserMode) => {
        if (!userStatus) return;
        if (!userStatus.authorizedUserModes.includes(mode)) throw new Error("[UserProvider] Trying to set unauthorized user mode.");

        setUserStatus({...userStatus, userMode: mode});
    }

    return (
        <UserContext.Provider value={{ userStatus: userStatus, setUserMode }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;