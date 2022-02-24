import { FC, ReactNode } from 'react';
import { useThemeContext } from '../ThemeProvider';
import styled from 'styled-components';

interface IStyledSystemState {
    colors: ISystemColors;
    borderRadius: string;
};

const StyledSystemState = styled.div<IStyledSystemState>`
    border-radius: ${props => props.borderRadius};
    color: ${props => props.colors.dark};
    background-color: ${props => props.colors.light};
    min-width: 260px;
    width: fit-content;
    user-select: none;
    font-size: 20px;
    line-height: 14px;
    font-weight: 500;
    text-align: center;
    padding: 18px 36px;
    border: 2px solid ${props => props.colors.dark};
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

    return (
        <StyledSystemState colors={colors.System[props.type]} borderRadius={borderRadius}>
            {props.children}
        </StyledSystemState>
    )
}

export enum StateType {
    Error = "Error",
    Neutral = "Neutral",
    Success = "Success",
    Warning = "Warning"
}

export default SystemState;