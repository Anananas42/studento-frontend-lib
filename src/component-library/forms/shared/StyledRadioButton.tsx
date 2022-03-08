import styled from "styled-components";

const RadioButtonColors = {
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

interface IStyledRadioButton {
    isError?: string;
}

// DISABLED STATE MISSING
const StyledRadioButton = styled.input<IStyledRadioButton>`
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    background: none;
    font: inherit;
    color: currentColor;
    width: 24px;
    height: 24px;
    border: 2px solid ${RadioButtonColors.Default.border};
    border-radius: 24px;
    display:inline-block;
    position: relative;
    box-shadow: inset 0 4px 8px ${RadioButtonColors.Default.innerShadow};

    :hover:not(&:disabled) {
        border-color: ${RadioButtonColors.Hover.border};
        box-shadow: inset 0 4px 16px ${RadioButtonColors.Hover.innerShadow};

        &:checked::before {
            background: ${RadioButtonColors.bg1};
        }
    }

    :active:not(&:disabled) {
        border-color: ${RadioButtonColors.Active.border};
        box-shadow: inset 0 4px 16px ${RadioButtonColors.Active.innerShadow};
    }

    &::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 14px;
        height: 14px;
        transform: scale(0);
        border-radius: 22px;
        top: 3px;
        left: 3px;
        background: linear-gradient(0, ${RadioButtonColors.bg1}, ${RadioButtonColors.bg2});
    }

    &:checked::before {
        content: "";
        transform: scale(1);
    }

`;

export default StyledRadioButton;