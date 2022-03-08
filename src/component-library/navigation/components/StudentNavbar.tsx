import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";


const StudentNavbar:FC = () => {
    const { languageMap } = useThemeContext();
    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Student;

    const featureTiles = {
        subjects: {title: translations.subjects, description: descTranslations.subjectsDesc, url: "subjects", icon: "school"},
        class: {title: translations.class, description: descTranslations.classDesc, url: "class", icon: "groups"},
        diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "diplomas", icon: "workspace_premium"},
        homework: {title: translations.homework, description: descTranslations.homeworkDesc, url: "homework", icon: "assignment"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "school-trips", icon: "luggage"},
    };

    const navButtons = {
        home: {title: languageMap.Navigation.home, icon: "home", url: "/student"},
        timetable: {title: languageMap.Navigation.timetable, icon: "calendar_month", url: "timetable"},
        grades: {title: languageMap.Navigation.grades, icon: "star_rate", url: "grades"},
        absences: {title: languageMap.Navigation.absences, icon: "event_busy", url: "absences"},
    };

    return (
        <NavbarBase featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default StudentNavbar;