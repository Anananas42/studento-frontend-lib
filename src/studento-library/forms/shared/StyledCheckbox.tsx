import styled from "styled-components";

const CheckboxColors = {
    bg1: "#FFBB3D",
    bg2: "#FFD53D",
    Default: {
        innerShadow: "rgba(69, 60, 48, 0.06)",
        border: "hsl(34.28571428571429, 17.948717948717945%, 50%)",
    },
    Hover: {
        innerShadow: "hsla(38.96907216494845, 100%, 81.96078431372549%, 0.5)",
        border: "hsl(34.28571428571429, 17.948717948717945%, 35%)",
    },
    Active: {
        innerShadow: "hsla(38.96907216494845, 100%, 81.96078431372549%, 0.8)",
        border: "hsl(34.28571428571429, 17.948717948717945%, 55%)",
    }
}

interface IStyledCheckbox {
    isError?: string;
}

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
    overflow: hidden;
    box-shadow: inset 0 4px 8px ${CheckboxColors.Default.innerShadow};

    :hover {
        border-color: ${CheckboxColors.Hover.border};
        box-shadow: inset 0 4px 16px ${CheckboxColors.Hover.innerShadow};
    }

    :active {
        border-color: ${CheckboxColors.Active.border};
        box-shadow: inset 0 4px 16px ${CheckboxColors.Active.innerShadow};
    }

    &::before {
        content: "";
        display:inline-block;
        width: 100%;
        height: 100%;
        transform: scale(0);
        background-color: aqua;
    }

    &:checked::before {
        transform: scale(1);
    }

`;

export default StyledCheckbox;