import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../component-library/ThemeProvider";

interface IStyleProps {
    fill: string;
    secondary: string;
    disabled: string;
}

const StyledProgressLine = styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    width: min(100%, 80vw);
    min-width: 600px;
    margin-top: 32px;
    padding-bottom: 8px;

    > div::before {
        position: absolute;
        content: "";
        border-bottom: 4px solid ${props => props.disabled};
        width: 100%;
        top: 12px;
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
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: ${props => props.disabled};
        margin-bottom: 16px;
        z-index: 1;

        > span {
            user-select: none;
            position: absolute;
            bottom: 120%;
            left: 40%;
            transform: translateX(-50%);
            white-space: nowrap;
            font-size: 20px;
            color: ${props => props.fill};
        }
    }

    &.completed > div {
        background: #26B013;
    }

    &.completed::before {
        border-color: #26B013;
    }

    &.active > div {
        background-color: ${props => props.secondary};
    }

    &.active::before {
        border-color: #26B013;
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