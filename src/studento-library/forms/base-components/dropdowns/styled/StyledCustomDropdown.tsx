import styled from "styled-components";
import FormColors from "../../../shared/FormColors";
import { IStyledSelect } from "./StyledAccessibleSelect";

export const StyledCustomDropdown = styled.div<IStyledSelect>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.width ? props.width : "100%"};
    font-size: 20px;
    line-height: 20px;
    height: 42px;
    padding: 0;
    border: 1px solid ${props => props.errorMessage ? FormColors.Error.border : (props.isOpen ? FormColors.Active.border : FormColors.Default.border)};
    border-radius: ${props => props.isOpen? `${props.borderRadius} ${props.borderRadius} 0 0` : props.borderRadius};
    outline: ${props => props.isOpen ? `${FormColors.Active.border} solid 1px` : 0};
    box-shadow: inset 0 4px 8px ${props => props.isOpen ? FormColors.Active.innerShadow : FormColors.Default.innerShadow};
    background-color: white;
    color: ${props => props.placeholderFill};
    font-family: 'Varela Round', sans-serif;
    margin: 0;
    user-select: none;
    transition: ${props => props.isOpen ? "box-shadow 0.2s ease-in-out" : ""};

    -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;

    @media (hover: hover) {
        display: block;
    }

    ${props => props.isDisabled ? `
        box-shadow: none;
        background-color: ${FormColors.Disabled.background};
    ` : ""}

`;

export const StyledChevron = styled.div<IStyledSelect>`
    position: absolute;
    color: ${props => props.isDisabled ? FormColors.Disabled.placeholder : props.fill};
    top: -4px;
    right: 0;
    user-select: none;
    transform: ${props => props.isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.25s ease-in-out;
    pointer-events: none;
`;

export const StyledList = styled.div<IStyledSelect>`
    position: absolute;
    margin: 1px 0 0 0;
    padding: 0;
    width: ${props => props.width ? props.width : "100%"};
    background-color: white;
    color: ${props => props.fill};
    border: 1px solid ${FormColors.Default.border};
    border-top: 0;
    outline: 1px solid ${FormColors.Default.border};
    border-radius: 0 0 ${props => props.borderRadius} ${props => props.borderRadius};
    box-shadow: 2px 8px 16px -2px ${FormColors.Default.dropdownShadow};
    user-select: none;
    overflow-y: auto;
    max-height: 400px;
    z-index: 5;

    display: ${props => props.isOpen? "block" : "none"};
`;

export const StyledOption = styled.div<IStyledSelect>`
    font-size: 20px;
    line-height: 20px;
    padding: 12px 16px;
    border-bottom: 1px solid ${FormColors.Default.border};
    user-select: none;

    :hover {
        background: linear-gradient(45deg, ${FormColors.Default.hoverBg1}, ${FormColors.Default.hoverBg2});
    }

    &:last-child {
        border: 0;
    }

    &.guessed {
        background: linear-gradient(45deg, ${FormColors.Default.hoverBg1}, ${FormColors.Default.hoverBg2});
    }
`;

export const StyledGroupTitle = styled.div<IStyledSelect>`
    font-size: 17px;
    line-height: 17px;
    font-weight: bold;
    color: ${FormColors.Default.placeholder};
    padding: 8px 16px;
    background-color: ${FormColors.Default.innerShadow};
`;

export const StyledCurrentSelection = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0 0 16px;
    line-height: 20px;
`;