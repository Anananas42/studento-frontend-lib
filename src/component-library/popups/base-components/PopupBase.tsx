import { FC, ReactNode, useEffect, useRef } from "react";
import { useThemeContext } from "../../ThemeProvider";
import styled from "styled-components";
import Sidenote from '../../utilities/Sidenote';
import { BtnCloseL } from '../../buttons/components/BtnClose';

interface IStyledPopupProps {
    borderRadius: string;
    fill: string;
    sectionPadding: string;
    sectionRadius: string;
}

interface IStyledPopupWrapper {
    width?: string;
}

const StyledBackground = styled.div`
    display: block;
    position: fixed;
    background-color: rgba(69, 65, 59, 0.75);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
`;

const StyledPopupWrapper = styled.div<IStyledPopupWrapper>`
    display: flex;
    position: fixed;
    flex-flow: column nowrap;
    gap: 16px;
    align-items: center;
    width: min-content;
    height: fit-content;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
`;

const StyledPopupContent = styled.div<IStyledPopupProps>`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    border-radius: ${props => props.sectionRadius};
    color: ${props => props.fill};
    background-color: #fff;
    box-shadow: 2px 2px 8px -2px rgba(69, 65, 59, 0.26);
    padding: ${props => props.sectionPadding};
    width: 100%;
    height: fit-content;
    font-size: 2rem;

    & > button:first-of-type {
        position: absolute;
        top: ${props => props.borderRadius};
        right: ${props => props.borderRadius};
    }
`;

const StyledTitle = styled.h2`
    font-size: 3.2rem;
    margin-top: 0;
    margin-bottom: 24px;
`;

interface IPopupBaseProps {
    title: string;
    sidenote?: string;
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    width?: string;
}

const PopupBase:FC<IPopupBaseProps> = (props) => {
    const { borderRadius, colors, sectionPadding, sectionRadius } = useThemeContext();
    const { title, sidenote, children, isOpen, setIsOpen, width } = props;

    const PopupBaseRef = useRef<any>();

    useEffect(() => {
        const checkClickOutside = (e: any) => {
            if (PopupBaseRef.current === null) {
                window.removeEventListener('click', checkClickOutside);
                return;
            }
    
            if (!PopupBaseRef.current.contains(e.target)) {
                setIsOpen(false);
                window.removeEventListener('click', checkClickOutside);
            }
        }

        PopupBaseRef && window.addEventListener('click', checkClickOutside);
        
        return () => {
            window.removeEventListener('click', checkClickOutside);
        }
    }, [setIsOpen]);

    return (
        <>
            {isOpen &&
            <StyledBackground>
                <StyledPopupWrapper ref={PopupBaseRef} width={width}>
                    <StyledPopupContent borderRadius={borderRadius} fill={colors.fill} sectionPadding={sectionPadding} sectionRadius={sectionRadius}>
                        <StyledTitle>{title}</StyledTitle>
                        <BtnCloseL onClick={() => setIsOpen(false)}/>
                        {children}
                    </StyledPopupContent>
                    {sidenote && <Sidenote>{sidenote}</Sidenote>}
                </StyledPopupWrapper>
            </StyledBackground>}
        </>
        
    )
}

export default PopupBase;