import { FC } from "react";
import { IconL, IconM, IconS } from "../../utilities/Icon";
import BtnSizes from "../shared/ButtonSizes";
import BtnConfirmBase from "../base-components/BtnConfirmBase";

interface ConfirmProps {
    children?: string;
    icon?: string;
    isAfter?: boolean;
    onClick: Function;
    isDisabled?: boolean;
}

export const BtnConfirmL:FC<ConfirmProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Large;
    const Icon = icon ? <IconL>{icon}</IconL> : undefined;

    return(
        <BtnConfirmBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnConfirmBase>
    )
}

export const BtnConfirmM:FC<ConfirmProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Medium;
    const Icon = icon ? <IconM>{icon}</IconM> : undefined;

    return(
        <BtnConfirmBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnConfirmBase>
    )
}

export const BtnConfirmS:FC<ConfirmProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Small;
    const Icon = icon ? <IconS>{icon}</IconS> : undefined;

    return(
        <BtnConfirmBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnConfirmBase>
    )
}