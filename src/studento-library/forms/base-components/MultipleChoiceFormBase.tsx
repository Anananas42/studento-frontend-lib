import { FC } from "react";
import styled from "styled-components";
import FormBase from "../shared/FormBase";
import StyledCheckbox from "../shared/StyledCheckbox";

const StyledMultipleChoice = styled.div`
    

`;

const StyleChoiceRow = styled.div`
    
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
    const { choices, value, setValue, isDisabled, ...rest } = props;

    return (
        <FormBase isDisabled={isDisabled} {...rest}>
            <StyledMultipleChoice>
            {Object.keys(choices).map(choice => {
                return (
                    <StyleChoiceRow>
                        <StyledCheckbox type={"checkbox"} value={choice} />
                        <label>{choices[choice]}</label>
                    </StyleChoiceRow>
                )
            })}
            </StyledMultipleChoice>
        </FormBase>
    );
}

export default MultipleChoiceFormBase;