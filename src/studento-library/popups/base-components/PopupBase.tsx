import { createRef, FC, ReactNode, useEffect } from "react";
import { useThemeContext } from "../../ThemeProvider";
import styled from "styled-components";
import Sidenote from '../../utilities/Sidenote';
import { BtnCloseL } from '../../buttons/components/BtnClose';

interface IStyledPopupProps {
    borderRadius: string;
}

interface IStyledOpened {
    isOpened: boolean;
}

interface IStyledPopupWrapper {
    width?: string;
}

const StyledBackground = styled.div<IStyledOpened>`
    display: ${props => props.isOpened ? "block" : "none"};
    position: absolute;
    background-color: rgba(69, 65, 59, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const StyledPopupWrapper = styled.div<IStyledPopupWrapper>`
    display: flex;
    position: absolute;
    flex-flow: column nowrap;
    gap: 16px;
    align-items: center;
    width: ${props => props.width ? props.width : "400px"};
    height: fit-content;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledPopupContent = styled.div<IStyledPopupProps>`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    border-radius: ${props => props.borderRadius};
    background-color: #fff;
    box-shadow: 2px 2px 8px -2px rgba(69, 65, 59, 0.26);
    padding: 32px;
    width: 100%;
    height: fit-content;
    font-size: 18px;

    & > button:first-of-type {
        position: absolute;
        top: ${props => props.borderRadius};
        right: ${props => props.borderRadius};
    }
`;

const StyledTitle = styled.h2`
    font-size: 32px;
    line-height: 22px;
    margin-top: 0;
    margin-bottom: 24px;
`;

interface IPopupBaseProps {
    title: string;
    sidenote?: string;
    children: ReactNode;
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    width?: string;
}

const PopupBase:FC<IPopupBaseProps> = (props) => {
    const { borderRadius } = useThemeContext();
    const { title, sidenote, children, isOpened, setIsOpened } = props;
    const PopupBaseRef = createRef<any>();

    const checkClickOutside = (e: any) => {
        if (!PopupBaseRef.current.contains(e.target)) {
            setIsOpened(false);
            window.removeEventListener('click', checkClickOutside);
        }
    }

    useEffect(() => {
        window.addEventListener("click", checkClickOutside);
        
        return () => {
           window.removeEventListener('click', checkClickOutside);
        }
    }, []);
    
    
    return (
        <StyledBackground isOpened={isOpened}>
            <StyledPopupWrapper ref={PopupBaseRef}>
                <StyledPopupContent borderRadius={borderRadius}>
                    <StyledTitle>{title}</StyledTitle>
                    <BtnCloseL onClick={() => setIsOpened(false)}/>
                    {children}
                </StyledPopupContent>
                {sidenote && <Sidenote>{sidenote}</Sidenote>}
            </StyledPopupWrapper>
        </StyledBackground>
    )
}

export default PopupBase;