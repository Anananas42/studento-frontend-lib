import { FC, ReactNode, SetStateAction, useState } from "react";
import PopupBase from "../base-components/PopupBase";
import { BtnDangerL } from '../../buttons/components/BtnDanger';
import { BtnTertiaryL } from "../../buttons/components/BtnTertiary";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";

interface IPopupWarning {
    title?: string;
    children?: ReactNode;
    sidenote?: string;
    event: Function;
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<SetStateAction<boolean>>;
}

const StyledButtons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
`

const PopupLeaveProgress:FC<IPopupWarning> = (props) => {
    const { title, children, event, sidenote } = props;
    const [ isOpenLocal, setIsOpenLocal ] = useState<boolean>(true);
    const { languageMap } = useThemeContext();

    const isOpen = props.isOpen ? props.isOpen : isOpenLocal;
    const setIsOpen = props.isOpen && props.setIsOpen ? props.setIsOpen : setIsOpenLocal;

    return (
        <PopupBase title={title ? title : "Abort task"} isOpen={isOpen} setIsOpen={setIsOpen}
         sidenote={sidenote} width={"360px"}>
            <div style={{textAlign: "center"}}>{children}</div>
            <StyledButtons>
                <BtnTertiaryL onClick={() => setIsOpen(false)}>{languageMap.Generic.cancel.toUpperCase()}</BtnTertiaryL>
                <BtnDangerL icon={"delete"} onClick={() => {setIsOpen(false); event()}}>LEAVE</BtnDangerL>
            </StyledButtons>
        </PopupBase>
    )
}

export default PopupLeaveProgress;