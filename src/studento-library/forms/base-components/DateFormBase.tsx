import { FC, useRef } from "react";
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
}

const StyledInput = styled.input<IStyledInput>`
    border-radius: ${props => props.borderRadius};
    color: ${props => props.fill};
    border: 1px solid ${props => props.isError ? FormColors.Error.border : FormColors.Default.border};
    box-shadow: inset 0 4px 8px ${FormColors.Default.innerShadow};
    line-height: 20px;
    font-size: 20px;
    padding: 8px 8px 8px ${props => `${48 + parseInt(props.borderRadius.split("px", 1)[0])/4}px`};
    font-family: 'Varela Round', sans-serif;
    width: ${props => props.width || "100%"};

    :focus {
        box-shadow: inset 0 4px 8px ${FormColors.Active.innerShadow};
        border-color: ${FormColors.Active.border};
        outline: none;
        transition: box-shadow 0.2s ease-in-out;
    }

    :disabled {
        box-shadow: none;
        background-color: ${FormColors.Disabled.background};
        border-color: ${FormColors.Disabled.border};
        color: ${FormColors.Disabled.placeholder};
    }

`;

const StyledIconWrapper = styled.div<{borderRadius: string, isDisabled?: boolean}>`
    position: absolute;
    left: ${props => `${parseInt(props.borderRadius.split("px", 1)[0])/4}px`};
    top: -5px;
    color: ${props => props.isDisabled ? FormColors.Disabled.icon : FormColors.Default.icon};
    user-select: none;
    
    > div > div::after {
        border-right: 1px solid ${props => props.isDisabled ? FormColors.Disabled.icon : FormColors.Default.icon};
        padding-left: 8px;
        content: ""; 
    }
`;

export interface IDateFormProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isHorizontal?: boolean;
    label: string;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const DateFormBase:FC<IDateFormProps> = (props) => {
    const { formId, label, errorMessage, isDisabled, setValue, value, ...rest } = props;
    const { borderRadius, colors } = useThemeContext();
    const datePickerRef = useRef<any>();

    return (
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            <label htmlFor={formId ? formId : label}>
                <StyledIconWrapper borderRadius={borderRadius} isDisabled={isDisabled}>
                    <IconL>calendar_today</IconL>
                </StyledIconWrapper>
            </label>
            <StyledInput ref={datePickerRef} type={"date"} id={formId ? formId : label} value={value} onChange={e => setValue(e.target.value)} borderRadius={borderRadius} fill={colors.fill} isError={errorMessage} required disabled={isDisabled}/>
        </FormBase>
    );
}

export default DateFormBase;