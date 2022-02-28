import { FC, ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormColors, { IFormState, StateType } from "./FormColors";

interface IStyledLabel {
    labelColor: string;
    borderRadius: string;
    isHorizontal?: boolean;
    isDisabled?: boolean;
}

const StyledLabel = styled.label<IStyledLabel>`
    color: ${props => props.labelColor};
    padding-left: ${props => props.isHorizontal ? 0 : `${parseInt(props.borderRadius.split("px", 1)[0])/1.5}px`};
    font-size: 18px;
    line-height: 12px;
    width: 100%;
    padding-bottom: 19px;
`;

interface IStyledWrapper {
    isHorizontal?: boolean;
}

const StyledWrapper = styled.div<IStyledWrapper>`
    display: flex;
    flex-direction: ${props => props.isHorizontal ? "row" : "column"};
    width: 100%;
`;

const StyledIconAnchor = styled.div`
    position: relative;
`;

interface IStyledMessageWrapper {
    msgColor: string;
    borderRadius: string;
}

const StyledMessageWrapper = styled.div<IStyledMessageWrapper>`
    div:last-child {
        color: ${props => props.msgColor};
        padding-left: ${props => `${parseInt(props.borderRadius.split("px", 1)[0])/1.5}px`};
        padding-top: 8px;
        font-size: 17px;
        line-height: 12px;
        padding-bottom: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export interface IFormProps {
    isHorizontal?: boolean;
    label: string;
    defaultNote?: string;
    formId: string;
    errorMessage?: string;
    isDisabled?: boolean;
    children: ReactElement;
}

const FormBase:FC<IFormProps> = (props) => {
    const { isHorizontal, isDisabled, label, formId, defaultNote, errorMessage, children } = props;
    const [formState, setFormState] = useState<IFormState>({type: isDisabled ? StateType.Disabled : StateType.Default, message: defaultNote});
    const { borderRadius } = useThemeContext();

    useEffect(() => {
        if (isDisabled) {
            setFormState({type: StateType.Disabled, message: defaultNote});
        }else if (errorMessage) {
            setFormState({type: StateType.Error, message: errorMessage});
        }else{
            setFormState({type: StateType.Default, message: defaultNote});
        }
    }, [errorMessage, defaultNote, isDisabled]);

    return (
        <StyledWrapper isHorizontal={isHorizontal}>
            <StyledLabel labelColor={FormColors[formState.type].label} borderRadius={borderRadius} isHorizontal={isHorizontal} htmlFor={formId} isDisabled={isDisabled}>{label}</StyledLabel>
            <StyledMessageWrapper msgColor={FormColors[formState.type].note} borderRadius={borderRadius}>
                <StyledIconAnchor>
                    {children}
                </StyledIconAnchor>
                <div>{formState.message}</div>
            </StyledMessageWrapper>
        </StyledWrapper>
    )
}

export default FormBase;