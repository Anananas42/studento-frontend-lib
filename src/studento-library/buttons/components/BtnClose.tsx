import { FC } from "react";
import { IconL, IconM, IconS } from "../shared/Icon";
import BtnSizes from "../shared/ButtonSizes";
import BtnCloseBase from "../base-components/BtnCloseBase";

interface CloseProps {
    icon?: string;
    onClick: Function;
    isDisabled?: boolean;
}

export const BtnCloseL:FC<CloseProps> = (props) => {
    const { icon, isDisabled, onClick } = props;
    const Sizes = BtnSizes.Large;
    const Icon = <IconL>{icon ? icon : "close"}</IconL>;

    return(
        <BtnCloseBase Sizes={Sizes} Icon={Icon} onClick={onClick} isDisabled={isDisabled} />
    )
}

export const BtnCloseM:FC<CloseProps> = (props) => {
    const { icon, isDisabled, onClick } = props;
    const Sizes = BtnSizes.Medium;
    const Icon = <IconM>{icon ? icon : "close"}</IconM>;

    return(
        <BtnCloseBase Sizes={Sizes} Icon={Icon} onClick={onClick} isDisabled={isDisabled} />
    )
}

export const BtnCloseS:FC<CloseProps> = (props) => {
    const { icon, isDisabled, onClick } = props;
    const Sizes = BtnSizes.Small;
    const Icon = <IconS>{icon ? icon : "close"}</IconS>;

    return(
        <BtnCloseBase Sizes={Sizes} Icon={Icon} onClick={onClick} isDisabled={isDisabled} />
    )
}