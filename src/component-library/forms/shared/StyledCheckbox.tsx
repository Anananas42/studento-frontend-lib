import styled from "styled-components";

const CheckboxColors = {
    bg1: "#1C5FFF",
    bg2: "#1C9EFF",
    Default: {
        innerShadow: "rgba(69, 60, 48, 0.06)",
        border: "hsl(33.749999999999986, 19.51219512195122%, 78%)",
    },
    Hover: {
        innerShadow: "hsla(38.96907216494845, 100%, 81.96078431372549%, 0.5)",
        border: "hsl(33.749999999999986, 19.51219512195122%, 53%)",
    },
    Active: {
        innerShadow: "hsla(38.96907216494845, 100%, 81.96078431372549%, 0.8)",
        border: "hsl(33.749999999999986, 19.51219512195122%, 64%)",
    }
}

interface IStyledCheckbox {
    isError?: string;
}

// DISABLED STATE MISSING
const StyledCheckbox = styled.input<IStyledCheckbox>`
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    background: none;
    font: inherit;
    color: currentColor;
    width: 24px;
    height: 24px;
    border: 2px solid ${CheckboxColors.Default.border};
    border-radius: 4px;
    transform: translateY(4px);
    display:inline-block;
    position: relative;
    box-shadow: inset 0 4px 8px ${CheckboxColors.Default.innerShadow};

    :hover:not(&:disabled) {
        border-color: ${CheckboxColors.Hover.border};
        box-shadow: inset 0 4px 16px ${CheckboxColors.Hover.innerShadow};

        &:checked::before {
            background: ${CheckboxColors.bg1};
        }
    }

    :active:not(&:disabled) {
        border-color: ${CheckboxColors.Active.border};
        box-shadow: inset 0 4px 16px ${CheckboxColors.Active.innerShadow};
    }

    &::before {
        content: "";
        display: inline-block;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        transform: scale(0);
        background: linear-gradient(45deg, ${CheckboxColors.bg1}, ${CheckboxColors.bg2});
    }

    &:checked::before {
        content: "";
        transform: scale(1.21);
        border-radius: 4px;
        transition: transform 0.5s ease-in-out -0.3s;
    }

    &:checked::after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 110%;
        height: 100%;
        top: -2px;
        left: -2px;
        clip-path: path('M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z');
        background: #fff;
        z-index: 9000;
    }

`;

export default StyledCheckbox;