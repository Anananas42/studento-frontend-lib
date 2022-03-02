import styled from "styled-components";

const CheckboxColors = {
    border: "hsl(34.28571428571429, 17.948717948717945%, 45%)",
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
    border: 2px solid ${CheckboxColors.border};
    border-radius: 4px;
    transform: translateY(4px);
    display:inline-block;
    overflow: hidden;

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