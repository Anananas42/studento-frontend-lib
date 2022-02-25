import { FC, ReactNode, useEffect, useState } from 'react';
import { useThemeContext } from '../ThemeProvider';
import styled from 'styled-components';

interface IStyledSystemNotification {
    colors: ISystemColors;
    borderRadius: string;
};

const StyledSystemNotification = styled.div<IStyledSystemNotification>`
    position: absolute;
    z-index: 9999;
    left: 50%;
    top: 40px;
    opacity: 1;
    transform: translateX(-50%);
    border-radius: ${props => props.borderRadius};
    color: ${props => props.colors.dark};
    background-color: ${props => props.colors.light};
    min-width: 260px;
    width: fit-content;
    user-select: none;
    cursor: pointer;
    font-size: 20px;
    line-height: 14px;
    font-weight: 700;
    text-align: center;
    padding: 18px 36px;
    border: 2px solid ${props => props.colors.dark};
    box-shadow: 0 4px 16px -2px ${props => props.colors.dark + "42"};
    animation-duration: 0.5s;
    animation-name: fadeIn;

    @keyframes fadeIn {
        from {
            opacity: 0;
            top: 0;
        }

        to {
            opacity: 1;
        }
    }

    &.fadeOut {
        animation-duration: 0.6s;
        animation-name: fadeOut;

        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    }

    :active {
        opacity: 0.8;
    }
`;

interface IProps {
    children: ReactNode;
    type: NotificationType;
    isForceHidden: boolean;
    isImmediate?: boolean;
}

interface ISystemColors {
    dark: string;
    light: string;  
}

const SystemNotification:FC<IProps> = (props) => {
    const outDurationMS = 500;
    const { isForceHidden, isImmediate } = props;
    const { colors, borderRadius, SystemNotificationDurationMS } = useThemeContext();
    const [isUnmounted, setIsUnmounted] = useState<boolean>(false);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsTransitioning(true);
        }, SystemNotificationDurationMS - outDurationMS);

        const timer2 = setTimeout(() => {
            setIsUnmounted(true);
        }, SystemNotificationDurationMS);

        return () => {clearTimeout(timer1); clearTimeout(timer2);}
    }, []);

    useEffect(() => {
        isForceHidden && forceClose(undefined);
    }, [isForceHidden]);

    const forceClose = (e:React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsTransitioning(true);
        setTimeout(() => {
            setIsUnmounted(true);
        }, isImmediate ? 0 : outDurationMS);
    }

    return (
        <>
            {!isUnmounted &&
            <StyledSystemNotification colors={colors.System[props.type]} borderRadius={borderRadius} className={isTransitioning ? "fadeOut" : ""} onClick={forceClose}>
                {props.children}
            </StyledSystemNotification>}
        </>
    )
}

export enum NotificationType {
    Error = "Error",
    Neutral = "Neutral",
    Success = "Success",
    Warning = "Warning"
}

export default SystemNotification;