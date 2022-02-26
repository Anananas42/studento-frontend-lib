import { createRef, FC, useEffect, useRef, useState } from "react";
import PopupBase from "../base-components/PopupBase";
import { BtnPrimaryL } from "../../buttons/components/BtnPrimary";
import { BtnTertiaryL } from "../../buttons/components/BtnTertiary";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import DragAndDrop from '../../utilities/DragAndDrop';
import { NotificationType } from "../../utilities/SystemNotification";

interface IPopupUpload {
    title: string;
    sidenote?: string;
    fileHandler: (file: any) => string | void;
    maxSizeMB: number;
}

interface IStyledUpload {
    borderRadius: string;
    fill: string;
    isDragOver: boolean;
    width?: number;
    height?: number;
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
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: center;
    padding: 40px;
    border: 2px dashed;
    width: ${props => props.width ? `${props.width}px` : "auto"};
    height: ${props => props.height ? `${props.height}px` : "auto"};
    color: ${props => props.fill};
    user-select: none;
    cursor: pointer;
    border-radius: ${props => props.borderRadius};
    text-align: "center";
    background-color: ${props => props.isDragOver ? "rgba(69, 65, 59, 0.4)" : "#fff"};
    background-clip: padding-box;
    overflow: hidden;
    overflow-wrap: break-word;

    :hover {
        background-color: rgba(69, 65, 59, 0.2);
    }

    :active {
        background-color: rgba(69, 65, 59, 0.4);
    }
    
`;

const StyledHiddenInput = styled.input`
    display: none;
`;

const PopupUpload:FC<IPopupUpload> = (props) => {
    const { borderRadius, colors, pushSystemNotification, clearSystemNotifications } = useThemeContext();
    const { title, fileHandler, sidenote, maxSizeMB } = props;
    const [isOpened, setIsOpened] = useState<boolean>(true);
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [file, setFile] = useState<File>();

    const UploadRef = useRef<any>();
    const HiddenInputRef = useRef<any>();
    const [initWidth, setInitWidth] = useState<number | undefined>();
    const [initHeight, setInitHeight] = useState<number | undefined>();

    const inputClick = (e:any) => {
        HiddenInputRef.current.click();
    };

    const onUploadClick = (file:File) => {
        if (file.size > maxSizeMB * 1e6) {
            pushSystemNotification({text: `Uploaded file exceeds size of ${maxSizeMB} MB.`, type: NotificationType.Error});
            setFile(undefined);
            return;
        }

        const error = fileHandler(file);

        if (error) {
            pushSystemNotification({text: error, type: NotificationType.Error});
            setFile(undefined);
            return;
        }

        setIsOpened(false);
    }

    useEffect(() => {
        setInitWidth(UploadRef.current.offsetWidth);
        setInitHeight(UploadRef.current.offsetHeight);
    }, [UploadRef]);

    return (
        <>{!file && isOpened}
            <PopupBase title={title} isOpened={isOpened} setIsOpened={setIsOpened} sidenote={sidenote}>
                <DragAndDrop setIsDragOver={setIsDragOver} fileHandler={(files:any) => setFile(files[0])}>
                    <StyledUpload ref={UploadRef} borderRadius={borderRadius} fill={colors.fill} isDragOver={isDragOver} width={initWidth} height={initHeight} onClick={inputClick}>
                        <StyledHiddenInput ref={HiddenInputRef} type="file" name="file" onChange={e => e.target.files && e.target.files.length > 0 && setFile(e.target.files[0])}/>
                        {isDragOver ? `Nahrát soubor...` : (file ? <span style={{fontWeight: 700}}>{file.name}</span> : <span>Přetáhni, nebo klikni a zvol soubor pro nahrání.<br/>(max. {maxSizeMB} MB)</span>)}
                    </StyledUpload>
                </DragAndDrop>
                <StyledButtons>
                    <BtnTertiaryL onClick={() => {setIsOpened(false); clearSystemNotifications()}}>CANCEL</BtnTertiaryL>
                    <BtnPrimaryL icon={"upload"} onClick={() => file && onUploadClick(file)} isDisabled={file === undefined}>upload</BtnPrimaryL>
                </StyledButtons>
            </PopupBase>
        </>
    )
}

export default PopupUpload;