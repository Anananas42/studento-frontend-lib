import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import FormColors, { IFormState, StateType } from "../FormColors";

interface IStyledInput {
    borderRadius: string;
    fill: string;
}

const StyledInput = styled.input<IStyledInput>`
    border-radius: ${props => props.borderRadius};
    color: ${props => props.fill};
    border: 2px solid ${props => props.fill + "42"};
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

interface IFormProps {
    isHorizontal?: boolean;
    label: string;
    placeholder?: string;
    defaultNote?: string;
    formId: string;
    icon?: string;
    errorMessage?: string;
    isDisabled?: boolean;
}

const TextFormBase:FC<IFormProps> = (props) => {
    const { isHorizontal, label, formId, defaultNote, errorMessage, isDisabled, placeholder } = props;
    const [value, setValue] = useState<string>("");
    const [formState, setFormState] = useState<IFormState>({type: StateType.Default, message: defaultNote});
    const { borderRadius, colors } = useThemeContext();

    useEffect(() => {
        if (errorMessage) {
            setFormState({type: StateType.Error, message: errorMessage});
        }else{
            setFormState({type: StateType.Default, message: defaultNote});
        }
    }, [errorMessage])

    return (
        <StyledWrapper isHorizontal={isHorizontal}>
            <label htmlFor={formId}>{label}</label>
            <StyledMessageWrapper msgColor={FormColors.Message[formState.type].text}>
                <StyledIconAnchor>
                    <StyledInput type={"text"} id={formId} value={value} onChange={(e) => setValue(e.target.value)} borderRadius={borderRadius} fill={colors.fill} disabled={isDisabled} placeholder={placeholder}/>
                </StyledIconAnchor>
                <div>{formState.message}</div>
            </StyledMessageWrapper>
        </StyledWrapper>
    )
}

export default TextFormBase;