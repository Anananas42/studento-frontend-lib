import { ChangeEventHandler, FC, useRef } from "react";
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
    padding: 8px 16px;
    border: 1px solid ${props => props.errorMessage ? FormColors.Error.border : FormColors.Default.border};
    border-radius: ${props => props.borderRadius};
    outline: 0;
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
        outline: ${FormColors.Active.border} solid 1px;
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
        pointer-events: none;
    }

    :focus-within + div {
        transform: rotate(180deg);
        transition: transform 0.3s ease-in-out;
    }
`;

interface IOptions {
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

// Might be worth redesigning without the use of native select html element. Styling native select can cause multiple tumors in a very short time span.

const DropdownFormBase:FC<IProps> = (props) => {
    const { value, onChange, options, formId, isDisabled, errorMessage, label, ...rest } = props;
    const { borderRadius, colors } = useThemeContext();

    const placeholderFill = value === "default" ? FormColors.Default.placeholder : colors.fill;
    const styleProps = { borderRadius, errorMessage, fill: colors.fill, placeholderFill, primaryColor: colors.primary };
    const dropdownRef = useRef<any>();

    return (
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            <StyledSelect ref={dropdownRef} value={value} onChange={onChange} id={formId ? formId : label} disabled={isDisabled} {...styleProps}>
                <option value={"default"} onClick={() => dropdownRef.current.blur()} disabled={true} hidden={true} >Choose one</option>;
                {Object.keys(options).map(key => {
                    return <option key={key} value={key} onClick={() => dropdownRef.current.blur()} >{options[key]}</option>;
                })}
            </StyledSelect>
            <IconL>expand_more</IconL>
        </FormBase>
    );
}

export default DropdownFormBase;