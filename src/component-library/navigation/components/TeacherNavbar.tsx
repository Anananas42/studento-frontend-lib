import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";
import { IUserStatus } from "../base-components/NavUserStatus";

interface ITeacherNavbarProps {
    userStatus: IUserStatus;
    className?: string;
}

const TeacherNavbar:FC<ITeacherNavbarProps> = (props) => {
    const { userStatus, className } = props;
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Teacher;

    const featureTiles = {
        subjects: {title: translations.subjects, description: descTranslations.subjectsDesc, url: "Subjects", icon: "school"},
        homework: {title: translations.homework, description: descTranslations.homeworkDesc, url: "Homework", icon: "assignment"},
        ...(className ? {diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "Diplomas", icon: "workspace_premium"}} : {}),
        parentMeetings: {title: translations.parentMeetings, description: descTranslations.parentMeetingsDesc, url: "ParentMeetings", icon: "meeting_room"},
        find: {title: translations.find, description: descTranslations.findDesc, url: "Find", icon: "search"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "Events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "SchoolTrips", icon: "luggage"},
    };

    const navButtons = {
        home: {title: translations.home, icon: "home", url: "/"},
        timetable: {title: translations.timetable, icon: "calendar_month", url: "Timetable"},
        substitutions: {title: translations.substitutions, icon: "edit_calendar", url: "Substitutions"},
        grades: {title: translations.grades, icon: "star_rate", url: "Grades"},
        ...(className ? {class: {title: translations.class, icon: "groups", url: "Class"}} : {}),
    };

    return (
        <NavbarBase userStatus={userStatus} featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default TeacherNavbar;