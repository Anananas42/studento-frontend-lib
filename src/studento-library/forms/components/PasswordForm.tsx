import { FC, useRef, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import { IconL } from "../../utilities/Icon";
import { StyledIconWrapper, StyledInput } from "../base-components/TextFormBase";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";

const StyledViewIcon = styled.div`
    position: absolute;
    top: -4px;
    left: 348px;
    color: ${FormColors.Default.icon};
    user-select: none;
    
    :hover {
        color: ${FormColors.Active.icon};
    }
`

interface IFormProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isConfirmPassword?: boolean;
    isHorizontal?: boolean; // Place label to the left
    formId?: string; // To link label and input
    errorMessage?: string; // Trigger error state by setting errorMessage to a value
    isDisabled?: boolean;
    width?: string; // Set width manually. Else it's 100%
    onKeyDown?: React.KeyboardEventHandler<any>; // Detect pressed keys while focused on the input (for example confirm something on enter)
}

const getUpdatedValue = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = e.target.value;
    const newChar = eventValue.charAt(eventValue.length-1);
    const caretStart = e.target.selectionStart || 0;
    const selectionLength = value.length - eventValue.length;

    if (newChar === '●' || newChar === '') {
        if (selectionLength > 0) {
            return value.substring(0, caretStart) + value.substring(caretStart + selectionLength, value.length);

        }
        return value.substring(0, eventValue.length);
    }

    return (value + eventValue.replaceAll('●', ''));
}

const PasswordForm:FC<IFormProps> = (props) => {
    const { isDisabled, value, setValue, onKeyDown, formId, width, errorMessage, isConfirmPassword, ...rest } = props;
    const { borderRadius, colors, languageMap } = useThemeContext();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const formRef = useRef<any>();
    const label = isConfirmPassword ? languageMap.Generic.passwordConfirm : languageMap.Generic.password;

    return (
        <FormBase label={label} isDisabled={isDisabled} formId={formId} errorMessage={errorMessage} {...rest}>
            <StyledIconWrapper onClick={() => formRef.current.focus()}>
                <IconL>lock</IconL>
            </StyledIconWrapper>
            <StyledInput ref={formRef} type={"text"} id={formId ? formId : label} value={isVisible ? value : '●'.repeat(value.length)}
             onChange={(e) => setValue(getUpdatedValue(value, e))} onKeyDown={onKeyDown} borderRadius={borderRadius}
                fill={colors.fill} isError={errorMessage} disabled={isDisabled} placeholder={isDisabled ? "" : languageMap.Generic.passwordPlaceholder} width={width ? width : "400px"} icon={"lock"} style={{paddingRight: "48px"}}/>
            <StyledViewIcon onMouseDown={() => setIsVisible(true)} onMouseUp={() => {setIsVisible(false); formRef.current.focus()}} onMouseLeave={() => setIsVisible(false)}>
                {value && <IconL>{isVisible ? "visibility_off" : "visibility"}</IconL>}
            </StyledViewIcon>
        </FormBase>
    );
};

export default PasswordForm;