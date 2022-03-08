import { FC } from "react";
import { IconL, IconM, IconS } from "../../utilities/Icon";
import BtnSizes from "../shared/ButtonSizes";
import BtnOutlineBase from "../base-components/BtnOutlineBase";

interface OutlineProps {
    children?: string;
    icon?: string;
    isAfter?: boolean;
    onClick: Function;
    isDisabled?: boolean;
}

export const BtnOutlineL:FC<OutlineProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Large;
    const Icon = icon ? <IconL>{icon}</IconL> : undefined;

    return(
        <BtnOutlineBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnOutlineBase>
    )
}

export const BtnOutlineM:FC<OutlineProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Medium;
    const Icon = icon ? <IconM>{icon}</IconM> : undefined;

    return(
        <BtnOutlineBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnOutlineBase>
    )
}

export const BtnOutlineS:FC<OutlineProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Small;
    const Icon = icon ? <IconS>{icon}</IconS> : undefined;

    return(
        <BtnOutlineBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnOutlineBase>
    )
}