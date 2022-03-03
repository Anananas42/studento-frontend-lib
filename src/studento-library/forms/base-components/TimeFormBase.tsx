import { FC, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import { IconL } from "../../utilities/Icon";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";
import { IStyledInput, StyledIconWrapper, StyledInput } from "./TextFormBase";

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
    label: string;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const placeholder = "--:--";

const checkHour = (time:string) => {
    const parsed = Number(time.substring(0, 2));
    if (parsed >= 0 && parsed < 24) return time;
    return "";
}

const checkMinute = (time:string) => {
    const parsed = Number(time.substring(2, 4));
    if (parsed >= 0 && parsed < 60) return time;
    return "";
}

const TimeFormBase:FC<ITimeFormProps> = (props) => {
    const { value, setValue, label, formId, isDisabled, errorMessage, ...rest} = props;
    const { borderRadius, colors } = useThemeContext();

    const onKeyDown = () => {

    }

    const processInput = (time: any) => {
        console.log(time);
        setValue(time);
        return;
    }

    return (
        <FormBase label={label} formId={formId} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            <StyledIconWrapper>
                <IconL>schedule</IconL>
            </StyledIconWrapper>

            <StyledTimeForm type={"time"} step={60} id={formId ? formId : label} value={value} onChange={(e) => processInput(e.target.value)} onKeyDown={onKeyDown} borderRadius={borderRadius}
             fill={colors.fill} isError={errorMessage} disabled={isDisabled} placeholder={isDisabled ? "" : placeholder} width={"140px"} icon={"schedule"} required />
        </FormBase>
    );
}

export default TimeFormBase;