import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";

const AdminNavbar:FC = () => {
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Admin;

    const featureTiles = {
        substitutions: {title: translations.substitutions, description: descTranslations.substitutionDesc, url: "Substitutions", icon: "edit_calendar"},
        diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "Diplomas", icon: "workspace_premium"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "Events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "SchoolTrips", icon: "luggage"},
        admissions: {title: translations.admissions, description: descTranslations.admissionsDesc, url: "Admissions", icon: "person_add"},
        timetableManagement: {title: translations.timetableManagement, description: descTranslations.timetableManagementDesc, url: "TimetableManagement", icon: "date_range"},
    };

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/"},
        find: {title: translations.find, icon: "search", url: "Find"},
        create: {title: translations.create, icon: "add", url: "Create"},
        
    };

    return (
        <NavbarBase featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default AdminNavbar;