import { FC } from "react";
import { IconL, IconM, IconS } from "../../utilities/Icon";
import BtnSizes from "../shared/ButtonSizes";
import BtnCTABase from "../base-components/BtnCTABase";

interface CTAProps {
    children?: string;
    icon?: string;
    isAfter?: boolean;
    onClick: Function;
    isDisabled?: boolean;
    width?: string;
}

export const BtnCTAL:FC<CTAProps> = (props) => {
    const { icon, ...rest } = props;
    const Sizes = BtnSizes.Large;
    const Icon = icon ? <IconL>{icon}</IconL> : undefined;

    return(
        <BtnCTABase Sizes={Sizes} Icon={Icon} {...rest} />
    )
}

export const BtnCTAM:FC<CTAProps> = (props) => {
    const { icon, ...rest } = props;
    const Sizes = BtnSizes.Medium;
    const Icon = icon ? <IconM>{icon}</IconM> : undefined;

    return(
        <BtnCTABase Sizes={Sizes} Icon={Icon} {...rest} />
    )
}

export const BtnCTAS:FC<CTAProps> = (props) => {
    const { icon, ...rest } = props;
    const Sizes = BtnSizes.Small;
    const Icon = icon ? <IconS>{icon}</IconS> : undefined;

    return(
        <BtnCTABase Sizes={Sizes} Icon={Icon} {...rest} />
    )
}