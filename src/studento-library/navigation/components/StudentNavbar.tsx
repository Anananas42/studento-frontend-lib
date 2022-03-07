import { FC } from "react";
import NavbarBase from "../base-components/NavbarBase";
import { IUserStatus } from "../base-components/NavUserStatus";

interface IStudentNavbarProps {
    userStatus: IUserStatus;
}

const StudentNavbar:FC<IStudentNavbarProps> = (props) => {
    const { userStatus } = props;
    const featureTiles = {
        first: {title: "First feature", description: "Best feature ever", url: "first", icon: "school"},
    };

    const navButtons = {
        home: {title: "Home", icon: "home", url: "home"},
        timetable: {title: "Timetable", icon: "calendar_month", url: "timetable"},
        grades: {title: "Grades", icon: "star_rate", url: "grades"},
        absences: {title: "Absences", icon: "event_busy", url: "absences"},
    };

    return (
        <NavbarBase userStatus={userStatus} featureTiles={featureTiles} navButtons={navButtons}>

        </NavbarBase>
    )
}

export default StudentNavbar;