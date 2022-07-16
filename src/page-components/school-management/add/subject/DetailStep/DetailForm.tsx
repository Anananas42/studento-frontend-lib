import { FC } from "react";
import styled from "styled-components";
import { CheckboxRow, DropdownSearchFormBase, TextFormBase, ToggleRow } from "../../../../../component-library/forms/base-components";
import { AddSubjectReducerActionType, IAddSubjectReducerState } from "../addSubjectReducer";

const StyledDetailForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;
    padding-top: 8px;
    gap: 16px;
`;

const StyledRow = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 16px;
`;

interface IProps {
    state: IAddSubjectReducerState;
    dispatch: React.Dispatch<AddSubjectReducerActionType>;
    errors: IErrors;
}

export interface IErrors {
        
}

const dummmySubjectTypes = {
    "Mathematics": "Mathematics",
    "Physics": "Physics",
    "Chemistry": "Chemistry",
    "Biology": "Biology",
    "History": "History",
    "Geography": "Geography",
}

const DetailForm:FC<IProps> = (props) => {
    const { state, dispatch, errors } = props;

    return (
        <StyledDetailForm>
            <StyledRow>
                <ToggleRow label={"Custom subject"} value={state.isCustomSubject} setValue={(value: boolean) => dispatch({ type: "SET_IS_CUSTOM_SUBJECT", payload: value })}/>    
                <ToggleRow label={"Multiple classes"} value={state.isMultipleClasses} setValue={(value: boolean) => dispatch({type: "SET_IS_MULTIPLE_CLASSES", payload: value})} />
            </StyledRow>
            {!state.isCustomSubject && <DropdownSearchFormBase label={"Subject type"} options={dummmySubjectTypes} value={state.subjectType} setValue={(value: string) => dispatch({type: "SET_SUBJECT_TYPE", payload: value})}/>}
            {state.isCustomSubject && <TextFormBase label={"Subject title"} value={state.title} setValue={(value: string) => dispatch({type: "SET_TITLE", payload: value})} placeholder={"Seminar - Geography of the Middle East"}/>}
        </StyledDetailForm>
    );
}

export default DetailForm;