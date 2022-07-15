import { FC } from "react";
import styled from "styled-components";
import { DropdownFormBase, DropdownSearchFormBase, TextAreaFormBase, TextFormBase } from "../../../../component-library/forms/base-components";
import { IAddRoomStepProps } from "../../../../pages/admin/add/AddRoom";
import ProgressStep from "../../../../template-library/ProgressStep";

const StyledRow = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
`;

const dummyClasses = {
    "2.C": "2.C",
    "2.A": "2.A",
    "2.B": "2.B",
    "2.D": "2.D",
}

const dummyFloors = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
}

const RoomStep:FC<IAddRoomStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;

    return (
        <ProgressStep title={title + " - details"} {...rest}>
            <StyledRow>
                <TextFormBase label={"ID"} value={state.id} setValue={(value: string) => dispatch({ type: "SET_ID", payload: value })} placeholder={"123A"} width={"160px"}/>
                <DropdownFormBase label={"Floor"} value={state.floor} setValue={(value: string) => dispatch({ type: "SET_FLOOR", payload: value })} options={dummyFloors} width={"160px"}/>
                <DropdownSearchFormBase label={"Class"} value={state.class} setValue={(value: string) => dispatch({ type: "SET_CLASS", payload: value })} options={dummyClasses} width={"160px"} isOptional={true}/>
            </StyledRow>
            <TextAreaFormBase label={"Description"} value={state.description} setValue={(value: string) => dispatch({ type: "SET_DESCRIPTION", payload: value })} placeholder={" "} isOptional={true}/>
        </ProgressStep>
    )
}

export default RoomStep;