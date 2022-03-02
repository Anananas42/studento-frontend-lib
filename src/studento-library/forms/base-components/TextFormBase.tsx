import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import { IconL } from "../../utilities/Icon";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";

interface IStyledInput {
    borderRadius: string;
    fill: string;
    isError?: string;
    width?: string;
    icon?: string;
}

const StyledInput = styled.input<IStyledInput>`
    border-radius: ${props => props.borderRadius};
    color: ${props => props.fill};
    border: 1px solid ${props => props.isError ? FormColors.Error.border : FormColors.Default.border};
    box-shadow: inset 0 4px 8px ${FormColors.Default.innerShadow};
    line-height: 14px;
    font-size: 20px;
    padding: 8px ${props => props.borderRadius} ${props => props.icon ? "8px 46px" : ""};
    font-family: 'Varela Round', sans-serif;
    width: ${props => props.width || "100%"};

    ::placeholder {
        color: ${FormColors.Default.placeholder};
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

const StyledIconWrapper = styled.div`
    position: absolute;
    left: -0px;
    top: -5px;
    color: ${FormColors.Default.icon};
`;

interface ITextFormProps {
    value: string;
    onChange: (inputText:string) => void;
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
    icon?: string; // Add icon at the start (never use with icons that might cause confusion)
    onKeyDown?: React.KeyboardEventHandler<any>; // Detect pressed keys while focused on the input (for example confirm something on enter)
}

const TextFormBase:FC<ITextFormProps> = (props) => {
    const { label, errorMessage, isDisabled, placeholder, width, icon, value, onChange, onKeyDown, isOptional, isCompact, formId, ...passedProps } = props;
    const { borderRadius, colors, languageMap } = useThemeContext();

    return (
        <FormBase label={label + (isOptional ? ` (${languageMap.Generic.optional})` : "")} errorMessage={errorMessage} isDisabled={isDisabled} isCompact={isCompact} formId={formId} {...passedProps}>
            {icon && 
                <StyledIconWrapper>
                    <IconL>{icon}</IconL>
                </StyledIconWrapper>
            }

            <StyledInput type={"text"} id={formId ? formId : label} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown} borderRadius={borderRadius}
             fill={colors.fill} isError={errorMessage} disabled={isDisabled} placeholder={placeholder} width={width} icon={icon} />
             
        </FormBase>
    )
}

export default TextFormBase;