import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import { TextFormBase } from "../base-components";

interface IUsernameFormProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isHorizontal?: boolean; // Place label to the left
    formId?: string; // To link label and input
    errorMessage?: string; // Trigger error state by setting errorMessage to a value
    isDisabled?: boolean;
    width?: string; // Set width manually. Else it's 100%
    onKeyDown?: React.KeyboardEventHandler<any>; // Detect pressed keys while focused on the input (for example confirm something on enter)
}

const UsernameForm:FC<IUsernameFormProps> = (props) => {
    const { width, ...rest } = props;
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase icon={"person"} label={languageMap.Generic.username} placeholder={languageMap.Generic.usernamePlaceholder} width={width ? width : "400px"} {...rest} />
    )
}

export default UsernameForm;