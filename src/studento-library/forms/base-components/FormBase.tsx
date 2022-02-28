import { FC, ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormColors, { IFormState, StateType } from "../FormColors";

const StyledLabel = styled.label<{fill: string}>`
    color: ${props => props.fill};
`;

interface IStyledWrapper {
    isHorizontal?: boolean;
}

const StyledWrapper = styled.div<IStyledWrapper>`
    display: flex;
    flex-direction: ${props => props.isHorizontal ? "row" : "column"};
`;

const StyledIconAnchor = styled.div`
    position: relative;
`;

interface IStyledMessageWrapper {
    msgColor: string;
}

const StyledMessageWrapper = styled.div<IStyledMessageWrapper>`
    div:last-child {
        color: ${props => props.msgColor}
    }
`;

export interface IFormProps {
    isHorizontal?: boolean;
    label: string;
    placeholder?: string;
    defaultNote?: string;
    formId: string;
    icon?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    children: ReactElement;
}

const FormBase:FC<IFormProps> = (props) => {
    const { isHorizontal, label, formId, defaultNote, errorMessage, children } = props;
    const [value, setValue] = useState<string>("");
    const [formState, setFormState] = useState<IFormState>({type: StateType.Default, message: defaultNote});
    const { borderRadius, colors } = useThemeContext();

    useEffect(() => {
        if (errorMessage) {
            setFormState({type: StateType.Error, message: errorMessage});
        }else{
            setFormState({type: StateType.Default, message: defaultNote});
        }
    }, [errorMessage, defaultNote]);

    return (
        <StyledWrapper isHorizontal={isHorizontal}>
            <StyledLabel fill={colors.fill} htmlFor={formId}>{label}</StyledLabel>
            <StyledMessageWrapper msgColor={FormColors.Message[formState.type].text}>
                <StyledIconAnchor>
                    {children}
                </StyledIconAnchor>
                <div>{formState.message}</div>
            </StyledMessageWrapper>
        </StyledWrapper>
    )
}

export default FormBase;