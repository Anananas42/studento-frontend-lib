import { FC } from "react"
import styled from "styled-components";
import { useThemeContext } from "../../../component-library/ThemeProvider";
import { useUserContext } from "../../../component-library/UserProvider";
import { IconL, IconM } from "../../../component-library/utilities/Icon";
import StyledLink from "../../../component-library/utilities/StyledLink";
import { AddIconMap } from "./AddMenu";

enum AddedItemType {
    CLASS = "class",
    EMPLOYEE = "employee",
    ROOM = "room",
    TEACHER = "teacher",
    STUDENT = "student",
    SUBJECT = "subject",
}

interface IStyleProps {
    sectionRadius: string;
    sectionShadow: string;
    sectionPadding: string;
    fill: string;
    primary: string;
    primaryAlt: string;
    borderRadius: string;
};


const StyledRecentlyAdded = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    height: fit-content;
    color: ${props => props.fill};
    width: fit-content;
    gap: 8px;
`;

const StyledTitle = styled.div`
    font-size: 2.8rem;
    padding-bottom: 8px;
`;

const StyledItem = styled.div<IStyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: ${props => props.borderRadius};
    background-color: #fff;
    padding: 2px;
    box-shadow: 2px 2px 8px -2px #453c3042;
    width: 320px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    user-select: none;

    > div:first-child {
        padding-bottom: 0px;
        min-width: 50px;
    }

    > span {
        font-size: 1.8rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 40px;
    }

    > div:last-child {
        position: absolute;
        color: ${props => props.fill};
        right: 8px;
        top: 2px;
        opacity: 0;
        transition: all 0.15s ease-in-out;
    }

    :hover {
        > div:last-child {
            transform: translateX(4px);
            color: ${props => props.fill};
            opacity: 1;
        }
    }

    :hover {
        background-color: ${props => props.primary};
    }
`;

interface IItem {
    name: string;
    id: number;
    type: AddedItemType;
}

const items:Array<IItem> = [
    {
        name: "4.C",
        id: 42,
        type: AddedItemType.CLASS,
    },
    {
        name: "Nikolai Kapustin",
        id: 43,
        type: AddedItemType.STUDENT,
    },
];

const RecentlyAdded:FC = () => {
    const { sectionRadius, colors, sectionPadding, borderRadius, languageMap } = useThemeContext();
    const { userStatus } = useUserContext();
    const styleProps = { sectionRadius, sectionPadding, sectionShadow: colors.sectionShadow, fill: colors.fill, primary: colors.primary, primaryAlt: colors.primaryAlt, borderRadius };

    return (
        <StyledRecentlyAdded {...styleProps}>    
            <StyledTitle {...styleProps}>
                {languageMap.SchoolManagement.AddPage.recentlyAdded}
            </StyledTitle>
            {items.map(item => {
                return (
                    <StyledLink key={item.type + item.id} to={`/${userStatus?.userMode}/find/${item.type}/${item.id}`}>
                        <StyledItem {...styleProps}>
                            <IconM>{AddIconMap[item.type]}</IconM>
                            <span>{item.name}</span>
                            <IconM>arrow_forward</IconM>
                        </StyledItem>
                    </StyledLink>
                )
            })}
        </StyledRecentlyAdded>
    )
}

export default RecentlyAdded;