import { FC, useState } from "react";
import PopupBase from "../base-components/PopupBase";
import { BtnConfirmL } from "../../buttons/components/BtnConfirm";
import { BtnTertiaryL } from "../../buttons/components/BtnTertiary";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";

interface IPopupConfirm {
    title: string;
    children?: string;
    sidenote?: string;
    btnText: string;
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

const PopupConfirm:FC<IPopupConfirm> = (props) => {
    const { title, children, btnText, event, sidenote } = props;
    const [ isOpened, setIsOpened ] = useState<boolean>(true);
    const { languageMap } = useThemeContext();

    return (
        <PopupBase title={title} isOpened={isOpened} setIsOpened={setIsOpened} sidenote={sidenote}>
            <div style={{textAlign: "center"}}>{children}</div>
            <StyledButtons>
                <BtnTertiaryL onClick={() => setIsOpened(false)}>{languageMap.Generic.cancel}</BtnTertiaryL>
                <BtnConfirmL icon={"check"} onClick={() => {setIsOpened(false); event()}}>{btnText}</BtnConfirmL>
            </StyledButtons>
        </PopupBase>
    )
}

export default PopupConfirm;