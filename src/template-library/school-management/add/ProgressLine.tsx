import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../../component-library/ThemeProvider";

interface IStyleProps {
    fill: string;
    secondary: string;
    disabled: string;
}

const StyledProgressLine = styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 64px;
    padding-bottom: 16px;

    > div::before {
        position: absolute;
        content: "";
        border-bottom: 4px solid ${props => props.disabled};
        width: 100%;
        top: 14px;
        left: -50%;
    }

    > div:first-child::before {
        content: none;
    }
`;

const StyledProgressItem = styled.div<IStyleProps>`
    position: relative;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        position: relative;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${props => props.disabled};
        margin-bottom: 6px;
        transform: rotate(-45deg);
        z-index: 1;

        > span {
            user-select: none;
            position: absolute;
            top: 3px;
            left: 130%;
            max-width: 90px;
            font-size: 20px;
            text-align: right;
            color: ${props => props.fill};
        }
    }

    &.completed > div {
        background: #4AA33E;
    }

    &.completed::before {
        border-color: #4AA33E;
    }

    &.active > div {
        background-color: ${props => props.secondary};
    }

    &.active::before {
        border-color: #4AA33E;
    }
`;

interface IProgressLineProps {
    steps: Array<string>;
    currentStep: number;
}

const ProgressLine:FC<IProgressLineProps> = (props) => {
    const { steps, currentStep } = props;
    const { colors } = useThemeContext();

    const styleProps = { fill: colors.fill, disabled: colors.fillDisabled, secondary: colors.secondary};

    return (
        <>
            <StyledProgressLine {...styleProps}>
                {steps.map((step, i) => {
                    return (
                    <StyledProgressItem key={i} className={i < currentStep ? "completed" : (i === currentStep ? "active" : "disabled")} {...styleProps}>
                        <div>
                            <span>{step}</span>
                        </div>
                    </StyledProgressItem>
                    )
                })}
            </StyledProgressLine>
        </>
    );
}

export default ProgressLine;