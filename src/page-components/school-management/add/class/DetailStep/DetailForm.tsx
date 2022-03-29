import { FC } from "react";
import styled from "styled-components";
import { DropdownFormBase, DropdownSearchFormBase, TextAreaFormBase, TextFormBase } from "../../../../../component-library/forms/base-components";
import { AddClassReducerActionType, IAddClassReducerState } from "../addClassReducer";

const StyledDetailForm = styled.div`
    width: 480px;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 16px;
`;

interface IProps {
    state: IAddClassReducerState;
    dispatch: React.Dispatch<AddClassReducerActionType>;
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

const DetailForm:FC<IProps> = (props) => {
    const { state, dispatch } = props;

    return (
        <StyledDetailForm>
            <StyledRow>
                <DropdownFormBase label={"Grade"} value={state.grade} setValue={(value: string) => dispatch({type: "SET_GRADE", payload: value})} width={"108px"} options={yearOptions} placeholder={" "}/>
                <TextFormBase label={"Code"} value={state.code} setValue={(value: string) => dispatch({type: "SET_CODE", payload: value})} placeholder={""} width={"108px"} />
                <DropdownSearchFormBase label={"Room"} value={state.room} setValue={(value: string) => dispatch({type: "SET_ROOM", payload: value})} options={state.roomOptions} width={"100%"} isOptional={true} />
            </StyledRow>
            <DropdownSearchFormBase  label={"Class teacher"} options={state.classTeacherOptions} value={state.classTeacher} setValue={(value: string) => dispatch({type: "SET_CLASS_TEACHER", payload: value})} />
            <DropdownSearchFormBase  label={"Backup teacher"} options={state.backupTeacherOptions} value={state.backupTeacher} setValue={(value: string) => dispatch({type: "SET_BACKUP_TEACHER", payload: value})} isOptional={true} />
            <TextAreaFormBase label={"Note"} value={state.note} setValue={(value: string) => dispatch({type: "SET_NOTE", payload: value})} placeholder={"Additional information..."} isOptional={true} />
        </StyledDetailForm>
    );
}

export default DetailForm;