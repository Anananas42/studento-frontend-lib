import { FC } from "react";
import styled from "styled-components";
import { EmailForm, PhoneNumberForm } from "../../../../../component-library/forms/components";
import { IAddTeacherStepProps } from "../../../../../pages/admin/add/AddTeacher";
import ProgressStep from "../../../../../template-library/ProgressStep";

const ContactStep:FC<IAddTeacherStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;

    const nextCallback = () => {
        
        return true;
    };

    return (
        <ProgressStep title={title + " - contact"} nextCallback={nextCallback} {...rest}>
            <EmailForm value={state.email} setValue={(value: string) => dispatch({ type: "SET_EMAIL", payload: value })} />
            <PhoneNumberForm value={state.phoneNumber} setValue={(value: string) => dispatch({ type: "SET_PHONE_NUMBER", payload: value })} />
        </ProgressStep>
    )
}

export default ContactStep;