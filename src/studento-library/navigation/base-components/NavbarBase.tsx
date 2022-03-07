import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../buttons/colors/TextColors";
import LanguageForm from "../../forms/components/LanguageForm";
import { useThemeContext } from "../../ThemeProvider";
import { Icon } from "../../utilities/Icon";
import StyledLink from "../../utilities/StyledLink";
import NavFeatureTiles, { IFeatureTiles } from "./NavFeatureTiles";
import NavLoginBtn from "./NavLoginBtn";
import NavLogoBtn from "./NavLogoBtn";
import NavUserStatus, { IUserStatus } from "./NavUserStatus";

interface IStyleProps {
    fill: string;
    borderRadius: string;
}

const StyledNavbarBase = styled.nav`
    position: fixed;
    top: 0;
    width: min(100vw, 1800px);
    margin: 0 32px;
    z-index: 5;
    height: 74px;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
`;

const StyledLeftNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: fit-content;
    height: 100%;
`;

const StyledRightNavbar = styled.div`
    display: flex;
    width: fit-content;

    > div:last-child {
        padding-left: 16px;
        margin-right: 64px;
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
    userStatus?: IUserStatus;
    featureTiles?: IFeatureTiles;
    navButtons: INavButtons;
}

const NavbarBase:FC<INavbarProps> = (props) => {
    const { userStatus, featureTiles, navButtons } = props;
    const { colors, borderRadius } = useThemeContext();

    return (
        <StyledNavbarBase>
            <StyledLeftNavbar>
                <NavLogoBtn logoUrl={userStatus ? userStatus.dashboardUrl : "/"}/>
                {featureTiles && <NavFeatureTiles featureTiles={featureTiles}/>}
                {Object.values(navButtons).map(btn => {
                    return (
                        <StyledLink to={btn.url} key={btn.title} >
                            <StyledMiddleButton fill={colors.fill} borderRadius={borderRadius}>
                                {btn.icon && <Icon fontSize={"27px"} width={'27px'} height={'27px'}>{btn.icon}</Icon>}
                                <span>{btn.title}</span>
                            </StyledMiddleButton>
                        </StyledLink>
                    )
                })}
            </StyledLeftNavbar>
            <StyledRightNavbar>
                {userStatus ? <NavUserStatus userStatus={userStatus}/> : <NavLoginBtn />}
                <LanguageForm />
            </StyledRightNavbar>
        </StyledNavbarBase>
    )
}

export default NavbarBase;