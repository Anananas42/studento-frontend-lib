import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";
import { IUserStatus } from "../base-components/NavUserStatus";

interface IPrincipalNavbarProps {
    userStatus: IUserStatus;
}

const PrincipalNavbar:FC<IPrincipalNavbarProps> = (props) => {
    const { userStatus } = props;
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Principal;

    const featureTiles = {
        subjects: {title: translations.subjects, description: "", url: "Subjects", icon: "school"},
        
    };

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/"},
        
    };

    return (
        <NavbarBase userStatus={userStatus} featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default PrincipalNavbar;