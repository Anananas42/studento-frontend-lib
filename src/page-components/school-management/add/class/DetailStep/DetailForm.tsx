import { FC, useState } from "react";
import styled from "styled-components";
import { DropdownFormBase, DropdownSearchFormBase, TextAreaFormBase, TextFormBase } from "../../../../../component-library/forms/base-components";

const StyledDetailForm = styled.div`
    width: 480px;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 16px;
`;

const DetailForm:FC = () => {
    const [grade, setGrade] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [classTeacher, setClassTeacher] = useState<string>("");
    const [secondTeacher, setSecondTeacher] = useState<string>("");
    const [room, setRoom] = useState<string>("");
    const [note, setNote] = useState<string>("");
    
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
            <StyledRow>
                <DropdownFormBase label={"Grade"} value={grade} setValue={setGrade} width={"108px"} options={yearOptions} placeholder={" "}/>
                <TextFormBase label={"Code"} value={code} setValue={setCode} placeholder={""} width={"108px"} />
                <DropdownSearchFormBase label={"Room"} value={room} setValue={setRoom} options={roomOptions} width={"100%"} isOptional={true} />
            </StyledRow>
            <DropdownSearchFormBase  label={"Class teacher"} options={teacherOptions} value={classTeacher} setValue={setClassTeacher} />
            <DropdownSearchFormBase  label={"Backup teacher"} options={teacherOptions} value={secondTeacher} setValue={setSecondTeacher} isOptional={true} />
            <TextAreaFormBase label={"Note"} value={note} setValue={setNote} placeholder={"Additional information..."} isOptional={true} />
        </StyledDetailForm>
    );
}

export default DetailForm;