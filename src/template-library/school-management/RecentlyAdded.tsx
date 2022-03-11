import { FC } from "react"
import styled from "styled-components";
import { useThemeContext } from "../../component-library/ThemeProvider";
import { IconL } from "../../component-library/utilities/Icon";
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
    borderRadius: string;
};


const StyledRecentlyAdded = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    height: fit-content;
    color: ${props => props.fill};
    width: fit-content;
    gap: 16px;
`;

const StyledTitle = styled.div`
    font-size: 28px;
    padding-bottom: 8px;
`;

const StyledItem = styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    border-radius: ${props => props.borderRadius};
    background-color: #fff;
    padding: 8px;
    box-shadow: 2px 2px 8px -2px #453c3042;
    width: 320px;

    > div {
        padding-bottom: 4px;
        min-width: 50px;
    }

    > span {
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
    const styleProps = { sectionRadius, sectionPadding, sectionShadow: colors.sectionShadow, fill: colors.fill, borderRadius };

    return (
        <StyledRecentlyAdded {...styleProps}>    
            <StyledTitle {...styleProps}>
                {"Recently added"}
            </StyledTitle>
            {items.map(item => {
                return (
                    <StyledItem {...styleProps}>
                        <IconL>{AddIconMap[item.type]}</IconL>
                        <span>{item.name}</span>
                    </StyledItem>
                )
            })}
        </StyledRecentlyAdded>
    )
}

export default RecentlyAdded;