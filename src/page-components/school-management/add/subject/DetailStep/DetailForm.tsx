import { FC } from "react";
import styled from "styled-components";
import { AddSubjectReducerActionType, IAddSubjectReducerState } from "../addSubjectReducer";

const StyledDetailForm = styled.div`
    width: 480px;
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

export interface IErrors {
        
}

const DetailForm:FC<IProps> = (props) => {
    const { state, dispatch, errors } = props;

    return (
        <StyledDetailForm>
            hello there
        </StyledDetailForm>
    );
}

export default DetailForm;