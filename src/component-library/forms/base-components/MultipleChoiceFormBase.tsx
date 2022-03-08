import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";
import StyledCheckbox from "../shared/StyledCheckbox";

interface IStyleProps {
    borderRadius: string;
    fill: string;
    isDisabled?: boolean;
}

const StyledMultipleChoice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`;

const StyleChoiceRow = styled.div<IStyleProps>`
    padding-left: ${props => parseInt(props.borderRadius.split("px", 1)[0]) * 2 + "px"};
    color: ${props => props.fill};

    label {
        padding-left: 8px;
        font-size: 18px;
        line-height: 18px;
        user-select: none;
        color: ${props => props.isDisabled ? FormColors.Disabled.label : FormColors.Default.label};
    }
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
    const { borderRadius, colors } = useThemeContext();

    const handleInputChange = (choice: string) => {
        setValue({...value, [choice]: !value[choice]});
    };

    return (
        <FormBase isDisabled={isDisabled} formId={formId} label={label} {...rest}>
            <StyledMultipleChoice>
            {Object.keys(choices).map(choice => {
                const identifier = formId ? formId + choice : label + choice;
                return (
                    <StyleChoiceRow key={identifier} borderRadius={borderRadius} fill={colors.fill} isDisabled={isDisabled}>
                        <StyledCheckbox id={identifier} type={"checkbox"} checked={value[choice]} onChange={() => handleInputChange(choice)} disabled={isDisabled} />
                        <label htmlFor={identifier}>{choices[choice]}</label>
                    </StyleChoiceRow>
                )
            })}
            </StyledMultipleChoice>
        </FormBase>
    );
}

export default MultipleChoiceFormBase;