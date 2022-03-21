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
    const [ isOpen, setIsOpen ] = useState<boolean>(true);

    return (
        <PopupBase title={title} isOpen={isOpen} setIsOpen={setIsOpen} sidenote={sidenote}>
            <div style={{textAlign: "center"}}>{children}</div>
            <StyledButton>
                <BtnConfirmL onClick={() => setIsOpen(false)}>{btnText}</BtnConfirmL>
            </StyledButton>
        </PopupBase>
    )
}

export default PopupSuccess;