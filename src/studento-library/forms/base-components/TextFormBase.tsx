import { FC, useState } from "react";
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
    padding: 8px ${props => props.borderRadius} ${props => props.icon ? "8px 50px" : ""};
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
    isHorizontal?: boolean;
    label: string;
    formId: string;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isOptional?: boolean;
    placeholder: string;
    width?: string;
    icon?: string;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const TextForm:FC<ITextFormProps> = (props) => {
    const { isHorizontal, label, formId, defaultNote, errorMessage, isDisabled, placeholder, width, icon, value, onChange, onKeyDown, isOptional } = props;
    const { borderRadius, colors } = useThemeContext();

    return (
        <FormBase label={label + (isOptional ? " (optional)" : "")} formId={formId} errorMessage={errorMessage} defaultNote={defaultNote} isHorizontal={isHorizontal} isDisabled={isDisabled}>
            {icon && 
                <StyledIconWrapper>
                    <IconL>{icon}</IconL>
                </StyledIconWrapper>
            }

            <StyledInput type={"text"} id={formId} value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown} borderRadius={borderRadius}
             fill={colors.fill} isError={errorMessage} disabled={isDisabled} placeholder={placeholder} width={width} icon={icon}/>
             
        </FormBase>
    )
}

export default TextForm;