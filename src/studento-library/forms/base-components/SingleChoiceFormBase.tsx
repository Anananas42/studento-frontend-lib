import { ChangeEventHandler, FC, useRef, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import { IconL } from "../../utilities/Icon";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";

interface IStyledSelect {
    borderRadius: string;
    errorMessage?: string;
    fill: string;
    placeholderFill: string;
    primaryColor: string;
}

const StyledSelect = styled.select<IStyledSelect>`
    display: block;
    width: 100%;
    font-size: 20px;
    line-height: 20px;
    height: 42px;
    padding: 8px;
    outline: 0;
    border: 1px solid ${props => props.errorMessage ? FormColors.Error.border : FormColors.Default.border};
    border-radius: ${props => props.borderRadius};
    box-shadow: inset 0 4px 8px ${FormColors.Default.innerShadow};
    background-color: white;
    color: ${props => props.placeholderFill};
    font-family: 'Varela Round', sans-serif;
    margin: 0;

    -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;

    :focus {
        box-shadow: inset 0 4px 8px ${FormColors.Active.innerShadow};
        border-color: ${FormColors.Active.border};
        outline: none;
        transition: box-shadow 0.2s ease-in-out;
    }

    option {
        color: ${props => props.fill};
    }

    & + div {
        position: absolute;
        color: ${props => props.fill};
        top: -4px;
        right: 0;
        user-select: none;
        transform: rotate(0deg);
        transition: transform 0.3s ease-in-out;
    }

    :focus-within + div {
        transform: rotate(180deg);
        transition: transform 0.3s ease-in-out;
    }
`;

interface IOptions {
    default: string;
    [key: string]: string; // key in english, value in local language
}

interface IProps {
    value: string;
    onChange: ChangeEventHandler<any>;
    options: IOptions;
    label: string;
    formId?: string;
    isHorizontal?: boolean;
    isCompact?: boolean;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
}

const SingleChoiceFormBase:FC<IProps> = (props) => {
    const { value, onChange, options, formId, isDisabled, errorMessage, label, ...rest } = props;
    const { borderRadius, colors } = useThemeContext();
    const styleProps = { borderRadius, errorMessage, fill: colors.fill, placeholderFill: value === "default" ? FormColors.Default.placeholder : colors.fill, primaryColor: colors.primary };
    const selectRef = useRef<any>();

    return (
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            <StyledSelect ref={selectRef} value={value} onChange={onChange} id={formId ? formId : label} disabled={isDisabled} {...styleProps}>
                {Object.keys(options).map(key => {
                    const additionalProps = key === "default" ? {disabled: true, hidden: true} : {};
                    return <option value={key} onClick={() => selectRef.current.blur()} {...additionalProps}>{options[key]}</option>;
                })}
            </StyledSelect>
            <IconL>expand_more</IconL>
        </FormBase>
    );
}

export default SingleChoiceFormBase;