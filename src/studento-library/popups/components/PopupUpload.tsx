import { FC, useState } from "react";
import PopupBase from "../base-components/PopupBase";
import { BtnPrimaryL } from "../../buttons/components/BtnPrimary";
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

interface IStyledUpload {
    borderRadius: string;
    fill: string;
}

const StyledButtons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
`;

const StyledUpload = styled.div<IStyledUpload>`
    padding: 40px;
    border: 2px dashed;
    color: ${props => props.fill};
    border-radius: ${props => props.borderRadius};
    text-align: "center";
`;

const PopupConfirm:FC<IPopupConfirm> = (props) => {
    const { borderRadius, colors } = useThemeContext();
    const { title, children, btnText, event, sidenote } = props;
    const [ isOpened, setIsOpened ] = useState<boolean>(true);

    return (
        <PopupBase title={title} isOpened={isOpened} setIsOpened={setIsOpened} sidenote={sidenote}>
            <StyledUpload borderRadius={borderRadius} fill={colors.fill}>
                {children}
            </StyledUpload>
            <StyledButtons>
                <BtnTertiaryL onClick={() => setIsOpened(false)}>cancel</BtnTertiaryL>
                <BtnPrimaryL icon={"upload"} onClick={() => {setIsOpened(false); event()}}>{btnText}</BtnPrimaryL>
            </StyledButtons>
        </PopupBase>
    )
}

export default PopupConfirm;