import { FC } from "react";
import styled from "styled-components";
import LanguageForm from "../../forms/components/LanguageForm";
import { useThemeContext } from "../../ThemeProvider";
import { Icon } from "../../utilities/Icon";
import NavFeatureTiles, { IFeatureTiles } from "./NavFeatureTiles";
import NavLoginBtn from "./NavLoginBtn";
import NavLogoBtn from "./NavLogoBtn";
import NavUserStatus, { IUserStatus } from "./NavUserStatus";

interface IStyleProps {
    fill: string;
}

const StyledNavbarBase = styled.nav`
    position: fixed;
    top: 0;
    width: min(100vw, 1800px);
    margin-left: 64px;
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
    width: 600px;
    height: 100%;
`;

const StyledRightNavbar = styled.div`
    display: flex;
    width: 600px;

    > div:last-child {
        padding-left: 16px;
        margin-right: 64px;
    }
`;

const StyledMiddleButton = styled.div<IStyleProps>`
    display: flex;
    gap: 16px;
    align-items: center;
    color: ${props => props.fill};
    user-select: none;
    cursor: pointer;
    padding: 16px;
    font-size: 20px;
    line-height: 20px;
`;

interface INavButtons {
    [key: string]: {
        title: string;
        icon?: string;
        url: string;
    }
}

interface NavbarProps {
    userStatus?: IUserStatus;
    featureTiles?: IFeatureTiles;
    navButtons: INavButtons;
}

const NavbarBase:FC<NavbarProps> = (props) => {
    const { userStatus, featureTiles, navButtons } = props;
    const { colors } = useThemeContext();

    return (
        <StyledNavbarBase>
            <StyledLeftNavbar>
                <NavLogoBtn />
                {featureTiles && <NavFeatureTiles featureTiles={featureTiles}/>}
                {Object.values(navButtons).map(btn => {
                    return (
                        <StyledMiddleButton fill={colors.fill} key={btn.title}>
                            {btn.icon && <Icon fontSize={"27px"} width={'27px'} height={'27px'}>{btn.icon}</Icon>}
                            {btn.title}
                        </StyledMiddleButton>
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