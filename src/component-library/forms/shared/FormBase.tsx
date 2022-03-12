import { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormColors, { IFormState, StateType } from "./FormColors";

interface IStyledLabel {
    labelColor: string;
    borderRadius: string;
    isHorizontal?: boolean;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const StyledLabel = styled.label<IStyledLabel>`
    color: ${props => props.labelColor};
    padding-left: ${props => props.isHorizontal ? 0 : `${parseInt(props.borderRadius.split("px", 1)[0])/1.5}px`};
    text-align: ${props => props.isHorizontal ? "right" : "left"};
    font-size: 18px;
    line-height: 20px;
    width: ${props => props.isHorizontal ? "auto" : "fit-content"};
    padding-top: ${props => props.isHorizontal ? "9px" : 0};
    padding-bottom: ${props => props.isHorizontal ? 0 : (props.isCompact ? "12px" : "19px")};
    padding-right: ${props => props.isHorizontal ? "16px" : 0};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    > span {
        padding-left: 4px;
        color: ${FormColors.Default.placeholder};
    }
`;

interface IStyledWrapper {
    isHorizontal?: boolean;
    width?: string;
}

const StyledWrapper = styled.div<IStyledWrapper>`
    display: flex;
    flex-direction: ${props => props.isHorizontal ? "row" : "column"};
    justify-content: ${props => props.isHorizontal ? "flex-end" : "flex-start"};
    gap: ${props => props.isHorizontal ? "16px" : ""};
    width: ${props => props.width ? props.width : "100%"};
`;

const StyledIconAnchor = styled.div`
    position: relative;
`;

interface IStyledMessageWrapper {
    msgColor: string;
    borderRadius: string;
    isCompact?: boolean;
    isMessage?: string;
}

const StyledMessageWrapper = styled.div<IStyledMessageWrapper>`
    padding-bottom: ${props => props.isCompact ? "24px" : 0};

    .message {
        color: ${props => props.isMessage ? props.msgColor : "transparent"};
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
    formId?: string;
    errorMessage?: string;
    isOptional?: boolean;
    isDisabled?: boolean;
    children: ReactNode;
    isCompact?: boolean;
    width?: string;
}

const FormBase:FC<IFormProps> = (props) => {
    const { isHorizontal, isDisabled, label, formId, defaultNote, errorMessage, children, isCompact, isOptional, width } = props;
    const [formState, setFormState] = useState<IFormState>({type: isDisabled ? StateType.Disabled : StateType.Default, message: defaultNote});
    const { borderRadius, languageMap } = useThemeContext();

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
        <StyledWrapper isHorizontal={isHorizontal} width={width}>
            <StyledLabel labelColor={FormColors[formState.type].label} borderRadius={borderRadius} isHorizontal={isHorizontal} htmlFor={formId ? formId : label} isDisabled={isDisabled} isCompact={isCompact}>
                {label}<span>{isOptional ? ` (${languageMap.Generic.optional})` : ""}</span>
            </StyledLabel>
            <StyledMessageWrapper msgColor={FormColors[formState.type].note} borderRadius={borderRadius} isCompact={isCompact} isMessage={defaultNote || errorMessage}>
                <StyledIconAnchor>
                    {children}
                </StyledIconAnchor>
                {!isCompact && <div className={"message"}>{formState.message ? formState.message : "|"}</div>}
            </StyledMessageWrapper>
        </StyledWrapper>
    )
}

export default FormBase;