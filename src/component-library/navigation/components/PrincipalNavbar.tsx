import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";

const PrincipalNavbar:FC = () => {
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Principal;

    const featureTiles = {
        diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "Diplomas", icon: "workspace_premium"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "Events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "SchoolTrips", icon: "luggage"},
        admissions: {title: translations.admissions, description: descTranslations.admissionsDesc, url: "Admissions", icon: "person_add"},
        timetableManagement: {title: translations.timetableManagement, description: descTranslations.timetableManagementDesc, url: "TimetableManagement", icon: "date_range"},
        employees: {title: translations.employees, description: descTranslations.employeesDesc, url: "Employees", icon: "badge"},
    };

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/"},
        substitutions: {title: translations.substitutions, icon: "edit_calendar", url: "Substitutions"},
        find: {title: translations.find, icon: "search", url: "Find"},
        create: {title: translations.create, icon: "add", url: "Create"},
        
    };

    return (
        <NavbarBase featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default PrincipalNavbar;