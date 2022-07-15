import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import { TextFormBase } from "../base-components";

interface IPhoneNumberForm {
    value: string;
    setValue: (inputText: string) => void;
    isHorizontal?: boolean; // Place label to the left
    formId?: string; // To link label and input
    errorMessage?: string; // Trigger error state by setting errorMessage to a value
    isDisabled?: boolean;
    isOptional?: boolean;
    width?: string; // Set width manually. Else it's 100%
    onKeyDown?: React.KeyboardEventHandler<any>; // Detect pressed keys while focused on the input (for example confirm something on enter)
}

const PhoneNumberForm:FC<IPhoneNumberForm> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase icon={"phone"} label={languageMap.Contact.phoneNumber} placeholder={""} {...props} />
    )
}

export default PhoneNumberForm;