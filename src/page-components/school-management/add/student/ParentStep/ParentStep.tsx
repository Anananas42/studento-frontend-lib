import { FC } from "react";
import styled from "styled-components";
import { EmailForm, FirstNameForm, LastNameForm, PersonalIDForm, PhoneNumberForm } from "../../../../../component-library/forms/components";
import { IAddStudentStepProps } from "../../../../../pages/admin/add/AddStudent";
import ProgressStep from "../../../../../template-library/ProgressStep";

const StyledRow = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
`;

const ParentStep:FC<IAddStudentStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;

    const nextCallback = () => {
        
        return true;
    };

    return (
        <ProgressStep title={title + " - parent"} nextCallback={nextCallback} {...rest}>
            <StyledRow>
                <FirstNameForm value={state.parentFirstName} setValue={(value: string) => dispatch({ type: "SET_PARENT_FIRST_NAME", payload: value })} />
                <LastNameForm value={state.parentLastName} setValue={(value: string) => dispatch({ type: "SET_PARENT_LAST_NAME", payload: value })} />
            </StyledRow>
            <div style={{width: "65%"}}>
                <PersonalIDForm value={state.parentPersonalID} setValue={(value: string) => dispatch({ type: "SET_PARENT_PERSONAL_ID", payload: value })} />
                <EmailForm value={state.parentEmail} setValue={(value: string) => dispatch({ type: "SET_PARENT_EMAIL", payload: value })} />
                <PhoneNumberForm value={state.parentPhoneNumber} setValue={(value: string) => dispatch({ type: "SET_PARENT_PHONE_NUMBER", payload: value })} />
            </div>
        </ProgressStep>
    )
}

export default ParentStep;