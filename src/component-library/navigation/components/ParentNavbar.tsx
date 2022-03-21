import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";

const ParentNavbar:FC = () => {
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Parent;

    const featureTiles = {
        subjects: {title: translations.subjects, description: descTranslations.subjectsDesc, url: "subjects", icon: "school"},
        class: {title: translations.class, description: translations.Parent.classDesc, url: "class", icon: "groups"},
        timetable: {title: translations.timetable, description: descTranslations.timetableDesc, url: "timetable", icon: "calendar_month"},
        diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "diplomas", icon: "workspace_premium"},
        homework: {title: translations.homework, description: descTranslations.homeworkDesc, url: "homework", icon: "assignment"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "school-trips", icon: "luggage"},
    };

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/parent"},
        parentMeetings: {title: translations.parentMeetings, icon: "meeting_room", url: "parent-meetings"},
        grades: {title: translations.grades, icon: "star_rate", url: "grades"},
        absences: {title: translations.absences, icon: "event_busy", url: "absences"},
    };

    return (
        <NavbarBase featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default ParentNavbar;