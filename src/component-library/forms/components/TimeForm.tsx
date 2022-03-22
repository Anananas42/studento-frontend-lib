import { FC, useRef } from "react";
import styled from "styled-components";
import { borderRadius, useThemeContext } from "../../ThemeProvider";
import { IconL } from "../../utilities/Icon";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";
import { IStyledInput, StyledIconWrapper } from "../base-components/TextFormBase";

export const StyledTimeForm = styled.input<IStyledInput>`
    border-radius: ${props => props.borderRadius};
    color: ${props => props.fill};
    border: 1px solid ${props => props.isError ? FormColors.Error.border : FormColors.Default.border};
    box-shadow: inset 0 4px 8px ${FormColors.Default.innerShadow};
    line-height: 20px;
    font-size: 20px;
    padding: 8px ${props => props.borderRadius} ${props => props.icon ? "8px 54px" : ""};
    font-family: 'Varela Round', sans-serif;
    width: 200px;

    ::placeholder {
        color: ${props => props.fill};
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

interface ITimeFormProps {
    value: string;
    setValue: (inputText:string) => void;
    isOptional?: boolean;
    isHorizontal?: boolean;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isCompact?: boolean;
    min?: string;
    max?: string;
}


const TimeForm:FC<ITimeFormProps> = (props) => {
    const { value, setValue, formId, isDisabled, errorMessage, min, max, ...rest} = props;
    const { colors, languageMap } = useThemeContext();
    const formRef = useRef<any>();
    const label = languageMap.Generic.time;

    return (
        <FormBase label={label} formId={formId} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            <StyledIconWrapper onClick={() => formRef.current.focus()}>
                <IconL>schedule</IconL>
            </StyledIconWrapper>

            <StyledTimeForm ref={formRef} type={"time"} id={formId ? formId : label} value={value}
             onChange={(e) => setValue(e.target.value)} borderRadius={borderRadius} min={min} max={max}
             fill={colors.fill} isError={errorMessage} disabled={isDisabled} width={"140px"} icon={"schedule"} required />
        </FormBase>
    );
}

export default TimeForm;