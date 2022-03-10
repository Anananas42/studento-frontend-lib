import { FC } from "react";
import styled from "styled-components";
import FormBase from "../shared/FormBase";
import CheckboxRow from "./CheckboxRow";

const StyledMultipleChoice = styled.div`
    display: flex;
    flex-direction: column;
`;

interface IChoices {
    [key: string]: string;
}

interface IChoicesSelected {
    [key: string]: boolean;
}

interface MultipleChoiceProps {
    value: IChoicesSelected;
    setValue: React.Dispatch<React.SetStateAction<IChoicesSelected>>;
    choices: IChoices;
    isHorizontal?: boolean;
    label: string;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isOptional?: boolean;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const MultipleChoiceFormBase:FC<MultipleChoiceProps> = (props) => {
    const { choices, value, setValue, isDisabled, formId, label, ...rest } = props;

    const handleInputChange = (choice: string) => {
        setValue({...value, [choice]: !value[choice]});
    };

    return (
        <FormBase isDisabled={isDisabled} formId={formId} label={label} {...rest}>
            <StyledMultipleChoice>
            {Object.keys(choices).map(choice => {
                const identifier = formId ? formId + choice : label + choice;
                return (
                    <CheckboxRow key={identifier} formId={identifier} value={value[choice]} setValue={() => handleInputChange(choice)} label={choices[choice]} isDisabled={isDisabled} isGrouped={true}/>
                )
            })}
            </StyledMultipleChoice>
        </FormBase>
    );
}

export default MultipleChoiceFormBase;