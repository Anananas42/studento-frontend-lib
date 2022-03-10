import { FC, SetStateAction } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormColors from "../shared/FormColors";
import StyledCheckbox from "../shared/StyledCheckbox";

interface IStyleProps {
    borderRadius: string;
    fill: string;
    isDisabled?: boolean;
}

const StyledChoiceRow = styled.div<IStyleProps>`
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

interface ICheckboxRowProps {
    value: boolean;
    setValue: React.Dispatch<SetStateAction<boolean>>;
    isDisabled?: boolean;
    formId?: string;
    label: string;
}

const CheckboxRow:FC<ICheckboxRowProps> = (props) => {
    const { value, setValue, isDisabled, formId, label } = props;
    const { borderRadius, colors } = useThemeContext();

    const identifier = formId ? formId : label;

    return (
        <StyledChoiceRow borderRadius={borderRadius} fill={colors.fill} isDisabled={isDisabled}>
            <StyledCheckbox id={identifier} type={"checkbox"} checked={value} onChange={() => setValue(!value)} disabled={isDisabled} />
            <label htmlFor={identifier}>{label}</label>
        </StyledChoiceRow>
    )
            
}

export default CheckboxRow;