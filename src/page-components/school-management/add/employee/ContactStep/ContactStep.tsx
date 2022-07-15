import { FC } from "react";
import { EmailForm, PhoneNumberForm } from "../../../../../component-library/forms/components";
import { IAddEmployeeStepProps } from "../../../../../pages/admin/add/AddEmployee";
import ProgressStep from "../../../../../template-library/ProgressStep";

const ContactStep:FC<IAddEmployeeStepProps> = (props) => {
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