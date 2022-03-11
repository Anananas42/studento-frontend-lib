import { FC } from "react"
import styled from "styled-components";
import { useThemeContext } from "../../component-library/ThemeProvider";

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
};


const StyledRecentlyAdded = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    height: fit-content;
    background-color: #fff;
    border-radius: ${props => props.sectionRadius};
    box-shadow: ${props => props.sectionShadow};
    padding: ${props => props.sectionPadding};
    color: ${props => props.fill};
    min-width: 320px;
`;

const StyledTitle = styled.div`
    font-size: 24px;
`;

const StyledItem = styled.div`

`;

interface IItem {
    name: string;
    date: string;
    type: AddedItemType;
}

const items:Array<IItem> = [
    {
        name: "4.C",
        date: new Date().toDateString(),
        type: AddedItemType.CLASS,
    },
    {
        name: "Nikolai Kapustin",
        date: new Date().toDateString(),
        type: AddedItemType.STUDENT,
    },
];

const RecentlyAdded:FC = () => {
    const { sectionRadius, colors, sectionPadding, languageMap } = useThemeContext();
    const styleProps = { sectionRadius, sectionPadding, sectionShadow: colors.sectionShadow, fill: colors.fill };

    return (
        <StyledRecentlyAdded {...styleProps}>    
            <StyledTitle {...styleProps}>
                {"Recently added"}
            </StyledTitle>
            {items.map(item => {
                return (
                    <StyledItem>
                        {item.name}
                    </StyledItem>
                )
            })}
        </StyledRecentlyAdded>
    )
}

export default RecentlyAdded;