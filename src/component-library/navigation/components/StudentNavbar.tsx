import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";
import { IUserStatus } from "../base-components/NavUserStatus";

interface IStudentNavbarProps {
    userStatus: IUserStatus;
}

const StudentNavbar:FC<IStudentNavbarProps> = (props) => {
    const { userStatus } = props;
    const { languageMap } = useThemeContext();
    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Student;

    const featureTiles = {
        subjects: {title: translations.subjects, description: descTranslations.subjectsDesc, url: "Subjects", icon: "school"},
        class: {title: translations.class, description: descTranslations.classDesc, url: "Class", icon: "groups"},
        diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "Diplomas", icon: "workspace_premium"},
        homework: {title: translations.homework, description: descTranslations.homeworkDesc, url: "Homework", icon: "assignment"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "Events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "SchoolTrips", icon: "luggage"},
    };

    const navButtons = {
        home: {title: languageMap.Navigation.home, icon: "home", url: "/"},
        timetable: {title: languageMap.Navigation.timetable, icon: "calendar_month", url: "Timetable"},
        grades: {title: languageMap.Navigation.grades, icon: "star_rate", url: "Grades"},
        absences: {title: languageMap.Navigation.absences, icon: "event_busy", url: "Absences"},
    };

    return (
        <NavbarBase userStatus={userStatus} featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default StudentNavbar;