import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../buttons/colors/TextColors";
import { BtnTextL } from "../../buttons/components/BtnText";
import { useThemeContext } from "../../ThemeProvider";
import { IconL } from "../../utilities/Icon";


interface IStyledUserStatus {
    bg: string;
    fill: string;
    borderRadius: string;
}

const StyledUserStatus = styled.div<IStyledUserStatus>`
    display: flex;
    align-items: center;
    gap: 8px;
    user-select: none;
    color: ${props => props.fill};
    background-color: ${props => props.bg};
    border-radius: 0 0 16px 16px;
    padding: 8px 16px;
`;

const StyledUserButton = styled.div<IStyledUserStatus>`
    display: flex;
    align-items: center;
    border-radius: ${props => props.borderRadius};
    padding: 8px 16px 4px 16px;
    cursor: pointer;

    &:hover {
        background-color: ${TextColors.Hover.bg};
    }

    &:active {
        background-color: ${TextColors.Active.bg};
    }

    > div:first-child {
        padding: 0 16px 4px 0;
    }
`

const StyledUserInfo = styled.div`
    font-weight: 100;
    white-space: nowrap;

    div:last-child {
        font-size: 12px;
    }
`;

export interface IUserStatus {
    username: string;
    school: string;
    logoutUrl: string;
    profileUrl: string;
    dashboardUrl: string;
}

interface INavUserStatusProps {
    userStatus: IUserStatus;
}

const NavUserStatus:FC<INavUserStatusProps> = (props) => {
    const { userStatus } = props;
    const { colors, borderRadius, languageMap } = useThemeContext();
    const styleProps = { bg: colors.primary, fill: colors.fill, borderRadius};

    return (
        <StyledUserStatus {...styleProps}>
            <StyledUserButton {...styleProps}>
                <IconL>account_circle</IconL>
                <StyledUserInfo>
                    <div>{userStatus.username}</div>
                    <div>{userStatus.school}</div>
                </StyledUserInfo>
            </StyledUserButton>
            <BtnTextL icon={"logout"} isAfter={false} onClick={() => 0}>{languageMap.Generic.logout}</BtnTextL>
        </StyledUserStatus>
    )
}

export default NavUserStatus;