import { FC, ReactNode, useEffect, useState } from 'react';
import { useThemeContext } from '../ThemeProvider';
import styled from 'styled-components';

interface IStyledSystemState {
    colors: ISystemColors;
    borderRadius: string;
};

const StyledSystemState = styled.div<IStyledSystemState>`
    position: absolute;
    z-index: 9999;
    left: 50%;
    top: 40px;
    opacity: 0;
    transform: translateX(-50%);
    border-radius: ${props => props.borderRadius};
    color: ${props => props.colors.dark};
    background-color: ${props => props.colors.light};
    min-width: 260px;
    width: fit-content;
    user-select: none;
    font-size: 20px;
    line-height: 14px;
    font-weight: 700;
    text-align: center;
    padding: 18px 36px;
    border: 3px solid ${props => props.colors.dark};
    box-shadow: 0 4px 16px -2px ${props => props.colors.dark + "42"};
    animation-duration: 6s;
    animation-name: fade;

    @keyframes fade {
        from {
            opacity: 0;
        }

        20% {
            opacity: 1;
        }

        90% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`;

interface IProps {
    children: ReactNode;
    type: StateType
}

interface ISystemColors {
    dark: string;
    light: string;  
}

const SystemState:FC<IProps> = (props) => {
    const { colors, borderRadius } = useThemeContext();
    const [isUnmounted, setIsUnmounted] = useState<boolean>(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsUnmounted(true), 8000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!isUnmounted &&
            <StyledSystemState colors={colors.System[props.type]} borderRadius={borderRadius}>
                {props.children}
            </StyledSystemState>}
        </>
    )
}

export enum StateType {
    Error = "Error",
    Neutral = "Neutral",
    Success = "Success",
    Warning = "Warning"
}

export default SystemState;