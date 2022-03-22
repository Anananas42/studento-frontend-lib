import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../buttons/colors/TextColors";
import { BtnTextL } from "../../buttons/components/BtnText";
import { borderRadius, useThemeContext } from "../../ThemeProvider";
import { useUserContext } from "../../UserProvider";
import { IconL } from "../../utilities/Icon";
import StyledLink from "../../utilities/StyledLink";


interface IStyleProps {
    bg: string;
    fill: string;
    borderRadius: string;
    sectionShadow: string;
}

const StyledUserStatus = styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    user-select: none;
    color: ${props => props.fill};
    background-color: ${props => props.bg};
    border-radius: 0 0 16px 16px;
    padding: 8px 12px;
`;

const StyledUserButton = styled.div<IStyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: ${props => props.borderRadius};
    padding: 8px 4px 4px 16px;
    cursor: pointer;

    > div:first-child {
        padding: 0 16px 4px 0;
    }

    :hover > div:last-child {
        display: block;
    }
`;

const StyledUserButtonHighlight = styled.div<IStyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: ${props => props.borderRadius};

    :hover {
        background-color: ${TextColors.Hover.bg};
    }

    :active {
        background-color: ${TextColors.Active.bg};
    }
`;

const StyledUserInfo = styled.div`
    font-weight: 100;
    white-space: nowrap;

    div:last-child {
        font-size: 12px;
    }
`;

const StyledList = styled.div<IStyleProps>`
    position: absolute;
    top: 100%;
    left: 0;
    width: fit-content;
    min-width: 100%;
    padding: 16px;
    display: none;
    background-color: #fff;
    border-radius: ${props => props.borderRadius};
    box-shadow: ${props => props.sectionShadow};
    white-space: nowrap;
    cursor: default;
`;

const StyledUserMode = styled.div<IStyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: ${props => props.borderRadius} 0 0 ${props => props.borderRadius};

    span {
        padding-left: 16px;
        font-weight: 700;
    }

    > div:first-child {
        padding-bottom: 1px;
    }

    :hover {
        cursor: pointer;
        background-color: ${TextColors.Hover.bg};
    }

    :hover > div:last-child {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    > div:last-child {
        position: absolute;
        display: none;
        top: 0;
        left: 100%;
        background-color: #fff;
        border-radius: 0 ${props => props.borderRadius} ${props => props.borderRadius} ${props => props.borderRadius};
        box-shadow: ${props => props.sectionShadow};
        padding: 16px;
        cursor: default;

        > div {
            padding: 16px;
            cursor: pointer;

            :hover {
                border-radius: ${props => props.borderRadius};
                background-color: ${TextColors.Hover.bg};
            }

            :active {
                background-color: ${TextColors.Active.bg};
            }
        }
    }
`;

const NavUserStatus:FC = () => {
    const { colors, languageMap } = useThemeContext();
    const { userStatus, setUserMode, logout } = useUserContext();

    if (!userStatus) throw new Error("[NavUserStatus] Trying to display NavUserStatus while the user isn't fetched.");

    const baseUrl = userStatus.userMode;
    const styleProps = { bg: colors.primary, fill: colors.fill, borderRadius, sectionShadow: colors.sectionShadow };

    return (
        <StyledUserStatus {...styleProps}>
            <StyledLink to={`/${baseUrl}/profile`}>
                <StyledUserButton {...styleProps}>
                    <IconL>account_circle</IconL>
                    <StyledUserButtonHighlight {...styleProps}/>
                    <StyledUserInfo>
                        <div>{userStatus.username}</div>
                        <div>{userStatus.school}</div>
                    </StyledUserInfo>
                    {userStatus.authorizedUserModes.length > 1 && 
                    <>
                        <IconL>expand_more</IconL>
                        <StyledList {...styleProps} onClick={(e) => {e.preventDefault(); e.stopPropagation()}}>
                            <StyledUserMode {...styleProps}>
                                {`${languageMap.Generic.usermode}:`}<span>{languageMap.Generic.UserModes[userStatus.userMode]}</span><IconL>chevron_right</IconL>
                                <div>
                                    {userStatus.authorizedUserModes.filter(m => m !== userStatus.userMode).map(mode => {
                                        return (
                                        <div key={mode} onClick={() => setUserMode(mode)}>
                                            {languageMap.Generic.UserModes[mode]}
                                        </div>
                                        )
                                    })}
                                </div>
                            </StyledUserMode>
                        </StyledList>
                    </>}
                </StyledUserButton>
            </StyledLink>
            <BtnTextL icon={"logout"} isAfter={false} onClick={() => logout()}>{languageMap.Generic.logout}</BtnTextL>
        </StyledUserStatus>
    )
}

export default NavUserStatus;

