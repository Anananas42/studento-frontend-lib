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

const StyledToggle = styled.input`
    height: 0;
	width: 0;
	visibility: hidden;
    position: absolute;

    &:checked + label {
        background: ${ToggleColors.On.bg};
    }

    &:checked + label:after {
        left: calc(100% - 4px);
        transform: translateX(-100%);
    }
`;

interface IStyledToggleRow {
    width?: string;
    height?: string;
    fill: string;
}

const StyledToggleRow = styled.div<IStyledToggleRow>`
    display: flex;
	justify-content: flex-start;
	align-items: center;
	height: ${props => props.height ? props.height : "fit-content"};
    width: ${props => props.width ? props.width : "fit-content"};

    div:last-child {
        color: ${props => props.fill};
        padding-bottom: 2px;
        font-size: 18px;
        line-height: 20px;
        padding-left: 8px;
        user-select: none;
    }
`;

const StyledLabelToggle = styled.label`
    cursor: pointer;
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
        top: 4px;
        left: 4px;
        width: 16px;
	    height: 16px;
        background: ${ToggleColors.Off.toggle};
        border-radius: 16px;
        transition: 0.2s;
    };

    &:active:after {
        width: 24px;
        background: ${ToggleColors.On.toggle};
    }
`;

interface IToggleRowProps {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    label: string;
    height?: string;
    width?: string;
}

const ToggleRow:FC<IToggleRowProps> = (props) => {
    const { value, setValue, width, height, label } = props;
    const { colors } = useThemeContext();

    return (
        <StyledToggleRow width={width} height={height} fill={colors.fill}>
            <div>
                <StyledToggle type={"checkbox"} checked={value} onChange={() => 0}/>
                <StyledLabelToggle onClick={() => setValue(!value)}/>
            </div>
            <div onClick={() => setValue(!value)}>{label}</div>
        </StyledToggleRow>

    )
}

export default ToggleRow;