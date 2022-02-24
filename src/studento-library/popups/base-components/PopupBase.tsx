import { createRef, FC, useEffect, useState } from "react";
import styled from "styled-components";

interface IStyledPopupBase {
    isOpened: boolean;
}

const StyledPopupBase = styled.div<IStyledPopupBase>`
    display: ${props => props.isOpened ? "block" : "none"};
    position: absolute;
    background-color: #000;
    top: 200px;
    left: 400px;
    width: 300px;
    height: 100px;
`;

const PopupBase:FC = (props) => {
    const PopupBaseRef = createRef<any>();
    const [isOpened, setIsOpened] = useState<boolean>(true);

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
        <StyledPopupBase ref={PopupBaseRef} isOpened={isOpened}></StyledPopupBase>
    )
}

export default PopupBase;