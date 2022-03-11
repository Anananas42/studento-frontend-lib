import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../component-library/ThemeProvider";
import StyledLink from "../../component-library/utilities/StyledLink";

interface IStyledProps {
    sectionRadius: string;
    sectionShadow: string;
    sectionPadding: string;
}

const StyledAddMenu = styled.div`
    display: grid;
    padding-top: 64px;
    height: fit-content;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 32px;
`;

const StyledTile = styled.div<IStyledProps>`
    background-color: #fff;
    width: 320px;
    height: 240px;
    border-radius: ${props => props.sectionRadius};
    box-shadow: ${props => props.sectionShadow};
    padding: ${props => props.sectionPadding};
`;

interface IOptions {
    [key: string]: {
        description: string;
        url: string;
    }
}

const options:IOptions = {
    student: {
        description: "",
        url: "student",
    },
    teacher: {
        description: "",
        url: "teacher",
    },
    subject: {
        description: "",
        url: "subject",
    },
    class: {
        description: "",
        url: "class",
    },
    room: {
        description: "",
        url: "room",
    },
    employee: {
        description: "",
        url: "employee",
    }

}

const AddMenu:FC = () => {
    const { sectionRadius, sectionPadding, colors } = useThemeContext();
    const styleProps = { sectionRadius, sectionPadding, sectionShadow: colors.sectionShadow };

    return (
        <StyledAddMenu>
            {Object.keys(options).map((key) => {
                return (
                    <StyledLink to={options[key].url}>
                        <StyledTile key={key} {...styleProps}>{"Add " + key}</StyledTile>
                    </StyledLink>
                )
            })}
        </StyledAddMenu>
    )
}

export default AddMenu;