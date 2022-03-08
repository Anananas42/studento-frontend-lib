import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";

const DefaultNavbar:FC = () => {
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Default;

    const featureTiles = {
        
    };

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/"},
                
    };

    return (
        <NavbarBase featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default DefaultNavbar;