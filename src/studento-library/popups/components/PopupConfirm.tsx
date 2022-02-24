import { FC, useState } from "react";
import PopupBase from "../base-components/PopupBase";
import { BtnConfirmL } from "../../buttons/components/BtnConfirm";
import { BtnTertiaryL } from "../../buttons/components/BtnTertiary";
import styled from "styled-components";

interface IPopupConfirm {
    title: string;
    children?: string;
    btnText: string;
}

const StyledButtons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-between;
    gap: 16px;
    margin-top: 24px;
`

const PopupConfirm:FC<IPopupConfirm> = (props) => {
    const { title, children, btnText } = props;
    const [ isOpened, setIsOpened ] = useState<boolean>(true);

    return (
        <PopupBase title={title} isOpened={isOpened} setIsOpened={setIsOpened}>
            {children}
            <StyledButtons>
                <BtnTertiaryL onClick={() => setIsOpened(false)}>cancel</BtnTertiaryL>
                <BtnConfirmL icon={"confirm"} onClick={() => setIsOpened(false)}>{btnText}</BtnConfirmL>
            </StyledButtons>
        </PopupBase>
    )
}

export default PopupConfirm;