import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import { TextFormBase } from "../base-components";

interface IEmailForm {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isHorizontal?: boolean; // Place label to the left
    formId?: string; // To link label and input
    errorMessage?: string; // Trigger error state by setting errorMessage to a value
    isDisabled?: boolean;
    isOptional?: boolean;
    placeholder?: string;
    width?: string; // Set width manually. Else it's 100%
    onKeyDown?: React.KeyboardEventHandler<any>; // Detect pressed keys while focused on the input (for example confirm something on enter)
}

const EmailForm:FC<IEmailForm> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase icon={"email"} label={languageMap.Contact.email} placeholder={props.placeholder || ""} {...props} />
    )
}

export default EmailForm;