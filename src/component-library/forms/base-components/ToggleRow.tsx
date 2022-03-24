import React, { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";

const ToggleColors = {
    shadow: "rgba(69, 60, 48, 0.06)",
    Off: {
        bg: "#453C30",
        toggle: "#fff",
    },
    On: {
        bg: "#1C5FFF",
        toggle: "#fff",
    }
}

interface IStyleProps {
    width?: string;
    height?: string;
    fill: string;
    fillDisabled: string;
    isDisabled?: boolean;
}

const StyledToggle = styled.input<IStyleProps>`
    height: 0;
	width: 0;
	visibility: hidden;
    position: absolute;

    &:checked + label {
        background-color: ${ToggleColors.On.bg};
    }

    &:checked + label:after {
        left: calc(100% - 3px);
        transform: translateX(-100%);
    }

    &:disabled + label {
        background-color: ${props => props.fillDisabled};
        color: ${props => props.fillDisabled};
    }
`;

const StyledToggleRow = styled.div<IStyleProps>`
    display: flex;
	justify-content: flex-start;
	align-items: center;
	height: ${props => props.height ? props.height : "fit-content"};
    width: ${props => props.width ? props.width : "fit-content"};

    div:last-child {
        color: ${props => props.isDisabled ? props.fillDisabled : props.fill};
        padding-bottom: 2px;
        font-size: 18px;
        line-height: 20px;
        padding-left: 8px;
        user-select: none;
    }
`;

const StyledLabelToggle = styled.label<IStyleProps>`
    cursor: ${props => !props.isDisabled && "pointer"};
	width: 40px;
	height: 24px;
	background: ${ToggleColors.Off.bg};
    box-shadow: 2px 2px 8px -2px ${ToggleColors.shadow};
	display: block;
	border-radius: 24px;
	position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 18px;
	    height: 18px;
        background: ${ToggleColors.Off.toggle};
        border-radius: 18px;
        transition: 0.2s;
    };

    &:active:after {
        ${props => !props.isDisabled && `
            width: 24px;
            background: ${ToggleColors.On.toggle};
        `}
    }

`;

interface IToggleRowProps {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    label: string;
    height?: string;
    width?: string;
    isDisabled?: boolean;
}

const ToggleRow:FC<IToggleRowProps> = (props) => {
    const { value, setValue, width, height, label, isDisabled } = props;
    const { colors } = useThemeContext();
    const styleProps = { width, height, fill: colors.fill, fillDisabled: colors.fillDisabled, isDisabled}

    return (
        <StyledToggleRow {...styleProps}>
            <div>
                <StyledToggle type={"checkbox"} checked={value} onChange={() => 0} disabled={isDisabled} {...styleProps}/>
                <StyledLabelToggle onClick={() => {!isDisabled && setValue(!value)}} {...styleProps} />
            </div>
            <div onClick={() => {!isDisabled && setValue(!value)}}>{label}</div>
        </StyledToggleRow>

    )
}

export default ToggleRow;