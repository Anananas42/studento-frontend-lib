import { FC } from "react";
import { IconL, IconM, IconS } from "../../utilities/Icon";
import BtnSizes from "../shared/ButtonSizes";
import BtnLinkBase from "../base-components/BtnLinkBase";

interface LinkProps {
    children?: string;
    icon?: string;
    isAfter?: boolean;
    onClick: Function;
    isDisabled?: boolean;
    width?: string;
}

export const BtnLinkL:FC<LinkProps> = (props) => {
    const { icon, ...rest } = props;
    const Sizes = BtnSizes.Large;
    const Icon = icon ? <IconL>{icon}</IconL> : undefined;

    return(
        <BtnLinkBase Sizes={Sizes} Icon={Icon} {...rest} />
    )
}

export const BtnLinkM:FC<LinkProps> = (props) => {
    const { icon, ...rest } = props;
    const Sizes = BtnSizes.Medium;
    const Icon = icon ? <IconM>{icon}</IconM> : undefined;

    return(
        <BtnLinkBase Sizes={Sizes} Icon={Icon} {...rest} />
    )
}

export const BtnLinkS:FC<LinkProps> = (props) => {
    const { icon, ...rest } = props;
    const Sizes = BtnSizes.Small;
    const Icon = icon ? <IconS>{icon}</IconS> : undefined;

    return(
        <BtnLinkBase Sizes={Sizes} Icon={Icon} {...rest} />
    )
}