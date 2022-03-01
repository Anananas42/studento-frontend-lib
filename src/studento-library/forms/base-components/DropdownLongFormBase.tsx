import { ChangeEventHandler, FC, useRef } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";

interface IOptionGroups {
    [key: string]: IOptions;
}

interface IOptions {
    [key: string]: string; // key in english, value in local language
};

interface IProps {
    value: string;
    onChange: ChangeEventHandler<any>;
    options: IOptionGroups;
    label: string;
    formId?: string;
    isHorizontal?: boolean;
    isCompact?: boolean;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
};

const DropdownLongFormBase:FC<IProps> = (props) => {
    const { value, onChange, options, formId, isDisabled, errorMessage, label, ...rest } = props;
    const { borderRadius, colors } = useThemeContext();
    const styleProps = { borderRadius, errorMessage, fill: colors.fill, placeholderFill: value === "default" ? FormColors.Default.placeholder : colors.fill, primaryColor: colors.primary };
    const selectRef = useRef<any>();

    return (
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            
        </FormBase>
    );
}

export default DropdownLongFormBase;