import { FC } from "react";
import styled from "styled-components";
import LanguageForm from "../../forms/components/LanguageForm";
import NavFeatureTiles from "./NavFeatureTiles";
import NavLoginBtn from "./NavLoginBtn";
import NavLogoBtn from "./NavLogoBtn";
import NavUserStatus, { IUserStatus } from "./NavUserStatus";

const StyledNavbarBase = styled.nav`
    position: fixed;
    top: 0;
    width: 1200px;
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
    justify-content: center;
`;

const StyledRightNavbar = styled.div`
    display: flex;
    transform: translateX(50%);

    > div:first-child {
        padding-right: 16px;
    }
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
            <StyledRightNavbar>
                <LanguageForm />
                {userStatus ? <NavUserStatus userStatus={userStatus}/> : <NavLoginBtn />}
            </StyledRightNavbar>
        </StyledNavbarBase>
    )
}

export default NavbarBase;