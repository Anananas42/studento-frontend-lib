import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";

const DefaultNavbar:FC = () => {
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/"},
        contact: {title: translations.contact, icon: "call", url: "/contact"},
        documentation: {title: translations.documentation, icon: "help", url: "/documentation"},
                
    };

    return (
        <NavbarBase navButtons={navButtons} />
    )
}

export default DefaultNavbar;