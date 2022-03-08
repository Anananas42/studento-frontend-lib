import { FC } from "react";
import { IconL, IconM, IconS } from "../../utilities/Icon";
import BtnSizes from "../shared/ButtonSizes";
import BtnTertiaryBase from "../base-components/BtnTertiaryBase";

interface TertiaryProps {
    children?: string;
    icon?: string;
    isAfter?: boolean;
    onClick: Function;
    isDisabled?: boolean;
}

export const BtnTertiaryL:FC<TertiaryProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Large;
    const Icon = icon ? <IconL>{icon}</IconL> : undefined;

    return(
        <BtnTertiaryBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnTertiaryBase>
    )
}

export const BtnTertiaryM:FC<TertiaryProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Medium;
    const Icon = icon ? <IconM>{icon}</IconM> : undefined;

    return(
        <BtnTertiaryBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnTertiaryBase>
    )
}

export const BtnTertiaryS:FC<TertiaryProps> = (props) => {
    const { icon, isAfter, isDisabled, onClick, children } = props;
    const Sizes = BtnSizes.Small;
    const Icon = icon ? <IconS>{icon}</IconS> : undefined;

    return(
        <BtnTertiaryBase Sizes={Sizes} Icon={Icon} isAfter={isAfter} onClick={onClick} isDisabled={isDisabled}>
            {children}
        </BtnTertiaryBase>
    )
}