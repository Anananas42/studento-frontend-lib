import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../component-library/ThemeProvider";
import { Icon } from "../../component-library/utilities/Icon";
import StyledLink from "../../component-library/utilities/StyledLink";

interface IStyledProps {
    fill: string;
    fillSecondary: string;
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
    gap: 32px;
    color: ${props => props.fill};
`;

const StyledTile = styled.div<IStyledProps>`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 320px;
    height: 240px;
    border-radius: ${props => props.sectionRadius};
    box-shadow: ${props => props.sectionShadow};
    padding: ${props => props.sectionPadding};
    
    :hover {
        background: linear-gradient(20deg, ${props => props.primary}, white),
                    radial-gradient(circle closest-corner at 0% 0%,
                                white, white 20%, ${props => props.primary});
    }
`;

const StyledOptionTitle = styled.div<IStyledProps>`
    font-size: 28px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 8px;

    > div {
        padding-top: 6px;
    }

`;

const StyledOptionDesc = styled.div<IStyledProps>`
    color: ${props => props.fillSecondary};

`;

interface IOptions {
    [key: string]: {
        description: string;
        url: string;
        icon: string;
    }
}

const options:IOptions = {
    student: {
        description: "",
        url: "student",
        icon: "person",
    },
    teacher: {
        description: "",
        url: "teacher",
        icon: "assignment_ind",
    },
    subject: {
        description: "",
        url: "subject",
        icon: "school",
    },
    class: {
        description: "",
        url: "class",
        icon: "groups",
    },
    room: {
        description: "",
        url: "room",
        icon: "meeting_room",
    },
    employee: {
        description: "",
        url: "employee",
        icon: "badge",
    }

}

const AddMenu:FC = () => {
    const { sectionRadius, sectionPadding, colors, languageMap } = useThemeContext();
    const styleProps = { sectionRadius, sectionPadding, sectionShadow: colors.sectionShadow, fill: colors.fill, fillSecondary: colors.fillSecondary, primary: colors.primary };

    const translations:any = languageMap.SchoolManagement;

    return (
        <StyledAddMenu {...styleProps}>
            {Object.keys(options).map((key) => {
                return (
                    <StyledLink key={key} to={options[key].url}>
                        <StyledTile {...styleProps}>
                            <Icon fontSize={"56px"}>{options[key].icon}</Icon>
                            <div>
                                <StyledOptionTitle {...styleProps}><Icon fontSize={"40px"}>add</Icon><span>{translations[key]}</span></StyledOptionTitle>
                                <StyledOptionDesc {...styleProps}>{options[key].description}</StyledOptionDesc>
                            </div>
                        </StyledTile>
                    </StyledLink>
                )
            })}
        </StyledAddMenu>
    )
}

export default AddMenu;