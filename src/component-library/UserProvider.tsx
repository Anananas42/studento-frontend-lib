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
    const [fetchedData, setFetchedData] = useState<{userStatus?: IUserStatus, isFetched: boolean}>({userStatus: undefined, isFetched: false});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userStatus = {
                    username: "Leonhard Euler",
                    school: "University of Venice",
                    userMode: UserMode.TEACHER,
                    authorizedUserModes: [UserMode.PARENT, UserMode.TEACHER, UserMode.PRINCIPAL],
                }
                setFetchedData({userStatus, isFetched: true});

            } catch (e) {
                console.log(e);
                setFetchedData({userStatus: undefined, isFetched: true});
            }
        }
        fetchUser();
        
    }, [setFetchedData]);

    return (
        <UserContext.Provider value={{ userStatus: fetchedData.userStatus }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;