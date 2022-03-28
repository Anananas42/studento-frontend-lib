import { FC } from "react";
import styled from "styled-components";
import { borderRadius, useThemeContext } from "../../ThemeProvider";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";
import FormStyles from "../shared/FormStyles";

interface IStyleProps {
    borderRadius: string;
    fill: string;
}

const StyledSingleChoiceForm = styled.div<IStyleProps>`
    display: flex;
    flex-direction: row;
    width: fit-content;

    div {
        position: relative;
        padding: 7px 16px;
        font-size: ${FormStyles.fontSize};
        user-select: none;
        border-radius: 0;
        border: 2px solid ${FormColors.Default.border};
        border-left: 1px solid ${FormColors.Default.border};;
        border-right: 1px solid ${FormColors.Default.border};;
        color: ${props => props.fill};
        overflow: hidden;

        &:first-child {
            padding-left: ${props => `${16 + parseInt(props.borderRadius.split("px", 1)[0])/2}px`};
            border-radius: ${props => props.borderRadius} 0 0 ${props => props.borderRadius};
            border-left: 2px solid ${FormColors.Default.border};

            &.selected {
                padding: 8px 17px 8px ${props => `${18 + parseInt(props.borderRadius.split("px", 1)[0])/2}px`};
            }
        }

        &:last-child {
            padding-right: ${props => `${16 + parseInt(props.borderRadius.split("px", 1)[0])/2}px`};
            border-radius: 0 ${props => props.borderRadius} ${props => props.borderRadius} 0;
            border-right: 2px solid ${FormColors.Default.border};;

            &.selected {
                padding: 8px ${props => `${18 + parseInt(props.borderRadius.split("px", 1)[0])/2}px`} 8px 17px;
            }
        }

        &.selected {
            background: linear-gradient(0, ${FormColors.SecondaryGrad.bg1}, ${FormColors.SecondaryGrad.bg2});
            border: 0;
            padding: 8px 17px;
            color: #fff;
            box-shadow: 2px 2px 8px -2px ${FormColors.Default.dropdownShadow};
        }
        
        &.formDisabled {
            pointer-events: none;
            color: ${FormColors.Disabled.text};
            background-color: ${FormColors.Disabled.background};
            box-shadow: none !important;
        }
    }

`;

interface IOptions {
    [key: string]: string;
}

interface IProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>> | ((value: string) => void);
    options: IOptions;
    isHorizontal?: boolean;
    label: string;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const SingleChoiceFormBase:FC<IProps> = (props) => {
    const { value, setValue, formId, isDisabled, label, options, ...rest } = props;
    const { colors } = useThemeContext();

    return (
        <FormBase formId={formId} label={label} isDisabled={isDisabled} {...rest}>
            <StyledSingleChoiceForm borderRadius={borderRadius} fill={colors.fill}>
                {Object.keys(options).map(choice => {
                    return <div key={formId ? formId + choice : label + choice} onClick={() => setValue(choice)} className={isDisabled ? "formDisabled" : (choice === value ? "selected" : "")}>{options[choice]}</div>
                })}
            </StyledSingleChoiceForm>
        </FormBase>
    );
}

export default SingleChoiceFormBase;