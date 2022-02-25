import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { useThemeContext } from '../ThemeProvider';
import styled from 'styled-components';

interface IStyledSystemNotification {
    colors: ISystemColors;
    borderRadius: string;
};

const StyledSystemNotification = styled.div<IStyledSystemNotification>`
    opacity: 1;
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
    isFading: boolean;
}

interface ISystemColors {
    dark: string;
    light: string;  
}

const SystemNotification:FC<IProps> = (props) => {
    const { type, isFading } = props;
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const { colors, borderRadius } = useThemeContext();
    const isMounted = useRef(false);

    useEffect(() => {
        console.log("running");
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 4500);

        return () => {clearTimeout(timer)};
    }, []);

    useEffect(() => {
        if (isMounted.current){
            console.log("transitioning");
            const timer = setTimeout(() => {
                setIsHidden(false);
            }, 500);

            return () => {clearTimeout(timer)};
        }else{
            isMounted.current = true;
        }
        
    }, [isTransitioning])

    return (
        <>
        {isHidden &&
            <StyledSystemNotification colors={colors.System[type]} borderRadius={borderRadius} className={isFading || isTransitioning ? "fadeOut" : ""} onClick={() => setIsTransitioning(true)}>
                {props.children}
            </StyledSystemNotification>
        }
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