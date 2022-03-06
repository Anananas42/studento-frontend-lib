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
    width: 100%;
    max-width: 1400px;
    z-index: 5;
    height: 74px;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledMiddleNavbar = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    > div:first-child {
        margin-right: 16px;
    }
`;

const StyledRightNavbar = styled.div`
    display: flex;
    margin-left: 40px;

    > div:first-child {
        padding-right: 16px;
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
            <NavLogoBtn />
            <StyledMiddleNavbar>
                {featureTiles && <NavFeatureTiles featureTiles={featureTiles}/>}
                {Object.values(navButtons).map(btn => {
                    return (
                        <StyledMiddleButton fill={colors.fill}>
                            {btn.icon && <Icon fontSize={"27px"} width={'27px'} height={'27px'}>{btn.icon}</Icon>}
                            {btn.title}
                        </StyledMiddleButton>
                    )
                })}
            </StyledMiddleNavbar>
            <StyledRightNavbar>
                <LanguageForm />
                {userStatus ? <NavUserStatus userStatus={userStatus}/> : <NavLoginBtn />}
            </StyledRightNavbar>
        </StyledNavbarBase>
    )
}

export default NavbarBase;