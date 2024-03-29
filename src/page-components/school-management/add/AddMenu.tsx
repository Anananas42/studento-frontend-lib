import { FC } from "react";
import styled from "styled-components";
import { sectionPadding, sectionRadius, useThemeContext } from "../../../component-library/ThemeProvider";
import { Icon } from "../../../component-library/utilities/Icon";
import StyledLink from "../../../component-library/styles/StyledLink";

interface IStyledProps {
    fill: string;
    primary: string;
    sectionRadius: string;
    sectionShadow: string;
    sectionPadding: string;
}

const StyledAddMenu = styled.div<IStyledProps>`
    display: grid;
    height: fit-content;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 3.2rem;
    color: ${props => props.fill};
`;

const StyledTile = styled.div<IStyledProps>`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 28rem;
    height: 20rem;
    border-radius: ${props => props.sectionRadius};
    box-shadow: ${props => props.sectionShadow};
    padding: ${props => props.sectionPadding};
    
    :hover {
        background: linear-gradient(20deg, ${props => props.primary}, rgba(255, 255, 255, 0.4)),
                    radial-gradient(circle closest-corner at 0% 0%,
                                white, white 20%, ${props => props.primary}); 
    }
`;

const StyledOptionTitle = styled.div<IStyledProps>`
    font-size: 2.6rem;
    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 0.8rem;

    > div {
        padding-top: 6px;
    }

`;


const options = [
    "student",
    "teacher",
    "subject",
    "class",
    "room",
    "employee",
];

export const AddIconMap:any = {
    class: "groups",
    employee: "badge",
    room: "meeting_room",
    student: "person",
    subject: "school",
    teacher: "assignment_ind",
}

const AddMenu:FC = () => {
    const { colors, languageMap } = useThemeContext();
    const styleProps = { sectionRadius, sectionPadding, sectionShadow: colors.sectionShadow, fill: colors.fill, primary: colors.primary };

    const translations:any = languageMap.SchoolManagement;

    return (
        <StyledAddMenu {...styleProps}>
            {options.map(opt => {
                return (
                    <StyledLink key={opt} to={opt}>
                        <StyledTile {...styleProps}>
                            <Icon fontSize={"56px"}>{AddIconMap[opt]}</Icon>
                            <div>
                                <StyledOptionTitle {...styleProps}><Icon fontSize={"40px"}>add</Icon><span>{translations[opt]}</span></StyledOptionTitle>
                            </div>
                        </StyledTile>
                    </StyledLink>
                )
            })}
        </StyledAddMenu>
    )
}

export default AddMenu;