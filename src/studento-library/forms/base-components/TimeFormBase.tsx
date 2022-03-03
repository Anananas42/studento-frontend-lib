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
    width: 240px;

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

// Need to solve this by creating invisible native input time and an overlapping custom visualization. When the visualization is clicked, the native input is focused and accepts values,
// visualization is then updated accordingly.

const TimeFormBase:FC<ITimeFormProps> = (props) => {
    const { value, setValue, label, formId, isDisabled, errorMessage, ...rest} = props;
    const { borderRadius, colors } = useThemeContext();
    const [ hiddenInput, setHiddenInput ] = useState<string>("");
    const [ shownInput, setShownInput ] = useState<string>("");

    const onKeyDown = () => {

    }

    const processInput = (time: string) => {
        console.log(time);
        setShownInput(time);
        return;

        let newHiddenInput: string = time.replaceAll('-', '').replace(':', '');
        console.log(newHiddenInput);

        switch (newHiddenInput.length) {
            case 0:
                newHiddenInput = "";
                break;
            case 1:
                const firstDigit = Number(newHiddenInput[0]);
                if (firstDigit < 1 || firstDigit > 2) return;
                newHiddenInput = newHiddenInput[0];
                break;
            case 2:
                if (!checkHour(newHiddenInput)) return;
                newHiddenInput = newHiddenInput.substring(0, 2);
                break;
            case 3:
                if (hiddenInput.length === 4) {
                    newHiddenInput = newHiddenInput.substring(0, 2);
                    break;
                }

                if (!checkHour(newHiddenInput)) return; // Need to recheck due to copy paste
                const thirdDigit = Number(newHiddenInput[0]);
                if (thirdDigit < 0 || thirdDigit > 59) return;
                newHiddenInput = newHiddenInput.substring(0, 3);
                break;
            case 4:
                if (!checkHour(newHiddenInput) || !checkMinute(newHiddenInput)) return;
                newHiddenInput = newHiddenInput;
                break;
            default:
                return;

        }
        console.log(newHiddenInput);
        setHiddenInput(newHiddenInput);
        updateShownInput(newHiddenInput);
    }

    const updateShownInput = (hiddenInput: string) => {
        let newShownInput:string = "--:--";
        const len = hiddenInput.length;

        if (len < 3) {
            newShownInput = hiddenInput + newShownInput.substring(len);
        }else if (len === 3) {
            newShownInput = `${hiddenInput.substring(0, 2)}:${hiddenInput.substring(2)}-`;
        }else if (len === 4) {
            newShownInput = `${hiddenInput.substring(0, 2)}:${hiddenInput.substring(2)}`;
        }

        console.log(newShownInput);
        setShownInput(newShownInput);
    }

    return (
        <FormBase label={label} formId={formId} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            <StyledIconWrapper>
                <IconL>schedule</IconL>
            </StyledIconWrapper>

            <StyledTimeForm type={"time"} step={60} min="0" max="2359" maxLength={6} id={formId ? formId : label} value={shownInput} onChange={(e) => processInput(e.target.value)} onKeyDown={onKeyDown} borderRadius={borderRadius}
             fill={colors.fill} isError={errorMessage} disabled={isDisabled} placeholder={isDisabled ? "" : placeholder} width={"140px"} icon={"schedule"} />
        </FormBase>
    );
}

export default TimeFormBase;