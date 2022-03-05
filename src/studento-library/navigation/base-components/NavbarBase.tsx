import { FC } from "react";
import styled from "styled-components";
import NavFeatureTiles from "./NavFeatureTiles";
import NavLoginBtn from "./NavLoginBtn";
import NavLogoBtn from "./NavLogoBtn";
import NavUserStatus, { IUserStatus } from "./NavUserStatus";

const StyledNavbarBase = styled.nav`
    position: fixed;
    top: 0;
    width: 800px;
    z-index: 5;
    height: 74px;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
`;

const StyledMiddleNavbar = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
`;

interface IFeatureTiles {
    [key: string]: {
        url: string;
        icon: string;
    };
}

interface NavbarProps {
    userStatus?: IUserStatus;
    featureTiles?: IFeatureTiles;

}

const NavbarBase:FC<NavbarProps> = (props) => {
    const { userStatus, featureTiles } = props;

    return (
        <StyledNavbarBase>
            <NavLogoBtn />
            <StyledMiddleNavbar>
                <NavFeatureTiles />
            </StyledMiddleNavbar>
            {userStatus ? <NavUserStatus userStatus={userStatus}/> : <NavLoginBtn />}
        </StyledNavbarBase>
    )
}

export default NavbarBase;