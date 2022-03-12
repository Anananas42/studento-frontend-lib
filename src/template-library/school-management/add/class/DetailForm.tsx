import { FC, useState } from "react";
import styled from "styled-components";
import { DropdownFormBase, DropdownSearchFormBase, TextFormBase } from "../../../../component-library/forms/base-components";

const StyledDetailForm = styled.div`
    width: 480px;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0px;
`;

const DetailForm:FC = () => {
    const [classYear, setClassYear] = useState<string>("");
    const [classCode, setClassCode] = useState<string>("");
    const [classTeacher, setClassTeacher] = useState<string>("");
    const [room, setRoom] = useState<string>("");
    
    const teacherOptions = {
        randomGuy1: "Alfred Nobel",
        randomGuy2: "Diogenes",
        randomGuy3: "Mike Ehrmentraut",
    }

    const yearOptions = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
    }

    const roomOptions = {
        1: "420",
        2: "69",
        3: "3141",
    }

    return (
        <StyledDetailForm>
            <DropdownSearchFormBase  label={"Class teacher"} options={teacherOptions} value={classTeacher} setValue={setClassTeacher} />
            <StyledRow>
                <DropdownFormBase label={"Class year"} value={classYear} setValue={setClassYear} width={"140px"} options={yearOptions} placeholder={" "}/>
                <TextFormBase label={"Class code"} value={classCode} setValue={setClassCode} placeholder={""} width={"140px"} />
            </StyledRow>
            <DropdownSearchFormBase label={"Room"} value={room} setValue={setRoom} options={roomOptions} width={"280px"} />
        </StyledDetailForm>
    );
}

export default DetailForm;