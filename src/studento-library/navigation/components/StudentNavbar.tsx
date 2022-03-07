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
    const navTranslations = languageMap.Navigation.Student;

    const featureTiles = {
        subjects: {title: navTranslations.subjects, description: navTranslations.subjectsDesc, url: "Subjects", icon: "school"},
        class: {title: navTranslations.class, description: navTranslations.classDesc, url: "Class", icon: "groups"},
        diplomas: {title: navTranslations.diplomas, description: navTranslations.diplomasDesc, url: "Diplomas", icon: "workspace_premium"},
        homework: {title: navTranslations.homework, description: navTranslations.homeworkDesc, url: "Homework", icon: "assignment"},
        events: {title: navTranslations.events, description: navTranslations.eventsDesc, url: "events", icon: "celebration"},
        schoolTrips: {title: navTranslations.schoolTrips, description: navTranslations.schoolTripsDesc, url: "school_trips", icon: "luggage"},
    };

    const navButtons = {
        home: {title: languageMap.Navigation.home, icon: "home", url: "home"},
        timetable: {title: languageMap.Navigation.timetable, icon: "calendar_month", url: "timetable"},
        grades: {title: languageMap.Navigation.grades, icon: "star_rate", url: "grades"},
        absences: {title: languageMap.Navigation.absences, icon: "event_busy", url: "absences"},
    };

    return (
        <NavbarBase userStatus={userStatus} featureTiles={featureTiles} navButtons={navButtons}>

        </NavbarBase>
    )
}

export default StudentNavbar;