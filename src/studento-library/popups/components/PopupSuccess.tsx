import { FC, useState } from "react";
import PopupBase from "../base-components/PopupBase";
import { BtnConfirmL } from '../../buttons/components/BtnConfirm';
import styled from "styled-components";

interface IPopupSuccess {
    title: string;
    children?: string;
    sidenote?: string;
    btnText: string;
}

const StyledButton = styled.div`
    margin-top: 24px;
`

const PopupSuccess:FC<IPopupSuccess> = (props) => {
    const { title, children, btnText, sidenote } = props;
    const [ isOpened, setIsOpened ] = useState<boolean>(true);

    return (
        <PopupBase title={title} isOpened={isOpened} setIsOpened={setIsOpened} sidenote={sidenote}>
            <div style={{textAlign: "center"}}>{children}</div>
            <StyledButton>
                <BtnConfirmL onClick={() => setIsOpened(false)}>{btnText}</BtnConfirmL>
            </StyledButton>
        </PopupBase>
    )
}

export default PopupSuccess;