import React, { FC } from "react";
import styled from "styled-components";
import { borderRadius, useThemeContext } from "../../ThemeProvider";
import FormBase from "../shared/FormBase";
import FormStyles from "../shared/FormStyles";
import StyledRadioButton from "../shared/StyledRadioButton";

interface IStyledRadioButtonRow {
    fill: string;
}

const StyledRadioButtonRow = styled.div<IStyledRadioButtonRow>`
    display: flex;
	justify-content: flex-start;
	align-items: center;

    label {
        color: ${props => props.fill};
        padding-bottom: 2px;
        font-size: ${FormStyles.checkFontSize};
        padding-left: 8px;
        user-select: none;
    }
`;

interface IRadioButtonRowProps {
    value: string;
    thisButtonValue: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    label: string;
    formId?: string;
}

const RadioButtonRow:FC<IRadioButtonRowProps> = (props) => {
    const { value, setValue, thisButtonValue, label, formId } = props;
    const { colors } = useThemeContext();
    const id = formId ? formId + label : label;

    return (
        <StyledRadioButtonRow fill={colors.fill}>
            <StyledRadioButton type={"radio"} id={id} checked={value === thisButtonValue} onChange={() => setValue(thisButtonValue)}/>
            <label htmlFor={id}>{label}</label>
        </StyledRadioButtonRow>

    )
}

const StyledRadioList = styled.div<{borderRadius: string}>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: ${props => parseInt(props.borderRadius.split("px", 1)[0]) * 2 + "px"};
`;

interface IOptions {
    [key: string]: string;
}

interface IRadioButtonFormProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    options: IOptions;
    isHorizontal?: boolean;
    label: string;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isOptional?: boolean;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const RadioButtonFormBase:FC<IRadioButtonFormProps> = (props) => {
    const { value, setValue, options, formId, ...rest} = props;

    return (
        <FormBase formId={formId} {...rest}>
            <StyledRadioList borderRadius={borderRadius}>
                {Object.keys(options).map(opt => {
                    return <RadioButtonRow key={opt} value={value} thisButtonValue={opt} setValue={setValue} label={options[opt]} formId={formId} />
                })}
            </StyledRadioList>
        </FormBase>
    )
}

export default RadioButtonFormBase;