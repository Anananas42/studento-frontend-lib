import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../buttons/colors/TextColors";
import LanguageForm from "../../forms/components/LanguageForm";
import { useThemeContext } from "../../ThemeProvider";
import { useUserContext } from "../../UserProvider";
import { Icon } from "../../utilities/Icon";
import StyledLink from "../../utilities/StyledLink";
import NavFeatureTiles, { IFeatureTiles } from "./NavFeatureTiles";
import NavLoginBtn from "./NavLoginBtn";
import NavLogoBtn from "./NavLogoBtn";
import NavUserStatus from "./NavUserStatus";

interface IStyleProps {
    fill: string;
    borderRadius: string;
    navbarBg: string;
}

const StyledNavbarBase = styled.nav<IStyleProps>`
    position: fixed;
    top: 0;
    width: 1900px;
    max-width: 100vw;
    margin: 0 32px;
    z-index: 5;
    height: 74px;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    background-color: ${props => props.navbarBg};
    z-index: 100;
`;

const StyledLeftNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: fit-content;
    height: 100%;
    padding-left: 16px;
`;

const StyledRightNavbar = styled.div`
    display: flex;
    width: fit-content;
    padding-right: 64px;
    padding-left: 8px;

    > div:last-child {
        padding-left: 8px;
    }
`;

const StyledMiddleButton = styled.div<IStyleProps>`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${props => props.fill};
    border-radius: ${props => props.borderRadius};
    user-select: none;
    cursor: pointer;
    padding: 16px;
    font-size: 20px;
    line-height: 20px;
    white-space: nowrap;

    :hover {
        background-color: ${TextColors.Hover.bg};
    }

    :active {
        background-color: ${TextColors.Active.bg};
    }

    div {
        padding-right: 0;
    }

    > span {
        padding-top: 3px;
    }
`;

interface INavButtons {
    [key: string]: {
        title: string;
        icon?: string;
        url: string;
    }
}

interface INavbarProps {
    featureTiles?: IFeatureTiles;
    navButtons: INavButtons;
}

const NavbarBase:FC<INavbarProps> = (props) => {
    const { featureTiles, navButtons } = props;
    const { colors, borderRadius } = useThemeContext();
    const { userStatus } = useUserContext();

    const styleProps = { fill: colors.fill, borderRadius, navbarBg: colors.navbarBg };

    return (
        <StyledNavbarBase {...styleProps}>
            <StyledLeftNavbar>
                <NavLogoBtn />
                {featureTiles && <NavFeatureTiles featureTiles={featureTiles}/>}
                {Object.values(navButtons).map(btn => {
                    return (
                        <StyledLink to={btn.url} key={btn.title} >
                            <StyledMiddleButton {...styleProps}>
                                {btn.icon && <Icon fontSize={"27px"} width={'27px'} height={'27px'}>{btn.icon}</Icon>}
                                <span>{btn.title}</span>
                            </StyledMiddleButton>
                        </StyledLink>
                    )
                })}
            </StyledLeftNavbar>
            <StyledRightNavbar>
                {userStatus ? <NavUserStatus/> : <NavLoginBtn />}
                <LanguageForm />
            </StyledRightNavbar>
        </StyledNavbarBase>
    )
}

export default NavbarBase;