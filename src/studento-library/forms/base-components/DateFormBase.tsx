import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import { IconL } from "../../utilities/Icon";
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
    padding: 8px 8px 8px ${props => `${48 + parseInt(props.borderRadius.split("px", 1)[0])/4}px`};
    font-family: 'Varela Round', sans-serif;
    width: ${props => props.width || "100%"};

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

const StyledIconWrapper = styled.div<{borderRadius: string}>`
    position: absolute;
    left: ${props => `${parseInt(props.borderRadius.split("px", 1)[0])/4}px`};
    top: -5px;
    color: ${FormColors.Default.icon};

    > div > div::after {
        border-right: 1px solid ${FormColors.Default.icon};
        padding-left: 8px;
        content: ""; 
    }
`;

export interface IDateFormProps {
    isHorizontal?: boolean;
    label: string;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const DateFormBase:FC<IDateFormProps> = (props) => {
    const { formId, label, ...rest } = props;
    const { borderRadius, colors } = useThemeContext();

    return (
        <FormBase formId={formId} label={label} {...rest}>
            <StyledIconWrapper borderRadius={borderRadius}>
                <IconL>calendar_today</IconL>
            </StyledIconWrapper>
            <StyledInput type={"date"} id={formId ? formId : label} borderRadius={borderRadius} fill={colors.fill} />
        </FormBase>
    );
}

export default DateFormBase;