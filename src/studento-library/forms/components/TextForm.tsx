import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormBase, { IFormProps } from "../base-components/FormBase";
import FormColors, { IFormState, StateType } from "../FormColors";

interface IStyledInput {
    borderRadius: string;
    fill: string;
}

const StyledInput = styled.input<IStyledInput>`
    border-radius: ${props => props.borderRadius};
    color: ${props => props.fill};
    border: 1px solid ${FormColors.border};
`;

interface ITextFormProps {
    isHorizontal?: boolean;
    label: string;
    formId: string;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    placeholder: string;
}

const TextForm:FC<ITextFormProps> = (props) => {
    const { isHorizontal, label, formId, defaultNote, errorMessage, isDisabled, placeholder } = props;
    const [value, setValue] = useState<string>("");
    const { borderRadius, colors } = useThemeContext();

    return (
        <FormBase label={label} formId={formId}>
            <StyledInput type={"text"} id={formId} value={value} onChange={(e) => setValue(e.target.value)} borderRadius={borderRadius} fill={colors.fill} disabled={isDisabled} placeholder={placeholder}/>
        </FormBase>
    )
}

export default TextForm;