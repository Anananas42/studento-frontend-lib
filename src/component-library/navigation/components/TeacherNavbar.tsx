import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";

interface ITeacherNavbarProps {
    className?: string;
}

const TeacherNavbar:FC<ITeacherNavbarProps> = (props) => {
    const { className } = props;
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Teacher;

    const featureTiles = {
        subjects: {title: translations.subjects, description: descTranslations.subjectsDesc, url: "subjects", icon: "school"},
        homework: {title: translations.homework, description: descTranslations.homeworkDesc, url: "homework", icon: "assignment"},
        ...(className ? {class: {title: translations.class, description: descTranslations.classDesc, icon: "groups", url: "class"}} : {}),
        ...(className ? {diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "diplomas", icon: "workspace_premium"}} : {}),
        parentMeetings: {title: translations.parentMeetings, description: descTranslations.parentMeetingsDesc, url: "parent-meetings", icon: "meeting_room"},
        find: {title: translations.find, description: descTranslations.findDesc, url: "find", icon: "search"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "school-trips", icon: "luggage"},
    };

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/teacher"},
        timetable: {title: translations.timetable, icon: "calendar_month", url: "timetable"},
        substitutions: {title: translations.substitutions, icon: "edit_calendar", url: "substitutions"},
        grades: {title: translations.grades, icon: "star_rate", url: "grades"},
    };

    return (
        <NavbarBase featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default TeacherNavbar;