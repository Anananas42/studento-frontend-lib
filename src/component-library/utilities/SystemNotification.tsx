import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react';
import { borderRadius, useThemeContext } from '../ThemeProvider';
import styled from 'styled-components';

interface IStyledSystemNotification {
    colors: ISystemColors;
    borderRadius: string;
    animationHeight: number;
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
        animation-duration: 1s;
        animation-name: fadeOut;

        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            50% {
                opacity: 0;
                margin-top: 0;
            }
            to {
                margin-top: ${props => (-8 - props.animationHeight)}px;
                opacity: 0;
            }
        }
    }

    :active {
        filter: saturate(1.6);
    }
`;

interface IProps {
    children: ReactNode;
    type: NotificationType;
    isFading: boolean;
    removeCallback: () => void;
}

interface ISystemColors {
    dark: string;
    light: string;  
}

const SystemNotification:FC<IProps> = memo((props) => {
    const { type, isFading, removeCallback } = props;
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const { colors } = useThemeContext();
    const isMounted = useRef(false);

    const heightRef = useRef<any>();
    const [initHeight, setInitHeight] = useState<number>(0);

    useEffect(() => {
        setInitHeight(heightRef.current.offsetHeight);
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 4500);

        return () => {clearTimeout(timer)};
    }, []);

    useEffect(() => {
        if (isMounted.current){
            const timer = setTimeout(() => {
                setIsHidden(true);
            }, 950);

            return () => {clearTimeout(timer)};
        }else{
            isMounted.current = true;
        }
        
    }, [isTransitioning, isFading]);

    useEffect(() => {
        isHidden && removeCallback();
    }, [isHidden, removeCallback]);

    const onClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsTransitioning(true);
    }

    return (
        <>
        {!isHidden &&
            <StyledSystemNotification ref={heightRef} colors={colors.System[type]} borderRadius={borderRadius} className={isFading || isTransitioning ? "fadeOut" : ""} animationHeight={initHeight} onClick={onClick}>
                {props.children}
            </StyledSystemNotification>
        }
        </>
    )
})

export enum NotificationType {
    Error = "Error",
    Neutral = "Neutral",
    Success = "Success",
    Warning = "Warning"
}

export default SystemNotification;