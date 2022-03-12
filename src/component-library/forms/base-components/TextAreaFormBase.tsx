import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";

interface IStyledTextArea {
    borderRadius: string;
    fill: string;
    isError?: string;
    width?: string;
    height?: string;
    icon?: string;
}

const StyledTextArea = styled.textarea<IStyledTextArea>`
    resize: none;
    border-radius: ${props => props.borderRadius};
    color: ${props => props.fill};
    border: 1px solid ${props => props.isError ? FormColors.Error.border : FormColors.Default.border};
    box-shadow: inset 0 4px 8px ${FormColors.Default.innerShadow};
    line-height: 28px;
    font-size: 20px;
    padding: 8px ${props => props.borderRadius} ${props => props.icon ? "8px 50px" : ""};
    font-family: 'Varela Round', sans-serif;
    width: ${props => props.width || "100%"};
    height: ${props => props.height || ""};

    ::placeholder {
        color: ${FormColors.Default.placeholder};
        opacity: 1;
    }

    :disabled {
        box-shadow: none;
        background-color: ${FormColors.Disabled.background};
        border-color: ${FormColors.Disabled.border};

        ::placeholder {
            color: ${FormColors.Disabled.placeholder};
        }
    }

    :focus {
        box-shadow: inset 0 4px 8px ${FormColors.Active.innerShadow};
        border-color: ${FormColors.Active.border};
        outline: none;
        transition: box-shadow 0.2s ease-in-out;
    }

`;

interface ITextAreaFormBaseProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isHorizontal?: boolean; // Place label to the left
    label: string;
    formId?: string; // To link label and input
    defaultNote?: string; // Note under the input in default state
    errorMessage?: string; // Trigger error state by setting errorMessage to a value
    isDisabled?: boolean;
    isOptional?: boolean; // The field should be visibly optional
    isCompact?: boolean; // Form is without messages to save vertical space
    placeholder: string; // Placeholder text when form is empty
    width?: string; // Set width manually. Else it's 100%
    onKeyDown?: React.KeyboardEventHandler<any>; // Detect pressed keys while focused on the input (for example confirm something on enter)
}

const TextAreaFormBase:FC<ITextAreaFormBaseProps> = (props) => {
    const { label, errorMessage, isDisabled, placeholder, width, value, setValue, onKeyDown, isCompact, formId, ...rest } = props;
    const { borderRadius, colors } = useThemeContext();

    return (
        <FormBase label={label} errorMessage={errorMessage} isDisabled={isDisabled} isCompact={isCompact} formId={formId ? formId : label} width={width} {...rest}>
            <StyledTextArea id={formId ? formId : label} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKeyDown} borderRadius={borderRadius}
             fill={colors.fill} isError={errorMessage} disabled={isDisabled} placeholder={isDisabled ? "" : placeholder} width={width} />
             
        </FormBase>
    )
}

export default TextAreaFormBase;