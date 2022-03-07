import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import NavbarBase from "../base-components/NavbarBase";
import { IUserStatus } from "../base-components/NavUserStatus";

interface IParentNavbarProps {
    userStatus: IUserStatus;
}

const ParentNavbar:FC<IParentNavbarProps> = (props) => {
    const { userStatus } = props;
    const { languageMap } = useThemeContext();

    const translations = languageMap.Navigation;
    const descTranslations = languageMap.Navigation.Parent;

    const featureTiles = {
        subjects: {title: translations.subjects, description: descTranslations.subjectsDesc, url: "Subjects", icon: "school"},
        timetable: {title: languageMap.Navigation.timetable, description: descTranslations.timetableDesc, url: "Timetable", icon: "calendar_month"},
        diplomas: {title: translations.diplomas, description: descTranslations.diplomasDesc, url: "Diplomas", icon: "workspace_premium"},
        homework: {title: translations.homework, description: descTranslations.homeworkDesc, url: "Homework", icon: "assignment"},
        events: {title: translations.events, description: descTranslations.eventsDesc, url: "Events", icon: "celebration"},
        schoolTrips: {title: translations.schoolTrips, description: descTranslations.schoolTripsDesc, url: "SchoolTrips", icon: "luggage"},
    };

    const navButtons = {
        home: {title: languageMap.Navigation.home, icon: "home", url: "/"},
        parentMeetings: {title: languageMap.Navigation.parentMeetings, icon: "calendar_month", url: "ParentMeetings"},
        grades: {title: languageMap.Navigation.grades, icon: "star_rate", url: "Grades"},
        absences: {title: languageMap.Navigation.absences, icon: "event_busy", url: "Absences"},
        class: {title: translations.class, url: "Class", icon: "groups"},
    };

    return (
        <NavbarBase userStatus={userStatus} featureTiles={featureTiles} navButtons={navButtons} />
    )
}

export default ParentNavbar;