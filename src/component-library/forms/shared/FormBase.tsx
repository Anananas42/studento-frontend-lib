import { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { borderRadius, useThemeContext } from "../../ThemeProvider";
import FormColors, { IFormState, StateType } from "./FormColors";
import FormStyles from "./FormStyles";

interface IStyledLabel {
    labelColor: string;
    borderRadius: string;
    isHorizontal?: boolean;
    isDisabled?: boolean;
}

const StyledLabel = styled.label<IStyledLabel>`
    color: ${props => props.labelColor};
    padding-left: ${props => props.isHorizontal ? 0 : `${parseInt(props.borderRadius.split("px", 1)[0])/1.5}px`};
    text-align: ${props => props.isHorizontal ? "right" : "left"};
    font-size: ${FormStyles.labelSize};
    width: ${props => props.isHorizontal ? "auto" : "fit-content"};
    padding-top: ${props => props.isHorizontal ? "0.9rem" : 0};
    padding-bottom: ${props => props.isHorizontal ? 0 : "1.0rem"};
    padding-right: ${props => props.isHorizontal ? "1.6rem" : 0};
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
    isCompact: boolean;
    isMessage?: string;
}

const StyledMessageWrapper = styled.div<IStyledMessageWrapper>`
    .message {
        color: ${props => props.isMessage ? props.msgColor : "transparent"};
        padding-left: ${props => `${parseInt(props.borderRadius.split("px", 1)[0])/1.5}px`};
        padding-top: 0.8rem;
        font-size: 1.7rem;
        line-height: 1.2rem;
        padding-bottom: ${props => props.isCompact ? "1.4rem" : "1.8rem"};
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
    const { isHorizontal, isDisabled, label, formId, defaultNote, errorMessage, children, isOptional, width } = props;
    const [formState, setFormState] = useState<IFormState>({type: isDisabled ? StateType.Disabled : StateType.Default, message: defaultNote});
    const { languageMap } = useThemeContext();
    const isCompact = props.isCompact || (props.isCompact === undefined && !errorMessage);

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
            <StyledLabel labelColor={FormColors[formState.type].label} borderRadius={borderRadius} isHorizontal={isHorizontal} htmlFor={formId ? formId : label} isDisabled={isDisabled}>
                {label}<span>{isOptional ? ` (${languageMap.Generic.optional})` : ""}</span>
            </StyledLabel>
            <StyledMessageWrapper msgColor={FormColors[formState.type].note} borderRadius={borderRadius} isMessage={defaultNote || errorMessage} isCompact={isCompact}>
                <StyledIconAnchor>
                    {children}
                </StyledIconAnchor>
                <div className={"message"}>{formState.message ? formState.message : (isCompact || isCompact === undefined ? "" : "|")}</div>
            </StyledMessageWrapper>
        </StyledWrapper>
    )
}

export default FormBase;