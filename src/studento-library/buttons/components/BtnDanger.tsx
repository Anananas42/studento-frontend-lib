import { FC } from "react";
import { IconL, IconM, IconS } from "../../utilities/Icon";
import BtnSizes from "../shared/ButtonSizes";
import BtnDangerBase from "../base-components/BtnDangerBase";

interface DangerProps {
    children?: string;
    icon?: string;
    isAfter?: boolean;
    onClick: Function;
    isDisabled?: boolean;
}

export const BtnDangerL:FC<DangerProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Large;
    const Icon = icon ? <IconL>{icon}</IconL> : undefined;

    return(
        <BtnDangerBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnDangerBase>
    )
}

export const BtnDangerM:FC<DangerProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Medium;
    const Icon = icon ? <IconM>{icon}</IconM> : undefined;

    return(
        <BtnDangerBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnDangerBase>
    )
}

export const BtnDangerS:FC<DangerProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Small;
    const Icon = icon ? <IconS>{icon}</IconS> : undefined;

    return(
        <BtnDangerBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnDangerBase>
    )
}