import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";

const AdminNavbar:FC = () => {
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Admin;

    const featureTiles = {
        substitutions: {title: translations.substitutions, description: descTranslations.substitutionDesc, url: "substitutions", icon: "edit_calendar"},
        diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "diplomas", icon: "workspace_premium"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "school-trips", icon: "luggage"},
        admissions: {title: translations.admissions, description: descTranslations.admissionsDesc, url: "admissions", icon: "person_add"},
        timetableManagement: {title: translations.timetableManagement, description: descTranslations.timetableManagementDesc, url: "timetable-management", icon: "date_range"},
    };

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/admin"},
        find: {title: translations.find, icon: "search", url: "find"},
        create: {title: translations.create, icon: "add", url: "create"},
        
    };

    return (
        <NavbarBase featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default AdminNavbar;