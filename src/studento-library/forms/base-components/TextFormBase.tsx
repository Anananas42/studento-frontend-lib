import { FC, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
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
    line-height: 14px;
    font-size: 20px;
    padding: 8px ${props => props.borderRadius};
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

interface ITextFormProps {
    isHorizontal?: boolean;
    label: string;
    formId: string;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    placeholder: string;
    width?: string;
}

const TextForm:FC<ITextFormProps> = (props) => {
    const { isHorizontal, label, formId, defaultNote, errorMessage, isDisabled, placeholder, width } = props;
    const [value, setValue] = useState<string>("");
    const { borderRadius, colors } = useThemeContext();

    return (
        <FormBase label={label} formId={formId} errorMessage={errorMessage} defaultNote={defaultNote} isHorizontal={isHorizontal} isDisabled={isDisabled}>
            <StyledInput type={"text"} id={formId} value={value} onChange={(e) => setValue(e.target.value)} borderRadius={borderRadius}
             fill={colors.fill} isError={errorMessage} disabled={isDisabled} placeholder={placeholder} width={width}/>
        </FormBase>
    )
}

export default TextForm;