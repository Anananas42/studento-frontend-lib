import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormBase from "../shared/FormBase";
import StyledCheckbox from "../shared/StyledCheckbox";

const StyledMultipleChoice = styled.div`
    

`;

const StyleChoiceRow = styled.div<{borderRadius: string}>`
    padding-left: ${props => props.borderRadius};
    display: grid;
    grid-template-columns: 40px auto;
    gap: 8px;

    label {
        font-size: 20px;
        line-height: 20px;
        user-select: none;
    }
`

interface IChoices {
    [key: string]: string;
}

interface MultipleChoiceProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    choices: IChoices;
    isHorizontal?: boolean;
    label: string;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const MultipleChoiceFormBase:FC<MultipleChoiceProps> = (props) => {
    const { choices, value, setValue, isDisabled, formId, label, ...rest } = props;
    const { borderRadius } = useThemeContext();

    return (
        <FormBase isDisabled={isDisabled} formId={formId} label={label} {...rest}>
            <StyledMultipleChoice>
            {Object.keys(choices).map(choice => {
                return (
                    <StyleChoiceRow borderRadius={borderRadius}>
                        <StyledCheckbox id={formId ? formId + choice : label + choice} type={"checkbox"} value={choice} />
                        <label htmlFor={formId ? formId + choice : label + choice}>{choices[choice]}</label>
                    </StyleChoiceRow>
                )
            })}
            </StyledMultipleChoice>
        </FormBase>
    );
}

export default MultipleChoiceFormBase;