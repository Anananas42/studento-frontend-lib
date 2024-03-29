import { FC, useState } from "react";
import PopupBase from "../base-components/PopupBase";
import { BtnDangerL } from '../../buttons/components/BtnDanger';
import { BtnTertiaryL } from "../../buttons/components/BtnTertiary";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";

interface IPopupDelete {
    title: string;
    children?: string;
    sidenote?: string;
    event: Function;
}

const StyledButtons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
`

const PopupDelete:FC<IPopupDelete> = (props) => {
    const { title, children, event, sidenote } = props;
    const [ isOpen, setIsOpen ] = useState<boolean>(true);
    const { languageMap } = useThemeContext();

    return (
        <PopupBase title={title} isOpen={isOpen} setIsOpen={setIsOpen} sidenote={sidenote} width={"360px"}>
            <div style={{textAlign: "center"}}>{children}</div>
            <StyledButtons>
                <BtnTertiaryL onClick={() => setIsOpen(false)}>{languageMap.Generic.cancel}</BtnTertiaryL>
                <BtnDangerL icon={"delete"} onClick={() => {setIsOpen(false); event()}}>{languageMap.Generic.delete}</BtnDangerL>
            </StyledButtons>
        </PopupBase>
    )
}

export default PopupDelete;